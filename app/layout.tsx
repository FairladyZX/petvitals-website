import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PetVitals App | Pet Health App",
    template: "%s | PetVitals",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "PetVitals App | Pet Health App",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/Untitled-design-4.png",
        width: 600,
        height: 600,
        alt: "PetVitals app screens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PetVitals App | Pet Health App",
    description: siteConfig.description,
    images: ["/assets/Untitled-design-4.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
