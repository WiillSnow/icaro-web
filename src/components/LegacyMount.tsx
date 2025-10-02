"use client";
import { useEffect, useRef } from "react";
import html from "@/legacy/markup";

export default function LegacyMount() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.innerHTML = html;
  }, []);
  return <div ref={ref} />;
}
