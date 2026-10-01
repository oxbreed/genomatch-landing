import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "For Partners",
  description:
    "Partner with GenoMatch to reduce preventable sickle cell suffering in Africa. Health organisations, NGOs, researchers, governments, and corporate partners welcome.",
  path: "/partners",
});

export default function PartnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
