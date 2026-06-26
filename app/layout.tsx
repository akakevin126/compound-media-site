import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compound Media — Full-Service Media Agency",
  description:
    "Paid, organic, email, and content — run as one compounding system that builds on itself month over month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">{children}</body>
    </html>
  );
}
