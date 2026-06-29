import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { getAllPosts } from "../lib/posts";

export const metadata: Metadata = {
  title: "Blog — Compound Media",
  description:
    "Ideas on paid media, organic, email, and content — and how to make every channel compound.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />

      {/* Header band */}
      <section className="sky-gradient relative overflow-hidden py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h1
            className="text-4xl sm:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            The Compound Blog
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto font-medium">
            Practical ideas on paid, organic, email, and content — and how to make every
            channel build on the last.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 64 L0 32 Q360 0 720 32 Q1080 64 1440 32 L1440 64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Post list */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-white border-[3px] border-ink rounded-card shadow-[8px_8px_0_0_#2D3250] p-6 sm:p-8 transition-all duration-150 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_0_#2D3250]">
                <p className="text-xs font-bold text-coral uppercase tracking-widest mb-3">
                  {post.date}
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-ink mb-3 group-hover:text-coral transition-colors"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  {post.title}
                </h2>
                <p className="text-ink/60 text-base sm:text-lg leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-coral font-bold text-sm uppercase tracking-wide">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

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
