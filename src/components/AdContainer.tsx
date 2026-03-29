"use client";

interface AdContainerProps {
  slot: "top" | "middle" | "footer";
  className?: string;
}

export default function AdContainer({ slot, className = "" }: AdContainerProps) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-label="Advertisement"
    >
      {/* Desktop banner */}
      <div
        id={`adsterra-banner-${slot}`}
        className="ad-container hidden md:flex items-center justify-center rounded-lg border border-dashed border-[var(--color-card-border)] bg-[var(--color-navy-950)] text-gray-600 text-xs"
        style={{ width: 728, height: 90 }}
      >
        {/* ADSTERRA_BANNER_728x90: Replace with your Adsterra ad unit code */}
        <span>Advertisement</span>
      </div>
      {/* Mobile banner */}
      <div
        id={`adsterra-banner-${slot}-mobile`}
        className="ad-container md:hidden flex items-center justify-center rounded-lg border border-dashed border-[var(--color-card-border)] bg-[var(--color-navy-950)] text-gray-600 text-xs"
        style={{ width: 320, height: 50 }}
      >
        {/* ADSTERRA_BANNER_320x50: Replace with your Adsterra mobile ad unit code */}
        <span>Advertisement</span>
      </div>
    </div>
  );
}
