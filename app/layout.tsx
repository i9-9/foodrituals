import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Rituals - Immersive Celebrations Around The Ritual Essence of Eating",
  description: "Food Rituals is a series of immersive celebrations around the ritual essence of eating, based on the thousands of rites and beliefs existing throughout the world.",
  keywords: ["food rituals", "immersive dining", "theatrical dining", "food ceremony", "private events"],
  openGraph: {
    title: "Food Rituals",
    description: "Immersive celebrations around the ritual essence of eating",
    type: "website",
    images: [
      {
        url: "/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Food Rituals"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Rituals",
    description: "Immersive celebrations around the ritual essence of eating",
    images: ["/images/cover.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/hoefler.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
