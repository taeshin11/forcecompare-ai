"use client";

import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    // Simple client-side counter using localStorage as fallback
    // In production, replace with a free counter API like GoatCounter or CountAPI
    try {
      const stored = localStorage.getItem("fc_visit_count");
      const count = stored ? parseInt(stored, 10) + 1 : 1;
      localStorage.setItem("fc_visit_count", String(count));
      setTotal(count);
    } catch {
      setTotal(null);
    }
  }, []);

  if (total === null) return null;

  return (
    <span className="text-xs text-gray-500">
      Total visits: {total.toLocaleString()}
    </span>
  );
}
