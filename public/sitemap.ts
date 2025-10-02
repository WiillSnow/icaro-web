// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://icarosolar.mx"; // <-- DOMINIO AQUÍ
  return [
    { url: `${base}/`, lastModified: new Date() },
    // Agrega más URLs si luego creas páginas reales (no anclas)
  ];
}
