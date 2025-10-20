"use client";
import { useEffect, useState } from "react";

export default function RegisterSW() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => setReady(true))
        .catch(() => setReady(false));
    }
  }, []);
  return (
    <span className="sr-only" aria-live="polite">
      {ready ? "App ready for offline" : ""}
    </span>
  );
}
