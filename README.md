# ForceCompare AI — Military Power Matchup

Select two nations. See who dominates. Compare military strength across land, air, sea, and resources.

## Live Demo

**[https://is.gd/xJfCs0](https://forcecompare-ai.vercel.app)**

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Static JSON data** (no backend required)
- **Vercel** (free tier hosting)

## Run Locally

```bash
git clone https://github.com/taeshin11/forcecompare-ai.git
cd forcecompare-ai
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google Sheets Tracking

See [SETUP_GOOGLE_SHEETS.md](./SETUP_GOOGLE_SHEETS.md) for instructions on connecting comparison tracking to a Google Spreadsheet.

## Adsterra Ads

Ad placeholder components are built into the UI. After signing up at [Adsterra](https://adsterra.com):

1. Get your ad unit codes from the Adsterra dashboard
2. Replace the placeholder comments in `src/components/AdContainer.tsx`

## Data Source

All military data is compiled from [Global Firepower Index](https://www.globalfirepower.com) public rankings. 50+ countries included.

## Disclaimer

This is a purely numerical comparison based on publicly available data. It does not account for: nuclear weapons, alliance networks, technology quality, terrain advantages, cyber warfare, troop morale, or economic sustainability. Real-world outcomes depend on countless factors beyond raw numbers.
