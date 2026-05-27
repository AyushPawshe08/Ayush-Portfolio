import "./globals.css";

export const metadata = {
  // ── Core ─────────────────────────────────────────────────────────────────
  metadataBase: new URL("https://ayushpawshe.pages.dev"),

  title: "Ayush Pawshe - API Infrastructure & Backend Engineer",
  description:
    "Backend engineer focused on async systems, scalable APIs, and intelligent applications. Explore my featured projects, system designs, and technical experience.",

  // ── Open Graph (LinkedIn, Facebook, iMessage, Slack, …) ──────────────────
  openGraph: {
    type: "website",
    url: "https://ayushpawshe.pages.dev",
    siteName: "Ayush Pawshe Portfolio",
    title: "Ayush Pawshe - API Infrastructure & Backend Engineer",
    description:
      "Backend engineer focused on async systems, scalable APIs, and intelligent applications. Explore my featured projects, system designs, and technical experience.",
    images: [
      {
        url: "https://ayushpawshe.pages.dev/og-image.png", // absolute — never breaks
        width: 1200,
        height: 630,
        alt: "Ayush Pawshe – API Infrastructure & Backend Engineer portfolio preview",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Ayush Pawshe - API Infrastructure & Backend Engineer",
    description:
      "Backend engineer focused on async systems, scalable APIs, and intelligent applications. Explore my featured projects, system designs, and technical experience.",
    images: ["https://ayushpawshe.pages.dev/og-image.png"],
  },

  // ── Additional SEO ────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://ayushpawshe.pages.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
