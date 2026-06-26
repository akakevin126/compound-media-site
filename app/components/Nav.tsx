"use client";

import Link from "next/link";
import { useState } from "react";
import { ChunkyButton } from "./ChunkyButton";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-[3px] border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-2xl font-bold text-ink"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              Compound<span className="text-coral">Media</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-ink" style={{ fontFamily: "'Inter', sans-serif" }}>
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/#results">Results</NavLink>
            <NavLink href="/#pricing">Pricing</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#blog">Blog</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/growth-plan">
              <ChunkyButton size="sm">Get My Growth Plan</ChunkyButton>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-[3px] border-ink bg-white px-4 py-6 flex flex-col gap-4">
          {["Services", "Results", "Pricing", "About", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="font-semibold text-ink hover:text-coral transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="/growth-plan" onClick={() => setMobileOpen(false)}>
            <ChunkyButton size="sm" className="w-full justify-center">
              Get My Growth Plan
            </ChunkyButton>
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hover:text-coral transition-colors uppercase tracking-wide text-xs font-bold"
      style={{ letterSpacing: "0.08em" }}
    >
      {children}
    </Link>
  );
}
