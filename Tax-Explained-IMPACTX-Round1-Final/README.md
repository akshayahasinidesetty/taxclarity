# TaxClarity — IMPACTX 2026 · Round 1

**Tagline:** Making Tax Services Understandable  
**Team:** Akshaya Hasini Desetty (25BCE8286) and Snehitha Marella (25BCA7653)  
**Repository:** https://github.com/akshayahasinidesetty/taxclarity

TaxClarity is a student hackathon prototype that demonstrates how a taxpayer-friendly interface can help people organise a review workflow, compare two example amounts, and understand possible next steps in plain English.

## Run locally

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js (normally http://localhost:3000).

Optional verification commands:

```bash
npm run typecheck
npm test
npm run build
```

## What is included in this version

- **Landing page** with TaxClarity logo mark, tagline, feature overview, team information, and GitHub link.
- **Demo entry/login button** that opens the workspace. This is a demo gate, not real authentication or account security.
- **Responsive dashboard** with synthetic profile selection, checklist, workflow overview, and record comparison.
- **Light/dark theme toggle** available on both landing page and dashboard. Theme selection is session-only and resets on refresh.
- **Document picker UI** that lists selected filenames locally. Files are not transmitted, parsed, or persisted; no real document processing or cloud storage is implemented.
- **TaxClarity Helper** with a small set of pre-written responses for common workflow and tax-term questions. This is a scripted demo assistant, not a connected generative AI service.
- **Arithmetic reconciliation** using the existing comparison engine. Differences are prompts for human review, not a legal or tax conclusion.
- **Configurable deadline-awareness demo** using user-editable ISO date/time fields. The default date is a synthetic example, not official tax guidance.
- **Synthetic CSV fixtures** in `data/` and the existing reconciliation/rule/audit utility modules.

## Demo walkthrough

1. Open the landing page and point out the logo, tagline, feature summary, team members, and repository link.
2. Click **Explore the demo** or **Login / Try demo** to enter the workspace.
3. Toggle dark mode and select a demo profile.
4. In Income comparison, use the default example values ₹8,40,000 and ₹8,25,000 to show a ₹15,000 difference. Change a value to demonstrate live recalculation.
5. Scroll to **Bring your demo files together** and select a fictional sample file. Explain that only its name is listed locally; the file is not uploaded or parsed.
6. Try the assistant prompts such as “What does a mismatch mean?” and “How is my data handled?”.
7. Finish with the limitations and GitHub link.

## Implemented vs. not implemented

### Implemented in this prototype
- Landing page and workspace UI
- Demo-only entry flow (not real login)
- Responsive CSS and manual light/dark toggle
- Browser-session filename list for selected files
- Scripted assistant responses
- Local arithmetic comparison and input validation
- Configurable synthetic deadline status
- Existing TypeScript engine and CSV fixtures

### Not implemented / future work
- Real authentication, user accounts, password recovery, or roles
- Uploading files to a backend, cloud storage, document parsing, or OCR
- A connected AI model or live tax-rule retrieval
- Production database integration for user records
- Official government portal connectivity or automatic return submission
- Verified tax-liability calculation or professional/legal determination
- Automated generation and verification of 500 profiles, 2,000 income documents, 5,000 transactions, or an SQLite `taxclarity.db` as part of this UI. Treat these as planned dataset-generator targets unless the team separately runs and verifies the generator.

## Privacy and limitations

Use only fictional demo values. Do not enter PAN, Aadhaar, bank credentials, or real taxpayer documents. The selected file contents are not read by the app, but the browser file picker may expose their names in the local UI. TaxClarity is not affiliated with the Income Tax Department, does not connect to official portals, does not file returns, and does not provide verified tax calculations. A mismatch is a prompt to investigate, not proof of an error.

## Technology

- Next.js 14, React 18, TypeScript
- CSS with responsive layouts and theme variables
- Existing local TypeScript reconciliation/deadline utilities
- CSV fixtures under `data/`

## Repository map

- `src/app/page.tsx` — landing page and interactive demo workspace
- `src/app/globals.css` — full visual system, responsive layout, and dark theme
- `src/app/layout.tsx` — app metadata and root layout
- `src/engine/reconciliation.ts` — numeric comparison and document validation helpers
- `src/engine/rules.ts` — synthetic rule helpers
- `src/lib/deadline.ts` — deadline-state calculation
- `src/lib/state_machines.ts` — guarded workflow transition utilities
- `src/lib/audit.ts` and `src/lib/sha256.ts` — audit utilities and hashing
- `src/models/Document.ts` — typed synthetic document model
- `tests/harness.test.ts` — test harness
- `static-demo/index.html` — standalone fallback demo (older static version)
- `data/` — synthetic CSV fixtures only

## Team

- **Akshaya Hasini Desetty** — 25BCE8286
- **Snehitha Marella** — 25BCA7653

GitHub: https://github.com/akshayahasinidesetty/taxclarity
