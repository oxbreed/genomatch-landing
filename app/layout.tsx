import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genomatch.app"),
  title: {
    default: "GenoMatch — The World's First Genotype-Aware Dating App",
    template: "%s | GenoMatch",
  },
  description:
    "GenoMatch is the world's first genotype-aware dating app for West Africa and the African diaspora. Match with compatible partners based on genotype (AA, AS, SS, AC) to build intentional, informed love stories. Available in Nigeria and across the African diaspora.",
  keywords: [
    "genotype dating app",
    "sickle cell dating",
    "Nigeria dating app",
    "African dating app",
    "genotype compatibility",
    "AA AS SS AC dating",
    "sickle cell awareness dating",
    "West Africa dating app",
    "African diaspora dating",
    "intentional dating Nigeria",
    "genotype aware matching",
    "GenoMatch",
    "dating app Nigeria 2025",
    "sickle cell free family",
    "informed love",
  ],
  authors: [{ name: "GenoMatch Ltd", url: "https://genomatch.app" }],
  creator: "GenoMatch Ltd",
  publisher: "GenoMatch Ltd",
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    alternateLocale: ["en_GB", "en_US"],
    url: "https://genomatch.app",
    siteName: "GenoMatch",
    title: "GenoMatch — The World's First Genotype-Aware Dating App",
    description:
      "Find love without leaving your family's future to chance. GenoMatch matches you with genetically compatible partners across Nigeria and the African diaspora.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GenoMatch — Connecting Hearts. Aligning Genes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenoMatch — The World's First Genotype-Aware Dating App",
    description:
      "Find love without leaving your family's future to chance. Built for Nigeria and the African diaspora.",
    images: ["/og-image.png"],
    creator: "@genomatch",
  },
  alternates: {
    canonical: "https://genomatch.app",
  },
  category: "dating",
  applicationName: "GenoMatch",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "add-your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "GenoMatch",
              description:
                "The world's first genotype-aware dating app for West Africa and the African diaspora. Match with compatible partners based on genotype compatibility.",
              url: "https://genomatch.app",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "NGN",
              },
              creator: {
                "@type": "Organization",
                name: "GenoMatch Ltd",
                url: "https://genomatch.app",
                email: "hello@genomatch.app",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "NG",
                },
              },
              audience: {
                "@type": "Audience",
                audienceType:
                  "Singles in Nigeria and the African diaspora who want genotype-aware matching",
              },
              featureList: [
                "Genotype-aware matching (AA, AS, SS, AC)",
                "Sickle cell compatibility scoring",
                "Real-time chat",
                "Profile verification",
                "West Africa focused",
              ],
              inLanguage: "en",
              keywords:
                "genotype dating, sickle cell dating, Nigeria dating app, African diaspora dating, genotype compatibility",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
