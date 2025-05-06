import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "IECS - International Education Consultancy Services",
    template: "%s | IECS - International Education Consultancy Services",
  },
  description:
    "Your trusted partner for educational opportunities in Canada since 2006. We provide comprehensive services for international students seeking quality education.",
  keywords: [
    "education consultancy",
    "study in Canada",
    "international students",
    "admission processing",
    "immigration assistance",
    "settlement services",
    "Canadian universities",
    "student visa",
    "scholarship guidance",
  ],
  authors: [{ name: "IECS" }],
  creator: "International Education Consultancy Services Inc.",
  publisher: "International Education Consultancy Services Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.iecservices.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IECS - International Education Consultancy Services",
    description:
      "Your trusted partner for educational opportunities in Canada since 2006. We provide comprehensive services for international students seeking quality education.",
    url: "https://www.iecservices.org",
    siteName: "International Education Consultancy Services",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IECS - International Education Consultancy Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IECS - International Education Consultancy Services",
    description:
      "Your trusted partner for educational opportunities in Canada since 2006. We provide comprehensive services for international students seeking quality education.",
    images: ["/images/iecs_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/iecs_logo.png",
    shortcut: "/images/iecs_logo.png",
    apple: "/images/iecs_logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/iecs_logo.png",
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "Education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'