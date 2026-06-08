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
    // Core product
    "GenoMatch",
    "GenoMatch app",
    "GenoMatch dating app",
    "genotype dating app",
    "genotype aware dating",
    "genotype compatibility app",
    "genotype matching app",
    "genotype dating Nigeria",

    // DNA and genetics
    "DNA dating app",
    "DNA compatibility dating",
    "genetic compatibility dating app",
    "genetic matching app",
    "DNA matching for couples",
    "genetic screening dating",
    "hereditary disease dating app",
    "genetic health dating",
    "DNA based matchmaking",
    "genetic compatibility for marriage",
    "gene matching dating",
    "genomics dating app",
    "genetic counselling dating",
    "DNA compatible partners",
    "genetic awareness dating",

    // Sickle cell disease
    "sickle cell dating app",
    "sickle cell disease dating",
    "sickle cell awareness app",
    "sickle cell compatibility app",
    "sickle cell free family planning",
    "avoid sickle cell disease",
    "sickle cell prevention Nigeria",
    "sickle cell carrier app",
    "sickle cell Nigeria app",
    "sickle cell Ghana app",
    "sickle cell awareness Africa",
    "sickle cell disease Africa",
    "SCD dating app",
    "sickling test before marriage",
    "sickle cell test for couples",
    "sickle cell screening dating",

    // Genotype specific
    "AA genotype dating",
    "AS genotype dating",
    "SS genotype dating",
    "AC genotype dating",
    "SC genotype dating",
    "CC genotype dating",
    "AA AS compatibility",
    "AS AS compatibility dating",
    "HbSS dating",
    "HbAS dating",
    "HbAA dating",
    "HbAC dating",
    "haemoglobin genotype dating",
    "hemoglobin compatibility dating",
    "genotype test before marriage",
    "genotype check before relationship",
    "genotype compatibility for marriage Nigeria",
    "what genotype is compatible for marriage",
    "genotype compatible couples",
    "AA and AS compatibility",
    "AS and AS dating risk",

    // Sickle cell medical terms
    "haemoglobin SS disease",
    "sickle cell anaemia prevention",
    "sickle cell trait carrier dating",
    "HbSC disease",
    "thalassaemia dating app",
    "haematology dating app",
    "blood group dating app",
    "blood type compatible dating",
    "inherited blood disorder dating",
    "autosomal recessive disease dating",

    // Nigeria market
    "dating app Nigeria",
    "dating app Lagos",
    "dating app Abuja",
    "dating app Port Harcourt",
    "dating app Kano",
    "Nigerian dating app 2025",
    "Nigerian singles app",
    "Nigerian dating site",
    "best dating app Nigeria",
    "dating app for Nigerians",
    "Nigerian matchmaking app",
    "serious dating Nigeria",
    "intentional dating Nigeria",
    "marriage minded dating Nigeria",
    "find a spouse Nigeria",
    "meet Nigerian singles",
    "Nigerian marriage app",
    "premium dating Nigeria",
    "dating app for educated Nigerians",

    // West Africa
    "West Africa dating app",
    "Ghana dating app",
    "dating app Accra",
    "African dating app",
    "African singles app",
    "African matchmaking app",
    "dating app West Africa 2025",

    // Diaspora
    "African diaspora dating app",
    "Nigerian diaspora dating",
    "Nigerian UK dating app",
    "Nigerian US dating app",
    "Nigerian Canada dating app",
    "Black African dating app",
    "African British dating app",
    "Afrobeats dating app",
    "Nigerian American dating",
    "Nigerian British dating",

    // Health and family planning
    "health conscious dating app",
    "family planning dating app",
    "informed marriage Nigeria",
    "health aware relationship app",
    "medical compatibility dating",
    "pre-marital health check app",
    "genetic health matchmaking",
    "healthy family planning app",
    "sickle cell family planning Nigeria",
    "NDPA compliant dating app",
    "data protection dating app Nigeria",

    // Intentional dating
    "serious relationship app Nigeria",
    "marriage focused dating app",
    "intentional dating app Africa",
    "premium African dating app",
    "luxury dating app Nigeria",
    "meaningful dating Africa",
    "purposeful dating Nigeria",

    // AEO long tail
    "what is genotype aware dating",
    "dating app that checks genotype",
    "app for sickle cell compatibility",
    "how to find genotype compatible partner",
    "best app for Nigerian singles",
    "dating app built for Africa",
    "how to avoid having sickle cell child",
    "can AS marry AS safely",
    "what happens when AS and AS marry",
    "genotype compatible matches Nigeria",
    "sickle cell safe dating",
    "genotype test result dating",
    "dating with sickle cell trait",
    "sickle cell carrier relationship advice",
    "genetic disease prevention dating",
    "first genotype dating app in the world",
    "dating app for health conscious Africans",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  referrer: "origin-when-cross-origin",
  verification: {
    google: "add-your-google-verification-code-here",
    other: {
      "msvalidate.01": "7A0E9B04FDCB32C33C1268B7A9C5E875",
    },
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
                "Genotype-aware matching (AA, AS, SS, AC, SC, CC)",
                "Sickle cell disease compatibility scoring",
                "DNA and genetic compatibility algorithm",
                "Haemoglobin genotype verification",
                "Real-time chat between compatible matches",
                "Profile genotype verification badge",
                "Sickle cell risk level display per match",
                "West Africa and diaspora focused",
                "NDPA 2023 Nigeria data protection compliant",
                "Encrypted genotype health data",
                "Interest and personality compatibility",
                "Intentional relationship matching",
              ],
              about: {
                "@type": "Thing",
                name: "Genotype-aware dating and sickle cell disease prevention through informed matchmaking",
              },
              mentions: [
                { "@type": "MedicalCondition", name: "Sickle Cell Disease" },
                { "@type": "MedicalCondition", name: "Sickle Cell Trait" },
                { "@type": "MedicalCondition", name: "Haemoglobin SS" },
                { "@type": "MedicalCondition", name: "Haemoglobin AS" },
                { "@type": "Thing", name: "Genotype Compatibility" },
                { "@type": "Thing", name: "DNA Matching" },
                { "@type": "Thing", name: "Genetic Counselling" },
              ],
              geographicArea: {
                "@type": "Place",
                name: "Nigeria, West Africa, African Diaspora, United Kingdom, United States, Canada",
              },
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
