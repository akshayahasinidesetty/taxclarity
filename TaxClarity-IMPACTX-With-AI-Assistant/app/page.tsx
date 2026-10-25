import Link from "next/link";

const GH = "https://github.com/akshayahasinidesetty/taxclarity";
export default function LandingPage() {
  return (
    <div className="landing-shell">
      <section className="relative overflow-hidden">
        <div className="landing-glow landing-glow-one" aria-hidden="true" />
        <div className="landing-glow landing-glow-two" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_.9fr] lg:pb-24 lg:pt-28">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide landing-pill"><span className="h-2 w-2 rounded-full bg-emerald-400" /> IMPACTX 2026 <span className="opacity-50">•</span> DATASET &amp; DATA ENGINEERING</div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[.24em] landing-accent">Team CodePulse presents</p>
            <h1 className="mt-4 text-6xl font-black tracking-[-.055em] sm:text-7xl lg:text-8xl">Tax<span className="landing-accent">Clarity</span><span className="landing-period">.</span></h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 sm:text-2xl landing-subtitle">Clearer records. Smarter tax decisions. Greater confidence.</p>
            <p className="mt-5 max-w-xl text-base leading-7 landing-muted">A practical workspace to compare income records, explore Indian tax-regime estimates, understand discrepancies, and keep human review at the centre of every decision.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/home" className="landing-primary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5">Explore TaxClarity <span className="ml-3" aria-hidden="true">→</span></Link>
              <Link href="/assistant" className="landing-secondary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition">Try AI Assistant ✦</Link>
              <Link href="/login" className="landing-secondary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition">User login</Link>
              <a href={GH} target="_blank" rel="noreferrer" className="landing-secondary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold">View GitHub ↗</a>
            </div>
            <p className="mt-4 text-xs landing-muted">No sign-in is required to explore the demo. Login is a separate user entry point.</p>
          </div>
          <div className="relative z-10">
            <div className="landing-preview rounded-3xl p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.2em] landing-muted">Your review workspace</p><h2 className="mt-2 text-xl font-bold">From records to clarity</h2></div><div className="rounded-xl px-3 py-2 text-xs font-bold landing-tag">DEMO</div></div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="landing-mini rounded-2xl p-4"><p className="text-xs landing-muted">Compare sources</p><p className="mt-3 text-2xl font-bold">₹8.40L</p><div className="mt-2 h-1.5 rounded-full landing-track"><div className="h-1.5 w-[84%] rounded-full bg-teal-400" /></div><p className="mt-2 text-xs landing-muted">Example record A</p></div>
                <div className="landing-mini rounded-2xl p-4"><p className="text-xs landing-muted">Review difference</p><p className="mt-3 text-2xl font-bold">₹15,000</p><div className="mt-2 inline-flex rounded-full px-2 py-1 text-[10px] font-semibold landing-warning">Needs context</div><p className="mt-2 text-xs landing-muted">Not an automatic verdict</p></div>
              </div>
              <div className="landing-mini mt-3 rounded-2xl p-4"><div className="flex items-center justify-between gap-3"><div><p className="text-sm font-semibold">Human review stays in control</p><p className="mt-1 text-xs leading-5 landing-muted">Inspect the source, understand the reason, and decide the next step.</p></div><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl landing-icon" aria-hidden="true">✓</div></div></div>
              <div className="mt-5 flex flex-wrap gap-2">{["Tax estimates", "Record reconciliation", "AI Assistant"].map(x => <span key={x} className="rounded-full border px-3 py-1.5 text-xs landing-pill">{x}</span>)}</div>
            </div>
            <p className="mt-3 text-center text-xs landing-muted">Illustrative figures only — not real user financial data.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="landing-divider" />
        <div className="grid gap-8 py-10 md:grid-cols-3">
          {[{n:"01",t:"Bring records together",d:"Compare values from different sources and highlight mismatches for review."},{n:"02",t:"Understand the estimate",d:"Explore tax-regime estimates with visible assumptions and prototype limitations."},{n:"03",t:"Review before acting",d:"Use plain-language findings and keep people—not automation—responsible for decisions."}].map(x=><article key={x.n} className="landing-feature rounded-2xl p-6"><p className="text-xs font-bold landing-accent">{x.n} / HOW IT WORKS</p><h2 className="mt-4 text-lg font-bold">{x.t}</h2><p className="mt-2 text-sm leading-6 landing-muted">{x.d}</p></article>)}
        </div>
        <div className="landing-bottom flex flex-col justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="text-xs font-bold uppercase tracking-[.2em] landing-accent">Built for IMPACTX 2026 · Round 2</p><h2 className="mt-2 text-2xl font-bold">Meet Team CodePulse</h2><p className="mt-2 text-sm landing-muted">Akshaya Hasini Desetty · Snehitha Marella</p></div><Link href="/home" className="landing-primary inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold">Go to home dashboard →</Link></div>
        <p className="mt-6 text-center text-xs landing-muted">Educational prototype only. Verify tax positions against current official guidance or a qualified tax professional. No filing is submitted to the Income Tax Department.</p>
      </section>
    </div>
  );
}
