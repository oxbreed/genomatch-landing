import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Why GenoMatch exists: too many families in West Africa are blindsided by sickle cell disease. We build genetic awareness into the foundation of every match, so couples can choose with their eyes open.",
  alternates: {
    canonical: "https://genomatch.app/mission",
  },
  openGraph: {
    title: "Our Mission — GenoMatch",
    description:
      "Love should be intentional. So should genetic health. Learn why GenoMatch is building genotype-aware dating for West Africa and the diaspora.",
    url: "https://genomatch.app/mission",
  },
};

export default function MissionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
