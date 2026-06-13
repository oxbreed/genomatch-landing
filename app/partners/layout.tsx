import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "Partner with GenoMatch to end preventable sickle cell suffering in Africa. We work with health organisations, NGOs, research institutions, governments, and corporate partners across West Africa and the diaspora.",
  alternates: {
    canonical: "https://genomatch.app/partners",
  },
  openGraph: {
    title: "For Partners | GenoMatch",
    description:
      "Health organisations, NGOs, researchers, and corporate partners: join GenoMatch in reducing sickle cell disease incidence through genotype aware matching.",
    url: "https://genomatch.app/partners",
  },
};

export default function PartnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
