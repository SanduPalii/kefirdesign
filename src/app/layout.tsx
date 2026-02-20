import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contemporary Glass Artist | Sculpting Light Through Glass",
  description:
    "Contemporary glass artist creating sculptural works that capture light, transparency, and transformation. Explore sculptures, installations, and limited editions.",
  keywords: ["glass art", "glass sculpture", "contemporary art", "glass artist", "sculpture", "installations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-nude-white text-warm-gray">
        {children}
      </body>
    </html>
  );
}
