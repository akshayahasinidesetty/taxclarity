import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaxClarity — Making Tax Services Understandable',
  description: 'An IMPACTX 2026 student prototype for clearer tax-document workflows, synthetic record comparisons, and plain-English guidance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="min-h-screen antialiased">{children}</body></html>;
}
