TaxClarity
Clearer records. Smarter tax decisions. Greater confidence.

TaxClarity is an IMPACTX 2026 hackathon prototype designed to make common tax workflows easier to understand. It brings together income reconciliation, document review, explainable discrepancy flags, deadline awareness, and guided tax support in one web experience.
Project status: Hackathon prototype. Use synthetic/demo data only. TaxClarity is not a substitute for official tax guidance or advice from a qualified tax professional.

Project Links
- Live website (Round 2): https://taxclarity123.netlify.app
- Demo video: Watch the TaxClarity demo
- GitHub repository: https://github.com/akshayahasinidesetty/taxclarity
Contents
- The Problem
- Our Solution
- Key Features
- Technology Stack
- Run Locally
- Available Commands
- Deploy to Netlify
- Example Workflow
- Privacy and Responsible Use
- Limitations and Future Improvements
- Team
- License
 The Problem
Tax-related information can be spread across multiple documents and sources. Comparing income figures, tracking document updates, recognizing discrepancies, and remembering deadlines can become confusing and time-consuming.
 Our Solution
TaxClarity provides a single, review-friendly interface for common tax workflow tasks. It aims to help users notice differences, understand what deserves attention, and identify sensible next steps—without treating an automated flag as a final tax decision.
 Key Features
- Tax calculator: Explore estimates using the inputs and calculation rules available in the prototype.
- Income reconciliation: Compare figures from different sources and highlight differences that may need review.
- Document review: Organize the document-review workflow and surface document-related status or version cues supported by the prototype.
- Explainable discrepancy flags: Make possible mismatches easier to notice and investigate.
- Deadline awareness: Keep relevant tax deadlines visible in the workflow.
- Guided tax support: Provide in-product guidance to help users navigate the available features.
- Responsive interface: Access the web experience across common screen sizes.
Feature availability depends on the current deployed prototype. Refer to the live site for the latest working experience.
Technology Stack
The implementation materials reviewed for this project indicate the following technologies:
- Frontend framework: Next.js
- UI library: React
- Language: TypeScript
- Styling: Tailwind CSS / custom CSS, depending on the current build
- Hosting: Netlify
- Version control: Git and GitHub
The exact dependency versions and scripts should be confirmed from the repository's package.json and configuration files. Do not describe the assistant as connected to a live AI model, or claim a production database or authentication system, unless those integrations are present and tested in the current source code.
Run Locally
Prerequisites
Install the following before starting:
- Node.js (prefer an active LTS release)
- npm, which is included with Node.js
- Git to clone the repository
Check that Node.js and npm are installed:
node --version
npm --version
1. Clone the repository
git clone https://github.com/akshayahasinidesetty/taxclarity.git
cd taxclarity
2. Check that the application source is present
The project root should contain package.json and the application source/configuration files. The public repository listing may not yet include all application files; if package.json is missing, upload/push the complete app source before continuing.
3. Install dependencies
npm install
4. Start the development server
npm run dev
Open http://localhost:3000 in your browser. If the terminal prints a different local URL, use that URL instead.
5. Create a production build
npm run build
To test the production build locally, if the project defines the standard Next.js start script:
npm run start
If a command is unavailable, check the "scripts" section of package.json and use the commands defined by the project. No environment-variable requirements have been independently verified here; if the source includes an .env.example, follow it. Never commit API keys, tokens, passwords, or other secrets.
 Available Commands
Typical commands for a Next.js project are shown below. The actual commands depend on the scripts defined in package.json.
Command	Purpose
npm install	Installs project dependencies
npm run dev	Starts the development server
npm run build	Builds the app for production
npm run start	Starts the production server, if configured
npm run lint	Runs linting, if configured


Deploy to Netlify
The live Round 2 site is hosted at finalround2.netlify.app.

To deploy a source-code version using Netlify:
1. Push the complete application source to GitHub, including package.json and the required app/config files.
2. In Netlify, choose Add new site → Import an existing project and connect the GitHub repository.
3. Configure the build command to match the project scripts (commonly npm run build for Next.js).
4. Use Netlify's detected Next.js configuration where available. Set the Node.js version to a version supported by the project's Next.js version.
5. Add any required environment variables in Netlify's site settings—only if the code actually needs them. Keep secrets out of Git.
6. Deploy and check the deploy log. Open the deployed URL and test the calculator, reconciliation, document flow, navigation, and other visible features.
Deployment tip: Do not use a static drag-and-drop deployment for a Next.js application that needs its framework runtime. Connect the source repository and configure the build using the actual project files.
Example Workflow
1. Open the live TaxClarity website.
2. Navigate through the available dashboard or feature sections.
3. Enter synthetic/sample values into the calculator, where supported.
4. Compare two sample income amounts using the reconciliation feature.
5. Review any flagged difference and determine what original records would need checking.
6. Explore document review, deadline information, and guided support as available in the deployed prototype.
For example, if two illustrative sources show ₹8,40,000 and ₹8,25,000, the difference is ₹15,000. That difference is a reason to investigate; it does not establish which figure is correct.
Privacy and Responsible Use
- Use fictional or synthetic information for demonstrations and testing.
- Do not upload real tax records, identity documents, bank details, or other sensitive personal information to this hackathon prototype.
- Treat calculations and discrepancy flags as informational aids that require independent verification.
- Verify tax rules and deadlines against current official sources or a qualified professional.
- Production-grade authentication, secure document storage, persistence, and live AI integrations should not be assumed unless implemented and tested in the current version.
 Limitations and Future Improvements
Potential next steps include:
- Validate the tax calculation and reconciliation logic against well-defined test cases.
- Improve document history and traceability.
- Make guidance more transparent and connect it to verified official references.
- Add appropriate access controls and secure storage before handling real user data.
- Test accessibility, responsive behavior, and error states.
- Evaluate whether the workflow reduces the time needed to identify and review discrepancies.
Team
Team CodePulse — IMPACTX 2026
- Akshaya Hasini Desetty
- Snehitha Marella
📄 License
This project includes an MIT license in the repository. See LICENSE for the license text and terms.
TaxClarity — Clearer records. Smarter tax decisions. Greater confidence.
