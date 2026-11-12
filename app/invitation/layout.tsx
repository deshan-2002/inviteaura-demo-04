import type { Metadata } from "next";

/**
 * The invitation page is a client component ("use client"), so its own
 * metadata lives in this server layout. This makes the Open Graph URL
 * match the link people actually share (/invitation) — WhatsApp uses it
 * to resolve the preview.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://inviteaura-demo-04.vercel.app");

const title = "Ashen & Nethmi | Wedding Invitation";
const description =
  "Together with their families, request the honour of your presence. Saturday, 12th December 2026 · Colombo, Sri Lanka.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/invitation",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/invitation`,
    siteName: "Ashen & Nethmi Wedding",
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashen & Nethmi Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function InvitationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
