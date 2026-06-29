"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "./components/Nav";
import { ChunkyButton } from "./components/ChunkyButton";
import { FlywheelIllustration } from "./components/FlywheelIllustration";
import { CoinCluster } from "./components/CoinCluster";

const DATA_PILLS = [
  { label: "Audience Data", delay: 0 },
  { label: "Channel Data", delay: 0.4 },
  { label: "Conversion Data", delay: 0.8 },
  { label: "Creative Data", delay: 1.2 },
  { label: "Revenue Data", delay: 0.6 },
];

const SERVICES = [
  { icon: "📣", title: "Paid Media", desc: "Meta, Google, TikTok, and beyond — campaigns built to scale." },
  { icon: "🌱", title: "Organic & Social", desc: "Content that builds audience and authority over time." },
  { icon: "✉️", title: "Email Marketing", desc: "Automated flows and broadcasts that convert and retain." },
  { icon: "🔍", title: "SEO", desc: "Visibility that compounds month over month." },
  { icon: "✍️", title: "Content Strategy", desc: "A unified content engine feeding every channel." },
  { icon: "📈", title: "CRO", desc: "Turn more visitors into customers with data-driven testing." },
];

const RESULTS = [
  { metric: "3.8×", label: "Average ROAS across paid channels" },
  { metric: "62%", label: "Avg. YoY revenue growth for clients" },
  { metric: "180+", label: "Brands compounded so far" },
  { metric: "48hr", label: "Average time to first strategy session" },
];

const CLIENTS = [
  { name: "I Must Manifest", url: "https://imustmanifest.com/" },
  { name: "Green Tsunami Foods", url: "https://greentsunamifoods.com/" },
  { name: "AHBPA", url: "https://ahbpa.org/" },
  { name: "Serenity Concrete & Fence", url: "https://www.serenityconcretefence.com/" },
  { name: "Texas Air Pro", url: "https://www.txairpro.com/index.html" },
  { name: "Property Tax Relief Group", url: "https://www.propertytaxreliefgroup.com/" },
];

const PILL_POSITIONS = [
  "absolute -left-4 sm:-left-20 lg:-left-28 top-8",
  "absolute -right-4 sm:-right-20 lg:-right-28 top-4",
  "absolute -left-4 sm:-left-20 lg:-left-28 top-44 sm:top-52",
  "absolute -right-4 sm:-right-20 lg:-right-28 top-44 sm:top-52",
  "absolute left-1/2 -translate-x-1/2 -top-10",
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />

      {/* ── Hero ── */}
      <section className="sky-gradient relative overflow-hidden pb-24 pt-16 sm:pt-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full px-5 py-2 text-white text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cash inline-block animate-pulse" />
            Full-Service Media Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            The Full-Service Media Agency
            <br />
            <span className="relative inline-block mt-2">
              Where{" "}
              <span className="relative">
                Every Channel
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 400 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M4 8 Q100 2 200 7 Q300 12 396 5"
                    stroke="#F4837C"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              Compounds
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-medium"
          >
            Paid, organic, email, and content — run as one system that builds on itself month over month.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <div className="relative">
              <CoinCluster className="absolute -right-20 -top-10 w-20 opacity-90 hidden sm:block pointer-events-none" />
              <Link href="/growth-plan">
                <ChunkyButton size="lg">Get Your Free Growth Plan</ChunkyButton>
              </Link>
            </div>
            <p className="text-white/70 text-sm">No commitment. No credit card.</p>
          </motion.div>

          {/* Illustration + floating pills */}
          <div className="relative max-w-md mx-auto">
            {DATA_PILLS.map((pill, i) => (
              <motion.div
                key={pill.label}
                className={`${PILL_POSITIONS[i]} z-10 hidden sm:block`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + pill.delay, duration: 0.4 }}
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 2.8 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white border-[3px] border-ink rounded-full px-4 py-2 text-ink font-semibold text-xs shadow-[4px_4px_0_0_#2D3250] whitespace-nowrap"
                >
                  {pill.label}
                </motion.div>
              </motion.div>
            ))}

            {/* Connector lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
              viewBox="0 0 400 320"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M-60 60 Q100 130 200 160" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
              <path d="M460 50 Q300 120 200 160" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
              <path d="M-60 210 Q100 185 200 160" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
              <path d="M460 210 Q300 185 200 160" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
              <path d="M200 -30 L200 130" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <FlywheelIllustration />
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 64 L0 32 Q360 0 720 32 Q1080 64 1440 32 L1440 64 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Logo bar ── */}
      <section className="bg-white border-b-[3px] border-ink py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs font-bold text-ink/40 uppercase tracking-widest mb-5">
            Trusted by ambitious brands
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-8 sm:gap-14">
            {CLIENTS.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/25 hover:text-coral font-bold text-xl text-center transition-all duration-200 hover:scale-105"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {client.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Results That Compound
            </h2>
            <p className="text-ink/60 text-lg max-w-xl mx-auto">
              Our integrated approach means every channel powers the next.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border-[3px] border-ink rounded-card shadow-[8px_8px_0_0_#2D3250] p-6 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-coral mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  {r.metric}
                </div>
                <div className="text-sm text-ink/70 font-medium">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 sky-gradient relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Every Channel. One Team.
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              No silos. No hand-offs. A unified strategy across every touchpoint.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border-[3px] border-ink rounded-card shadow-[8px_8px_0_0_#2D3250] p-6 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="text-xl font-bold text-ink mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  {svc.title}
                </h3>
                <p className="text-ink/60 text-sm">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Ready to start compounding?
          </h2>
          <p className="text-ink/60 text-lg mb-10">
            Get a custom growth plan — free, no strings attached.
          </p>
          <Link href="/growth-plan">
            <ChunkyButton size="lg">Build My Growth Plan →</ChunkyButton>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
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
