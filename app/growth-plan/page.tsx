"use client";

import { useState, useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChunkyChip } from "../components/ChunkyChip";
import { ChunkyButton } from "../components/ChunkyButton";
import { SmallCoin } from "../components/CoinCluster";

// ── Types ──────────────────────────────────────────────────────────────────

interface FunnelState {
  services: string[];
  goals: string[];
  budget: string;
  website: string;
  name: string;
  email: string;
  phone: string;
}

type FunnelAction =
  | { type: "TOGGLE_MULTI"; field: "services" | "goals"; value: string }
  | { type: "SET_BUDGET"; value: string }
  | { type: "SET_FIELD"; field: "website" | "name" | "email" | "phone"; value: string };

function funnelReducer(state: FunnelState, action: FunnelAction): FunnelState {
  switch (action.type) {
    case "TOGGLE_MULTI": {
      const arr = state[action.field];
      return {
        ...state,
        [action.field]: arr.includes(action.value)
          ? arr.filter((v) => v !== action.value)
          : [...arr, action.value],
      };
    }
    case "SET_BUDGET":
      return { ...state, budget: action.value };
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

// ── Data ──────────────────────────────────────────────────────────────────

const SERVICES_OPTIONS = [
  "Paid Media",
  "Organic & Social",
  "Content Strategy",
  "Email Marketing",
  "SEO",
  "Conversion Rate Optimization (CRO)",
  "Direct Marketing",
  "Other",
];

const GOALS_OPTIONS = [
  "Increase revenue",
  "Increase profit",
  "Get more conversions",
  "Lower my acquisition cost",
  "Improve my ROI",
  "All of the above",
  "Other",
];

const BUDGET_OPTIONS = [
  "$0 – $1,000",
  "$1,001 – $5,000",
  "$5,001 – $10,000",
  "$10,001 – $25,000",
  "$25,001 – $100,000",
  "$100,001+",
];

// ── Step config ────────────────────────────────────────────────────────────

const STEP_TITLES = [
  "What do you need help with?",
  "What are your goals?",
  "What's your current monthly marketing budget?",
  "Tell us where to send your plan",
];

const STEP_SUBS = [
  "Select all that apply — we'll tailor the plan to your mix.",
  "Pick everything that matters to you.",
  "An estimated guess is totally fine.",
  "We'll build your custom roadmap and send it straight to your inbox.",
];

// ── Slide animation ────────────────────────────────────────────────────────

const VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0 }),
};

// ── Main component ─────────────────────────────────────────────────────────

export default function GrowthPlan() {
  const [step, setStep] = useState(0); // 0-3 = steps, 4 = success
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [state, dispatch] = useReducer(funnelReducer, {
    services: [],
    goals: [],
    budget: "",
    website: "",
    name: "",
    email: "",
    phone: "",
  });

  // Validation
  const isValid = (s: number) => {
    if (s === 0) return state.services.length > 0;
    if (s === 1) return state.goals.length > 0;
    if (s === 2) return state.budget !== "";
    if (s === 3) return state.website.trim().length > 0 && state.email.trim().length > 0;
    return false;
  };

  const advance = () => {
    if (!isValid(step)) return;
    setDirection(1);
    setStep((s) => s + 1);
  };

  const back = () => {
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const handleSubmit = async () => {
    if (!isValid(3)) return;
    setSubmitting(true);

    const payload = {
      services: state.services,
      goals: state.goals,
      budget: state.budget,
      website: state.website,
      name: state.name,
      email: state.email,
      phone: state.phone,
      source: "compoundmedia.io /growth-plan",
      submittedAt: new Date().toISOString(),
    };

    // TODO: wire up lead capture here
    console.log("[Compound Media] Lead captured:", payload);

    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setDirection(1);
    setStep(4);
  };

  return (
    <div className="min-h-screen sky-gradient relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}
      />

      {/* Floating coin decorations */}
      <FloatingCoins />

      {/* Nav back link */}
      <div className="relative z-10 px-4 pt-6">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Compound Media
        </Link>
      </div>

      {/* Header */}
      {step < 4 && (
        <div className="relative z-10 text-center px-4 pt-10 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            Get Your Free Growth Plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/80 text-base sm:text-lg max-w-xl mx-auto"
          >
            A custom roadmap showing exactly which channels to compound first — built around your goals and budget.
          </motion.p>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 border-[2px] border-white ${
                  i === step
                    ? "w-6 h-6 bg-coral border-coral"
                    : i < step
                    ? "w-4 h-4 bg-white"
                    : "w-4 h-4 bg-transparent"
                }`}
              />
            ))}
          </div>
          <p className="text-white/50 text-xs mt-2 font-medium">
            Step {step + 1} of 4
          </p>
        </div>
      )}

      {/* Card */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait" custom={direction}>
          {step < 4 ? (
            <motion.div
              key={`step-${step}`}
              custom={direction}
              variants={VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white border-[3px] border-ink rounded-card shadow-[8px_8px_0_0_#2D3250] p-6 sm:p-10"
            >
              <h2
                className="text-2xl sm:text-3xl font-bold text-ink mb-1"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {STEP_TITLES[step]}
              </h2>
              <p className="text-ink/50 text-sm mb-8">{STEP_SUBS[step]}</p>

              {/* Step content */}
              {step === 0 && (
                <ChipGrid
                  options={SERVICES_OPTIONS}
                  selected={state.services}
                  onToggle={(v) => dispatch({ type: "TOGGLE_MULTI", field: "services", value: v })}
                />
              )}

              {step === 1 && (
                <ChipGrid
                  options={GOALS_OPTIONS}
                  selected={state.goals}
                  onToggle={(v) => dispatch({ type: "TOGGLE_MULTI", field: "goals", value: v })}
                />
              )}

              {step === 2 && (
                <div className="flex flex-col gap-3">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => dispatch({ type: "SET_BUDGET", value: opt })}
                      className={`w-full text-left px-6 py-4 rounded-full border-[3px] font-semibold text-sm transition-all duration-150
                        ${state.budget === opt
                          ? "bg-coral-light border-coral text-coral shadow-[4px_4px_0_0_#F4837C]"
                          : "bg-white border-ink text-ink shadow-[4px_4px_0_0_#2D3250] hover:bg-coral-light hover:border-coral hover:text-coral hover:shadow-[4px_4px_0_0_#F4837C]"
                        }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-ink/50 uppercase tracking-widest mb-1.5 block">
                      Website <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="yourcompany.com"
                      value={state.website}
                      onChange={(e) => dispatch({ type: "SET_FIELD", field: "website", value: e.target.value })}
                      className="w-full px-6 py-4 border-[3px] border-ink rounded-full shadow-[4px_4px_0_0_#2D3250] text-ink placeholder:text-ink/30 font-medium outline-none focus:border-coral focus:shadow-[4px_4px_0_0_#F4837C] transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink/50 uppercase tracking-widest mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Smith"
                      value={state.name}
                      onChange={(e) => dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })}
                      className="w-full px-6 py-4 border-[3px] border-ink rounded-full shadow-[4px_4px_0_0_#2D3250] text-ink placeholder:text-ink/30 font-medium outline-none focus:border-coral focus:shadow-[4px_4px_0_0_#F4837C] transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink/50 uppercase tracking-widest mb-1.5 block">
                      Email <span className="text-coral">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={state.email}
                      onChange={(e) => dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })}
                      className="w-full px-6 py-4 border-[3px] border-ink rounded-full shadow-[4px_4px_0_0_#2D3250] text-ink placeholder:text-ink/30 font-medium outline-none focus:border-coral focus:shadow-[4px_4px_0_0_#F4837C] transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink/50 uppercase tracking-widest mb-1.5 block">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={state.phone}
                      onChange={(e) => dispatch({ type: "SET_FIELD", field: "phone", value: e.target.value })}
                      className="w-full px-6 py-4 border-[3px] border-ink rounded-full shadow-[4px_4px_0_0_#2D3250] text-ink placeholder:text-ink/30 font-medium outline-none focus:border-coral focus:shadow-[4px_4px_0_0_#F4837C] transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>
              )}

              {/* Action row */}
              <div className="flex items-center justify-between mt-8 gap-4">
                {step > 0 ? (
                  <button
                    onClick={back}
                    className="text-ink/50 hover:text-ink font-semibold text-sm flex items-center gap-1 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 3 ? (
                  <ChunkyButton onClick={advance} disabled={!isValid(step)}>
                    {step === 0 ? "Start My Free Growth Plan" : "Continue"}
                  </ChunkyButton>
                ) : (
                  <ChunkyButton onClick={handleSubmit} disabled={!isValid(3) || submitting}>
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.3" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Building…
                      </span>
                    ) : (
                      "Get My Plan →"
                    )}
                  </ChunkyButton>
                )}
              </div>
            </motion.div>
          ) : (
            // ── Success state ──
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white border-[3px] border-ink rounded-card shadow-[8px_8px_0_0_#2D3250] p-8 sm:p-14 text-center"
            >
              {/* Big checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                className="w-20 h-20 bg-cash border-[3px] border-ink rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M8 18L15 25L28 12" stroke="#2D3250" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

              <h2
                className="text-3xl sm:text-4xl font-bold text-ink mb-3"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Your growth plan is on the way!
              </h2>
              <p className="text-ink/60 text-base sm:text-lg mb-8 max-w-md mx-auto">
                Check your inbox — we&apos;re building your custom compounding roadmap and will have it to you shortly.
              </p>

              <div className="bg-coral-light border-[3px] border-coral rounded-card p-5 mb-8 text-left max-w-xs mx-auto">
                <p className="text-xs font-bold text-coral uppercase tracking-widest mb-2">What happens next</p>
                <ul className="text-sm text-ink/70 space-y-1.5">
                  <li className="flex gap-2 items-start"><span className="text-coral mt-0.5">→</span>Strategy call booked within 48hr</li>
                  <li className="flex gap-2 items-start"><span className="text-coral mt-0.5">→</span>Custom channel audit delivered</li>
                  <li className="flex gap-2 items-start"><span className="text-coral mt-0.5">→</span>90-day compounding roadmap shared</li>
                </ul>
              </div>

              <Link href="/">
                <ChunkyButton variant="white">Back to Home</ChunkyButton>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function ChipGrid({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <ChunkyChip key={opt} selected={selected.includes(opt)} onClick={() => onToggle(opt)}>
          {opt}
        </ChunkyChip>
      ))}
    </div>
  );
}

function FloatingCoins() {
  const coins = [
    { top: "12%", left: "5%", delay: 0, size: "w-10 h-10" },
    { top: "25%", right: "4%", delay: 1.1, size: "w-8 h-8" },
    { top: "65%", left: "3%", delay: 0.6, size: "w-6 h-6" },
    { top: "75%", right: "6%", delay: 1.5, size: "w-10 h-10" },
    { top: "45%", left: "7%", delay: 0.3, size: "w-7 h-7" },
  ];

  return (
    <>
      {coins.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute z-0 ${c.size} hidden sm:block`}
          style={{ top: c.top, ...(c.left ? { left: c.left } : { right: (c as { right?: string }).right }) }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
        >
          <SmallCoin className="w-full h-full" />
        </motion.div>
      ))}
    </>
  );
}
