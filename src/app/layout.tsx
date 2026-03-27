import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albert Astucia | Entrepreneur & Speaker",
  description:
    "Portfolio of Albert Astucia — serial entrepreneur, multilingual speaker, and business leader building ventures across multiple industries in Manila.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
