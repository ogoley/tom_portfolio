import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "@/app/globals.css";
import { ThemeScript } from "@/components/theme-script";
import { getSiteContent } from "@/lib/getSiteContent";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif"
});

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    metadataBase: new URL(`https://${content.site.domain}`),
    title: content.site.title,
    description: content.site.description,
    alternates: {
      canonical: "/"
    },
    openGraph: {
      title: content.site.title,
      description: content.site.description,
      url: `https://${content.site.domain}`,
      siteName: content.site.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: content.site.title,
      description: content.site.description
    }
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${newsreader.variable} bg-background font-sans text-foreground antialiased`}>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
