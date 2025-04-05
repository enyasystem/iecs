import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "International Education Consultancy Services",
    short_name: "IECS",
    description: "Your trusted partner for educational opportunities in Canada since 2006.",
    start_url: "/",
    display: "standalone",
    background_color: "#1E3A8A",
    theme_color: "#1E3A8A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

