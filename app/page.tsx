import Link from "next/link";
import { PILLARS, WORKFLOW_STEPS, MCP_TOOLS, REGULATORS } from "@/lib/data";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-[1100px] px-5 pb-20 pt-32 text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Governance Intelligence for Critical Organizations
        </div>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl">
          When crisis strikes,<br />
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">intelligence is everything.</span>
        </h1>
        <p className="mx-auto mb-9 max-w-2xl text-lg text-slate-400">
          From signal to decision to accountability. Escalate transforms incidents into regulatory action, board decisions, and auditable outcomes.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="rounded-lg bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600">Explore Situation Room</Link>
          <a href="#cta" className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/5">Book Enterprise Demo</a>
        </div>
      </section>

      <section id="pillars" className="mx-auto max-w-[1100px] px-5 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Governance Intelligence Pillars</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 text-2xl">{p.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
              <p className="text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="regulatory" className="mx-auto max-w-[1100px] px-5 py-20 text-center">
        <h2 className="mb-8 text-3xl font-bold">Built for Malaysia's Regulatory Environment</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {REGULATORS.map((r) => (
            <span key={r} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm">{r}</span>
          ))}
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-[800px] px-5 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to take control?</h2>
        <p className="mb-8 text-slate-400">Turn signals into decisions, and decisions into accountability.</p>
        <Link href="/dashboard" className="rounded-lg bg-orange-500 px-8 py-4 font-semibold hover:bg-orange-600">Get Started</Link>
      </section>
    </div>
  );
}
