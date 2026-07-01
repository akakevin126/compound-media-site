export interface Post {
  slug: string;
  title: string;
  date: string; // human-readable display date
  excerpt: string;
  body: string; // markdown
}

export const POSTS: Post[] = [
  {
    slug: "what-a-social-media-campaign-can-do",
    title: "What a Social Media Campaign Can Do for Your Business",
    date: "April 29, 2026",
    excerpt:
      "Posting when you remember to isn't a campaign. Here's what a real social media campaign actually does for your business — and why it compounds.",
    body: `# What a Social Media Campaign Can Do for Your Business

Posting when you remember to isn't a campaign — it's a hobby. A real social media campaign has a goal, a message, a budget, and a way to measure whether it worked. Run right, here's what it actually does.

**Puts you in front of the right people.** Paid targeting lets you choose exactly who sees you — by location, interests, or even people who've already visited your site. You're not paying to reach everyone, just the people likely to buy.

**Builds an audience you own.** Every campaign grows a pool of people you can retarget and re-engage later. That makes your next campaign cheaper and more effective — your growth compounds instead of resetting each month.

**Generates leads and sales you can measure.** Form fills, calls, purchases — all tracked, down to your cost per lead and return on ad spend. You stop guessing whether marketing works and start seeing it.

**Builds trust before anyone talks to you.** By the time a customer reaches out, they've seen you show up a dozen times. The campaign warms the relationship so the sale is easier.

The catch: it has to be built like a system, not a side task — and someone has to watch the data and tighten it as it runs. That's the whole idea behind Compound Media: every channel feeding the next, so your growth builds on itself.

**Want to see what that looks like for your business?** [Get your free growth plan](/growth-plan) — no commitment, no credit card.`,
  },
  {
    slug: "what-is-a-hero-video",
    title: "What Is a Hero Video?",
    date: "May 10, 2026",
    excerpt:
      "A hero video is the short intro video on your homepage. Here's what it is — and how it builds trust and recognition for your business.",
    body: `# What Is a Hero Video?

A hero video is the short, high-quality video that lives front and center on your website — usually the first thing a visitor sees. It's a 30-to-90-second introduction to who you are, what you do, and why anyone should care. Think of it as your handshake before the handshake.

Here's why it matters for a business.

**It puts a face and a voice to your brand.** People trust people, not logos. A hero video shows the humans, the space, the work — and that instantly feels more real than a wall of text. Trust starts the second someone sees you're a real operation.

**It explains what you do in seconds.** Most visitors won't read your homepage. They'll watch a short video, though. A hero video gets your message across fast, before anyone bounces — no scrolling, no digging.

**It signals you're the real deal.** A polished video quietly says "this business is established and takes itself seriously." That impression sticks, and it separates you from competitors who look thrown-together.

**It makes you recognizable everywhere.** The same video works on your site, socials, ads, and email. Every place someone sees it, they remember you a little more — recognition that builds on itself over time.

That last part is the whole idea behind Compound Media: one strong asset working across every channel, so your brand compounds instead of resetting.

**Want a plan for putting video to work?** [Get your free growth plan](/growth-plan) — no commitment, no credit card.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  // Newest first by date.
  return [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
