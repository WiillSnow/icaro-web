// src/app/gracias/tracker.tsx
"use client";
import { useEffect } from "react";

export default function ThankYouTracker() {
  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "lead_form_submitted" });

    // Si usas GA4 directo (gtag), puedes extra enviar:
    // if (typeof (window as any).gtag === "function") {
    //   (window as any).gtag("event", "generate_lead");
    // }
  }, []);
  return null;
}
