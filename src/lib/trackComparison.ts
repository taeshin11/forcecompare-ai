export async function trackComparison(data: {
  countryA: string;
  countryB: string;
  winner: string;
  powerScoreA: number;
  powerScoreB: number;
}) {
  const GOOGLE_SHEETS_WEBHOOK_URL =
    process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || "";
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
