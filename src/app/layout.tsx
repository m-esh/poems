import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Noto_Nastaliq_Urdu } from "next/font/google";

import { ThemeProvider } from "@/components/site/theme-provider";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-nastaliq",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Golshan Raz — The Poetry of Rumi",
    template: "%s · Golshan Raz",
  },
  description:
    "A quiet garden devoted to the poetry of Jalal ad-Din Rumi — his life, his message, and his verse, for slow reading, reflection, and return.",
  keywords: [
    "Persian poetry",
    "Sufi poetry",
    "Rumi",
    "Jalal ad-Din Rumi",
    "Masnavi",
    "Divan-e Shams",
    "Golshan Raz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${lora.variable} ${nastaliq.variable}`}
    >
      <body className="bg-background font-body text-foreground flex min-h-screen flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="vignette flex min-h-screen flex-col">
            <SiteHeader />
            <main className="relative z-[2] flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
