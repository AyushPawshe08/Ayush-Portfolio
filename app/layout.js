import "./globals.css";

export const metadata = {
  title: "Ayush Portfolio",
  description: "Portfolio layout rebuilt from reference screenshots.",
  icons: {
    icon: "/portfolioIcon.png",
    apple: "/portfolioIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
