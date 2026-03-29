"use client";

import { useEffect, useRef } from "react";

interface AdContainerProps {
  slot: "top" | "middle" | "footer";
  className?: string;
}

/*
 * HOW TO ACTIVATE ADS:
 *
 * 1. Sign up at https://adsterra.com (publisher account)
 * 2. Add your site URL and wait for approval (~24-48h)
 * 3. Once approved, go to "Ad Units" → create a Banner unit
 * 4. Set the NEXT_PUBLIC_ADSTERRA_BANNER_ID env variable to your ad unit key
 * 5. For Social Bar ads, set NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_ID
 *
 * The component below automatically loads Adsterra scripts when IDs are set.
 * Without IDs, it shows a subtle placeholder that won't distract users.
 */

const BANNER_ATTR_KEY = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID || "";
const SOCIAL_BAR_KEY = process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_ID || "";

export default function AdContainer({ slot, className = "" }: AdContainerProps) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !BANNER_ATTR_KEY) return;
    loaded.current = true;

    // Load Adsterra banner script
    try {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = `//www.highperformanceformat.com/${BANNER_ATTR_KEY}/invoke.js`;

      const container = window.innerWidth >= 768 ? desktopRef.current : mobileRef.current;
      if (container) {
        // Adsterra atOptions injection
        const atScript = document.createElement("script");
        atScript.type = "text/javascript";
        atScript.text = `
          atOptions = {
            'key' : '${BANNER_ATTR_KEY}',
            'format' : 'iframe',
            'height' : ${window.innerWidth >= 768 ? 90 : 50},
            'width' : ${window.innerWidth >= 768 ? 728 : 320},
            'params' : {}
          };
        `;
        container.innerHTML = "";
        container.appendChild(atScript);
        container.appendChild(script);
      }
    } catch (e) {
      console.error("Ad load failed:", e);
    }
  }, []);

  // If no ad key configured, show minimal placeholder
  if (!BANNER_ATTR_KEY) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        aria-label="Advertisement"
      >
        <div
          id={`adsterra-banner-${slot}`}
          className="ad-container hidden md:flex items-center justify-center rounded-lg border border-dashed border-[var(--color-card-border)] bg-[var(--color-navy-950)] text-gray-600 text-xs"
          style={{ width: 728, height: 90 }}
        >
          <span>Ad Space</span>
        </div>
        <div
          id={`adsterra-banner-${slot}-mobile`}
          className="ad-container md:hidden flex items-center justify-center rounded-lg border border-dashed border-[var(--color-card-border)] bg-[var(--color-navy-950)] text-gray-600 text-xs"
          style={{ width: 320, height: 50 }}
        >
          <span>Ad Space</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-label="Advertisement"
    >
      <div className="text-center">
        <p className="text-[10px] text-gray-600 mb-0.5">Advertisement</p>
        {/* Desktop 728x90 */}
        <div
          ref={desktopRef}
          id={`adsterra-banner-${slot}`}
          className="hidden md:block"
          style={{ minWidth: 728, minHeight: 90 }}
        />
        {/* Mobile 320x50 */}
        <div
          ref={mobileRef}
          id={`adsterra-banner-${slot}-mobile`}
          className="md:hidden"
          style={{ minWidth: 320, minHeight: 50 }}
        />
      </div>
    </div>
  );
}
