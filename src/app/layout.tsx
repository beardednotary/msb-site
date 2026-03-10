import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My Social Battery — Track & Optimize Your Social Energy",
  description:
    "Discover how social interactions affect your energy and get personalized insights to optimize your social calendar and well-being.",
  metadataBase: new URL("https://mysocialbattery.app"),
  openGraph: {
    title: "My Social Battery",
    description: "Understand Your Energy. Optimize Your Social Life.",
    url: "https://mysocialbattery.app",
    siteName: "My Social Battery",
    images: [{ url: "/images/og-image.png", width: 1200, height: 675 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Social Battery",
    description: "Understand Your Energy. Optimize Your Social Life.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
