import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Markdown } from "../../components/Markdown";
import { ChunkyButton } from "../../components/ChunkyButton";
import { getAllPosts, getPost } from "../../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found — Compound Media" };
  return {
    title: `${post.title} — Compound Media`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />

      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-ink/50 hover:text-coral font-semibold text-sm transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to blog
        </Link>

        {/* Date */}
        <p className="text-xs font-bold text-coral uppercase tracking-widest mb-4">
          {post.date}
        </p>

        {/* Body (markdown — the leading # renders as the title) */}
        <div>
          <Markdown>{post.body}</Markdown>
        </div>

        {/* CTA card */}
        <div className="mt-12 bg-coral-light border-[3px] border-coral rounded-card p-8 text-center">
          <h2
            className="text-2xl font-bold text-ink mb-3"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Ready to make it compound?
          </h2>
          <p className="text-ink/70 mb-6">
            Get a custom roadmap for your business — free, no commitment.
          </p>
          <Link href="/growth-plan">
            <ChunkyButton>Get Your Free Growth Plan</ChunkyButton>
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-ink text-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Compound<span className="text-coral">Media</span>
          </span>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Compound Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
