import Link from "next/link";
import TaxAssistant from "@/components/TaxAssistant";

export default function AssistantPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-teal-700 dark:text-teal-300">IMPACTX 2026 · Team CodePulse</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">TaxClarity Assistant</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">Ask about tax-regime comparisons, document mismatches, deductions, TDS, privacy and review workflows. Responses are generated locally from rule-based guidance in this prototype.</p>
        </div>
        <Link href="/home" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">← Back to dashboard</Link>
      </div>
      <div className="mb-5 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm leading-6 text-teal-950 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-100">
        <strong>Prototype notice:</strong> This assistant is not a connected generative-AI model, tax professional, government service, or live account lookup. Do not enter PAN, Aadhaar, OTPs, passwords, bank credentials, or real taxpayer documents. Verify decisions against current official guidance.
      </div>
      <TaxAssistant />
    </main>
  );
}
