import { NextResponse } from "next/server";

// Node runtime — the Monday token is server-side only and must never reach the client.
export const runtime = "nodejs";

const MONDAY_API_URL = "https://api.monday.com/v2";
const BOARD_ID = "18419799211";
const GROUP_ID = "topics";

// Exact Monday column IDs — do not rename.
const COLUMNS = {
  leadStage: "color_mm4sjvsk",
  email: "email_mm4s1x01",
  phone: "phone_mm4s2ba1",
  website: "text_mm4s1nx1",
  services: "dropdown_mm4sfh4c",
  goals: "dropdown_mm4sgqkr",
  budget: "dropdown_mm4swrf9",
  source: "text_mm4s74ja",
  submitted: "date_mm4sj061",
} as const;

interface LeadPayload {
  services?: string[];
  goals?: string[];
  budget?: string;
  website?: string;
  name?: string;
  email?: string;
  phone?: string;
}

const CREATE_ITEM_MUTATION = `
  mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
    create_item(
      board_id: $boardId,
      group_id: "${GROUP_ID}",
      item_name: $itemName,
      column_values: $columnValues,
      create_labels_if_missing: true
    ) { id }
  }
`;

export async function POST(request: Request) {
  const token = process.env.MONDAY_API_TOKEN;
  if (!token) {
    console.error("[lead] MONDAY_API_TOKEN is not set");
    return NextResponse.json(
      { ok: false, error: "Server is not configured." },
      { status: 500 }
    );
  }

  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const services = Array.isArray(body.services) ? body.services : [];
  const goals = Array.isArray(body.goals) ? body.goals : [];
  const budget = typeof body.budget === "string" ? body.budget.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phoneRaw = typeof body.phone === "string" ? body.phone.trim() : "";

  // Item name: first non-empty of name → company → website → email.
  // (No separate "company" field is collected, so website doubles for it.)
  const itemName = name || website || email || "New Growth Plan Lead";

  // Build column_values verbatim to Monday's expected formats.
  const columnValues: Record<string, unknown> = {
    [COLUMNS.leadStage]: { label: "New Lead" },
    [COLUMNS.website]: website,
    [COLUMNS.services]: { labels: services },
    [COLUMNS.goals]: { labels: goals },
    [COLUMNS.budget]: budget ? { labels: [budget] } : { labels: [] },
    [COLUMNS.source]: "compoundmedia.io /growth-plan",
    [COLUMNS.submitted]: { date: new Date().toISOString().slice(0, 10) },
  };

  if (email) {
    columnValues[COLUMNS.email] = { email, text: email };
  }

  // Phone: digits only, omit entirely if blank.
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  if (phoneDigits) {
    columnValues[COLUMNS.phone] = {
      phone: phoneDigits,
      countryShortName: "US",
    };
  }

  try {
    const res = await fetch(MONDAY_API_URL, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
        "API-Version": "2024-10",
      },
      body: JSON.stringify({
        query: CREATE_ITEM_MUTATION,
        variables: {
          boardId: BOARD_ID,
          itemName,
          columnValues: JSON.stringify(columnValues),
        },
      }),
    });

    const data = await res.json();

    if (!res.ok || data.errors) {
      console.error(
        "[lead] Monday API error:",
        JSON.stringify(data.errors ?? data, null, 2)
      );
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const id = data?.data?.create_item?.id;
    if (!id) {
      console.error("[lead] Monday returned no item id:", JSON.stringify(data));
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error("[lead] Request to Monday failed:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
