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
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return POSTS;
}
