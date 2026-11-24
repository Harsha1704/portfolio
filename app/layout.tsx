import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
// Safe fallback: never emit unconfirmed domain in production; fallback to localhost for dev/testing
const baseUrl = siteUrl || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sri Harsha | Aspiring ML Engineer & Full-Stack Developer",
    template: "%s | Sri Harsha",
  },
  description:
    "Professional engineering portfolio of Sri Harsha — B.Tech CSE (AI & ML) at Lovely Professional University (8.51 CGPA). Specializing in multimodal vision-language models, generative AI, and resilient full-stack systems.",
  keywords: [
    "Sri Harsha",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "AI Application Builder",
    "Multimodal AI",
    "Computer Vision",
    "React.js",
    "Python",
    "Flask",
    "Next.js",
  ],
  authors: [{ name: "Sri Harsha" }],
  creator: "Sri Harsha",
  // Only publish canonical URL when an approved production domain is explicitly configured
  alternates: siteUrl ? { canonical: "./" } : undefined,
  openGraph: {
    title: "Sri Harsha | Aspiring ML Engineer & Full-Stack Developer",
    description:
      "Architecting intelligent vision-language systems and high-performance full-stack web applications.",
    url: siteUrl ? "./" : undefined,
    siteName: "Sri Harsha Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Harsha | Aspiring ML Engineer & Full-Stack Developer",
    description:
      "Architecting intelligent vision-language systems and high-performance full-stack web applications.",
  },
  robots: {
    index: Boolean(siteUrl),
    follow: Boolean(siteUrl),
    googleBot: {
      index: Boolean(siteUrl),
      follow: Boolean(siteUrl),
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Sri Harsha",
      jobTitle: "Aspiring Machine Learning Engineer & Full-Stack Developer",
      description:
        "B.Tech Computer Science & Engineering (AI & ML) student at Lovely Professional University (8.51 CGPA). Building multimodal AI systems and resilient full-stack web applications.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Lovely Professional University",
      },
      knowsAbout: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Generative AI",
        "React.js",
        "Python",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Sri Harsha Engineering Portfolio",
      description:
        "Professional engineering portfolio and technical case studies by Sri Harsha.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
