import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Mission",
  description:
    "Why GenoMatch exists: too many families in West Africa are blindsided by sickle cell disease. We build genetic awareness into every match so couples can choose with their eyes open.",
  path: "/mission",
});

export default function MissionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
