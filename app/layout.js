import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://ayushpawshe.pages.dev"),

  title: "Ayush Pawshe - Software Developer | Backend & AI",
  description:
    "Software Developer building backend systems and AI-powered applications with Python, FastAPI, PostgreSQL, Redis, and modern AI/ML technologies.",

  openGraph: {
    type: "website",
    url: "https://ayushpawshe.pages.dev",
    siteName: "Ayush Pawshe Portfolio",
    title: "Ayush Pawshe - Software Developer | Backend & AI",
    description:
      "Software Developer building backend systems and AI-powered applications with Python, FastAPI, PostgreSQL, Redis, and modern AI/ML technologies.",
    images: [
      {
        url: "https://ayushpawshe.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Pawshe - Software Developer | Backend & AI portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayush Pawshe - Software Developer | Backend & AI",
    description:
      "Building backend systems and AI-powered applications with Python, FastAPI, PostgreSQL, Redis, and modern AI/ML technologies.",
    images: ["https://ayushpawshe.pages.dev/og-image.png"],
  },

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
