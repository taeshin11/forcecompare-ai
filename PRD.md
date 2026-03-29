# PRD.md — ForceCompare AI: Military Power Matchup Simulator

> **This document is the single source of truth.** Claude Code must read this file at the start of every session before writing any code.

---

## 0. Harness Architecture — How Claude Code Must Operate

### 0.1 Planner → Initializer → Builder → Reviewer Loop

This project follows the **Harness Design** methodology. Claude Code operates autonomously through structured sessions:

1. **Planner Agent Phase**: Expand this PRD into implementation details. Do NOT over-specify low-level code early — focus on *what* to build, not *how* to code each line.
2. **Initializer Agent Phase**: On first session, create these files:
   - `feature_list.json` — ordered list of all features with status (`pending`, `in-progress`, `done`)
   - `claude-progress.txt` — human-readable log of what's been completed, current blockers, and next steps
   - `init.sh` — script to install dependencies and start dev server
3. **Builder Agent Phase**: Each session follows this fixed routine:
   - Read `claude-progress.txt`
   - Read `feature_list.json`
   - Run existing tests / verify current build compiles
   - Pick the next `pending` feature, set it to `in-progress`
   - Implement the feature
   - Test it
   - Git commit with descriptive message
   - Update `claude-progress.txt` and `feature_list.json`
   - Move to next feature or end session
4. **Reviewer Agent Phase**: After every major milestone, review code for quality, accessibility, SEO, performance, and responsiveness before committing.

### 0.2 Session Continuity Rules

- **ALWAYS** read `claude-progress.txt` and `feature_list.json` before doing anything.
- **NEVER** assume what was done in a previous session — verify by reading files and running the build.
- **ALWAYS** update progress files after completing any feature.
- If a session is interrupted, the next session must be able to resume cleanly from the progress files.

### 0.3 Git Commit & Push Policy

- **Create the GitHub repository using `gh` CLI** at project initialization:
  ```bash
  gh repo create forcecompare-ai --public --source=. --remote=origin --push
  ```
- **Commit after every completed feature** with a descriptive message.
- **Push to GitHub at every major milestone** (marked with 🚀 in the feature list below).
- Milestone pushes: after project scaffold, after core comparison logic, after UI completion, after analytics integration, after ad integration, after Google Sheets integration, after Vercel deployment.

### 0.4 Automation-First Policy

- **If a problem can be solved via CLI, solve it via CLI. Do NOT write a guide — execute it.**
- Use `gh`, `vercel`, `npx`, `npm`, `curl`, and any other CLI tools to automate everything.
- Do NOT stop and ask the user to do manual steps. Automate or script them.

---

## 1. Product Overview

| Field | Value |
|---|---|
| Service Name | **ForceCompare AI** |
| Short Title | Military Power Matchup |
| Tagline | "Select two nations. See who dominates." |
| Type | Static infographic dashboard (no backend server required) |
| Stack | Next.js (Static Export) + Tailwind CSS + TypeScript |
| Hosting | **Vercel** (free tier) |
| Domain | Deployed on Vercel; create a **free short link** (e.g., via `is.gd` or `v.gd` API) to mask the GitHub username in public sharing. Do NOT expose the GitHub profile URL publicly. |
| Cost Target | **$0** — everything must use free tiers only |

---

## 2. Core Concept

Users select two countries from a dropdown or interactive UI. The app displays a side-by-side military strength comparison using publicly available data (Global Firepower Index). Data is stored as a **static JSON file** — no API calls, no database, no backend.

Comparison categories include:
- Total Military Personnel (Active + Reserve)
- Army: Tanks, Armored Vehicles, Artillery, MLRS
- Air Force: Fighter Aircraft, Attack Helicopters, Transport Aircraft, Total Aircraft
- Navy: Aircraft Carriers, Destroyers, Submarines, Frigates, Total Naval Assets
- Resources: Defense Budget, Oil Production, Oil Reserves
- Logistics: Airports, Ports, Roadway Coverage
- Geography: Total Area, Shared Borders, Coastline Length

After comparison, show a **"Power Score"** (weighted composite) and declare a **numerical winner** with a visual verdict banner.

---

## 3. Data Strategy

### 3.1 Data Source
- Scrape or manually compile data from **Global Firepower (globalfirepower.com)** public rankings.
- Include **top 50 countries** minimum (cover all major and regional powers).
- Store as `/public/data/countries.json` with this schema:

```json
{
  "countries": [
    {
      "name": "United States",
      "code": "US",
      "flag": "🇺🇸",
      "powerIndex": 0.0712,
      "military": {
        "totalPersonnel": 2000000,
        "activeMilitary": 1400000,
        "reserveMilitary": 600000
      },
      "army": {
        "tanks": 6612,
        "armoredVehicles": 45193,
        "selfPropelledArtillery": 1498,
        "rocketLaunchers": 1366
      },
      "airforce": {
        "totalAircraft": 13247,
        "fighters": 1957,
        "attackHelicopters": 910,
        "transportAircraft": 962
      },
      "navy": {
        "totalAssets": 484,
        "carriers": 11,
        "destroyers": 92,
        "submarines": 68,
        "frigates": 0
      },
      "resources": {
        "defenseBudget": 831000000000,
        "oilProduction": 11567000,
        "oilReserves": 36500000000
      },
      "logistics": {
        "airports": 13513,
        "majorPorts": 44,
        "roadwayCoverage": 6586610
      },
      "geography": {
        "squareArea": 9833517,
        "sharedBorders": 12048,
        "coastline": 19924
      }
    }
  ]
}
```

### 3.2 Power Score Calculation

Weighted composite score (lower = stronger, following GFP convention):
- Military Personnel: 15%
- Air Power: 25%
- Army Strength: 20%
- Naval Power: 20%
- Resources & Budget: 10%
- Logistics & Geography: 10%

Normalize each sub-score across all countries (min-max scaling), then compute weighted average. Show the final score as a 0–100 "Force Rating" (inverted so higher = stronger for user clarity).

---

## 4. UI/UX Requirements

### 4.1 Design Principles
- **Modern, comfortable, and visually impressive** — this is an infographic tool, visuals matter.
- **Responsive**: Must work flawlessly on mobile, tablet, and desktop.
- **Soft background colors**: Use muted dark tones (e.g., slate-900/zinc-900 base with subtle gradients). Avoid harsh white or pure black. Think "military command center" but approachable.
- **Color palette**: Dark navy/charcoal base, accent colors in amber/gold for highlights and emerald/red for win/loss indicators.
- **Typography**: Use distinctive, modern fonts. Load from Google Fonts. Suggest: `Chakra Petch` (display/headings — military-tech feel) + `IBM Plex Sans` (body — clean readability). Do NOT use Inter, Roboto, or Arial.
- **Animations**: Smooth number count-up animations on comparison values. Subtle slide-in for cards. Progress bars that fill on reveal. Victory banner with a satisfying entrance animation.
- **Layout**: Two-column comparison layout on desktop, stacked on mobile. Country selectors at top. Results below with category-by-category breakdown.

### 4.2 Key UI Components

1. **Hero Section**: Title, tagline, and brief description. Subtle animated background (CSS gradient shift or particle-like dots).
2. **Country Selector**: Two dropdown/search selectors with flag emojis. "Compare" button with loading state.
3. **Comparison Dashboard**:
   - Side-by-side stat cards for each category
   - Horizontal bar charts showing relative strength (CSS-only, no chart library needed)
   - Color-coded: winner stat in gold/green, loser in muted/red
   - Category winner badges
4. **Verdict Banner**: Large animated banner declaring "Country A has stronger military forces on paper" with Force Rating scores.
5. **Disclaimer**: Small text noting this is purely numerical comparison, not accounting for alliances, technology quality, nuclear capability, terrain, morale, etc.
6. **Footer**: Minimal footer with data source credit, site info, ad disclosure.

### 4.3 SEO Requirements

- Proper meta tags: title, description, og:image, og:title, twitter:card
- Title format: `ForceCompare AI — Military Power Matchup: [Country A] vs [Country B]`
- Semantic HTML: proper heading hierarchy (h1, h2, h3), alt text, aria labels
- Fast loading: static site, optimized images, minimal JS bundle
- Add `robots.txt` and `sitemap.xml`
- Structured data (JSON-LD) for WebApplication schema
- **URL structure**: Make comparison results shareable via query params (e.g., `?a=US&b=CN`)

---

## 5. Visitor Analytics (Free, Non-Intrusive)

### 5.1 Requirements
- Show **today's visitor count** and **total visitor count**.
- Display in a **non-intrusive location**: small badge in the footer area or a tiny floating indicator in the bottom-left corner.
- Must NOT disrupt the user's core experience (no popups, no banners, no modal).
- **Cost: $0**

### 5.2 Implementation
- Use a **free visitor counter API** — options:
  - **CountAPI** (countapi.xyz) or similar free counting service
  - OR embed a tiny **GoatCounter** (free for non-commercial) analytics badge
  - OR use a **free Vercel Analytics** (if available on free tier)
- Show as subtle text: `👁 Today: 142 | Total: 8,391` in footer
- If CountAPI or similar is unavailable, implement a simple client-side counter using Vercel KV (free tier) or a free Firebase Realtime Database read/increment.
- **Prioritize the simplest free solution that actually works.**

---

## 6. Monetization — Ad Integration

### 6.1 Strategy
- The site is free to use, but must generate revenue through display ads.
- **Primary ad network: Adsterra** (faster approval than Google AdSense, better CPM for new sites).
- Adsterra provides various ad formats. Start with:
  - **Banner Ad (728x90)**: Place below the hero section and above the comparison dashboard.
  - **Native Banner**: Integrate within the footer or between content sections.
  - **Social Bar** (push notification style): Enable Adsterra Social Bar for additional revenue.
- **Implementation**:
  - Sign up at Adsterra.
  - After getting ad unit code/keys from the Adsterra dashboard, paste the script tags into the appropriate components.
  - Create clearly marked **ad placeholder components** in the code with comments like:
    ```html
    <!-- ADSTERRA_BANNER_728x90: Replace with your Adsterra ad unit code -->
    <div id="adsterra-banner-top" class="ad-container">
      <!-- Paste Adsterra script here after getting your ad unit key from dashboard -->
    </div>
    ```
  - Make ad containers responsive (hide 728x90 on mobile, show 320x50 mobile banner instead).
  - Add `ads.txt` file in `/public/ads.txt` for ad verification.

### 6.2 Ad Placement Rules
- Ads must NOT cover or obstruct the comparison UI.
- Maximum 3 ad units per page.
- Label ad areas with tiny "Advertisement" text for transparency.
- Ads should blend with the dark theme (use dark-themed ad containers).

### 6.3 Future Ad Networks (if Adsterra revenue is slow)
- **Google AdSense** (apply after site has some traffic)
- **PropellerAds** (alternative to Adsterra)
- **Monetag** (pop-under and interstitial options)
- Prepare the codebase so swapping/adding ad networks is trivial (component-based ad slots).

---

## 7. Data Collection — Google Sheets Webhook

### 7.1 Requirements
- When a user clicks the **"Compare"** button, automatically POST the comparison data to a Google Sheet.
- Data to capture:
  - Timestamp
  - Country A name
  - Country B name
  - Winner (based on Power Score)
  - User's device type (mobile/desktop — from user-agent)
  - Referrer URL (if available)
- **Cost: $0** (Google Sheets + Apps Script is free)

### 7.2 Implementation — Do NOT just write a guide. Actually set it up.

**Step 1: Create the Google Apps Script Web App**

Create a file `google-apps-script.js` in the project root with the full Apps Script code that the user needs to paste into Google Apps Script:

```javascript
// google-apps-script.js — Paste this into Google Apps Script Editor
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.countryA,
      data.countryB,
      data.winner,
      data.deviceType,
      data.referrer,
      data.powerScoreA,
      data.powerScoreB
    ]);
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

**Step 2: In the Next.js app, create a utility function:**

```typescript
// lib/trackComparison.ts
export async function trackComparison(data: {
  countryA: string;
  countryB: string;
  winner: string;
  powerScoreA: number;
  powerScoreB: number;
}) {
  const GOOGLE_SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || "";
  if (!GOOGLE_SHEETS_WEBHOOK_URL) return;

  try {
    await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        deviceType: window.innerWidth < 768 ? "mobile" : "desktop",
        referrer: document.referrer || "direct",
      }),
    });
  } catch (err) {
    console.error("Tracking failed:", err);
  }
}
```

**Step 3: Wire it into the Compare button click handler** — call `trackComparison()` after computing results.

**Step 4: Add environment variable:**
- Create `.env.local` with:
  ```
  NEXT_PUBLIC_SHEETS_WEBHOOK_URL=YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL
  ```
- Add `.env.local` to `.gitignore`.
- Add `.env.example` with the variable name (no value) for documentation.

**Step 5: Provide a `SETUP_GOOGLE_SHEETS.md`** with step-by-step instructions for deploying the Apps Script (since that part requires manual Google account access).

---

## 8. Deployment — Vercel

### 8.1 Deploy via CLI (Automated)

```bash
# Install Vercel CLI
npm i -g vercel

# Login (will open browser)
vercel login

# Deploy from project root
vercel --prod

# After deployment, get the production URL
vercel ls
```

- **Do NOT just document this — run these commands.**
- After Vercel deployment, create a **free short URL** using:
  ```bash
  curl -s "https://is.gd/create.php?format=simple&url=YOUR_VERCEL_URL"
  ```
  This gives a short link like `https://is.gd/xxxxx` that hides the GitHub username.

### 8.2 Vercel Configuration
- Framework Preset: Next.js
- Build Command: `next build`
- Output: Static export (`output: 'export'` in `next.config.js`) OR standard Next.js (if we need API routes for counter)
- Environment Variables: Set `NEXT_PUBLIC_SHEETS_WEBHOOK_URL` in Vercel dashboard via CLI:
  ```bash
  vercel env add NEXT_PUBLIC_SHEETS_WEBHOOK_URL
  ```

---

## 9. Feature List & Milestones

Each feature has a priority order. Build in this exact sequence.

| # | Feature | Milestone | Priority |
|---|---------|-----------|----------|
| 1 | Project scaffold (Next.js + Tailwind + TypeScript + ESLint) | 🚀 Push | P0 |
| 2 | Static JSON data file with 50+ countries | | P0 |
| 3 | Country selector UI (two dropdowns with flag + search) | | P0 |
| 4 | Core comparison logic (weighted power score calculation) | 🚀 Push | P0 |
| 5 | Comparison dashboard UI (side-by-side cards, bar charts, category winners) | | P0 |
| 6 | Verdict banner with animation | | P0 |
| 7 | Responsive design pass (mobile, tablet, desktop) | 🚀 Push | P0 |
| 8 | SEO: meta tags, OG tags, JSON-LD, sitemap, robots.txt | | P1 |
| 9 | Shareable URL via query params (?a=US&b=CN) | | P1 |
| 10 | Visitor counter integration (free API) | 🚀 Push | P1 |
| 11 | Adsterra ad placeholders + responsive ad containers | | P1 |
| 12 | ads.txt file | | P1 |
| 13 | Google Sheets webhook integration + tracking utility | 🚀 Push | P1 |
| 14 | Disclaimer section | | P2 |
| 15 | Performance optimization (lazy loading, minimal bundle) | | P2 |
| 16 | Vercel deployment via CLI | 🚀 Push | P0 |
| 17 | Short URL generation (is.gd) | | P1 |
| 18 | Final QA review pass | 🚀 Push | P0 |

---

## 10. File Structure (Expected)

```
forcecompare-ai/
├── public/
│   ├── data/
│   │   └── countries.json
│   ├── ads.txt
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── CountrySelector.tsx
│   │   ├── ComparisonDashboard.tsx
│   │   ├── StatCard.tsx
│   │   ├── BarChart.tsx
│   │   ├── VerdictBanner.tsx
│   │   ├── VisitorCounter.tsx
│   │   ├── AdContainer.tsx
│   │   ├── Disclaimer.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── calculatePowerScore.ts
│   │   ├── trackComparison.ts
│   │   └── types.ts
│   └── hooks/
│       └── useCountryData.ts
├── google-apps-script.js
├── SETUP_GOOGLE_SHEETS.md
├── feature_list.json
├── claude-progress.txt
├── init.sh
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 11. Non-Functional Requirements

| Requirement | Target |
|---|---|
| First Contentful Paint | < 1.5s |
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
| Lighthouse Accessibility | > 90 |
| Bundle Size (JS) | < 200KB gzip |
| Browser Support | Chrome, Firefox, Safari, Edge (last 2 versions) |
| Mobile Responsive | Yes — 320px to 2560px |
| Total Cost | $0 |

---

## 12. Constraints & Disclaimers

- All data is from publicly available sources (Global Firepower Index).
- This is a **numerical comparison only** — it does not account for:
  - Nuclear weapons capability
  - Alliance networks (NATO, etc.)
  - Technology quality / generation of equipment
  - Terrain and defensive advantages
  - Cyber warfare capability
  - Troop morale and training quality
  - Economic sustainability of war
- Include this disclaimer prominently on the site.
- The site must comply with Adsterra's content policy.

---

## 13. Claude Code — Session Start Checklist

Copy-paste this at the start of every Claude Code session:

```
Read PRD.md, then read claude-progress.txt and feature_list.json.
Verify the project builds (npm run build or npm run dev).
Identify the next pending feature from feature_list.json.
Implement it, test it, commit it, update progress files.
If this feature is marked with 🚀, push to GitHub.
Repeat until session ends or all features are done.
```

---

## 14. Init Script (init.sh)

Claude Code must create this on first run:

```bash
#!/bin/bash
set -e

echo "🚀 ForceCompare AI — Initializing..."

# Install dependencies
npm install

# Create env file if not exists
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "⚠️  Created .env.local — update NEXT_PUBLIC_SHEETS_WEBHOOK_URL with your Google Apps Script URL"
fi

# Start dev server
npm run dev
```

---

## 15. README.md Template

Claude Code must generate a README.md with:
- Project title and description
- Live demo link (Vercel short URL)
- Screenshot / preview
- Tech stack
- How to run locally
- How to set up Google Sheets tracking
- How to configure Adsterra ads
- Data source credits
- Disclaimer

---

*End of PRD. Claude Code: follow this document precisely. Build autonomously. Push at milestones. Automate everything possible via CLI.*lease complete all instr11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111Please complete all instructions in the PRD.md file. Once fully completed, proceed with further improvements. IF you think we don't need more improvement, then stop. Don't ask me to do something. You do everything. Use CLI or gcloud or whatever. You do all the auth. Find the way to do auth automatically.If all the work is done, check the live site and find areas to improve.
111111111111