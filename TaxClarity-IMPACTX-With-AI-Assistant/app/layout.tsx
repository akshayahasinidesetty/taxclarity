import "./globals.css";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "TaxClarity | IMPACTX 2026 • Dataset & Data Engineering",
  description: "Clearer records. Smarter tax decisions. Greater confidence. A Team CodePulse project for IMPACTX 2026."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#F4F7FB] text-midnight antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-3 focus:text-slate-900">Skip to main content</a>
        <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" aria-label="TaxClarity landing page" className="h-8 w-8 rounded-lg bg-midnight flex items-center justify-center text-white font-bold">TC</a>
              <div>
                <a href="/" className="font-bold leading-none">TaxClarity</a>
                <div className="text-[10px] text-slate-500">IMPACTX 2026 • Dataset & Data Engineering</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/home" className="hover:text-slate-900">Home</a>
              <a href="/workspace" className="hover:text-slate-900">Workspace</a>
              <a href="/calculator" className="hover:text-slate-900">Calculator</a>
              <a href="/assistant" className="hover:text-slate-900">AI Assistant</a>
              <a href="/login" className="hover:text-slate-900">Login</a>
              <a href="/about" className="hover:text-slate-900">Team</a>
              <a href="https://github.com/akshayahasinidesetty/taxclarity" target="_blank" className="hover:text-slate-900">GitHub</a>
              <ThemeToggle />
            </nav>
            <div className="md:hidden flex items-center gap-2"><a href="/home" aria-label="Open home dashboard" className="text-sm underline">Home</a><a href="/assistant" className="text-sm underline">Assistant</a><a href="/login" className="text-sm underline">Login</a><ThemeToggle /></div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
            <span>TaxClarity • Akshaya Hasini Desetty — 25BCE8286 • Snehitha Marella — 25BCA7653 • Prototype Simulation Only</span>
            <span><a className="underline" href="/about">Team CodePulse</a> · <a className="underline" href="https://github.com/akshayahasinidesetty/taxclarity" target="_blank" rel="noreferrer">GitHub repository ↗</a> · Does not submit to Income Tax Department. Verify officially.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
