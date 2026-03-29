"use client";

import { useEffect, useRef } from "react";

interface AdContainerProps {
  slot: "top" | "middle" | "footer";
  className?: string;
}

const DESKTOP_KEY = "a5eb6986747b6729bf2e041e1abf6af7";
const MOBILE_KEY = "620be173d4bf0dca6bb318d7dc34c12e";

export default function AdContainer({ slot, className = "" }: AdContainerProps) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const loadedDesktop = useRef(false);
  const loadedMobile = useRef(false);

  useEffect(() => {
    // Desktop 728x90
    if (!loadedDesktop.current && desktopRef.current && window.innerWidth >= 768) {
      loadedDesktop.current = true;
      const container = desktopRef.current;
      const atScript = document.createElement("script");
      atScript.type = "text/javascript";
      atScript.text = `
        atOptions = {
          'key' : '${DESKTOP_KEY}',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      const invokeScript = document.createElement("script");
      invokeScript.type = "text/javascript";
      invokeScript.src = `//www.highperformanceformat.com/${DESKTOP_KEY}/invoke.js`;
      container.appendChild(atScript);
      container.appendChild(invokeScript);
    }

    // Mobile 320x50
    if (!loadedMobile.current && mobileRef.current && window.innerWidth < 768) {
      loadedMobile.current = true;
      const container = mobileRef.current;
      const atScript = document.createElement("script");
      atScript.type = "text/javascript";
      atScript.text = `
        atOptions = {
          'key' : '${MOBILE_KEY}',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      `;
      const invokeScript = document.createElement("script");
      invokeScript.type = "text/javascript";
      invokeScript.src = `//www.highperformanceformat.com/${MOBILE_KEY}/invoke.js`;
      container.appendChild(atScript);
      container.appendChild(invokeScript);
    }
  }, []);

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
