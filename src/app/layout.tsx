import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Le Petit Chalet - Restaurant Français Authentique | Kigali, Rwanda",
  description: "Découvrez l'authenticité de la gastronomie française au cœur de Kigali. Restaurant Le Petit Chalet - Une expérience culinaire inoubliable depuis 2009.",
  keywords: ["restaurant français", "Kigali", "Rwanda", "gastronomie française", "cuisine authentique", "Le Petit Chalet"],
  authors: [{ name: "Le Petit Chalet" }],
  creator: "Le Petit Chalet",
  publisher: "Le Petit Chalet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Le Petit Chalet - Restaurant Français Authentique",
    description: "Découvrez l'authenticité de la gastronomie française au cœur de Kigali",
    url: "https://lepetitchalet-rw.com",
    siteName: "Le Petit Chalet",
    images: [
      {
        url: "https://ext.same-assets.com/3080284326/633436470.jpeg",
        width: 1200,
        height: 630,
        alt: "Le Petit Chalet - Restaurant Français à Kigali",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Petit Chalet - Restaurant Français Authentique",
    description: "Découvrez l'authenticité de la gastronomie française au cœur de Kigali",
    images: ["https://ext.same-assets.com/3080284326/633436470.jpeg"],
  },
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffd700" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
