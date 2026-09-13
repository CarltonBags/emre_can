import type { Metadata } from "next";
import { Barlow_Condensed, Geist_Mono, Inter } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { DEFAULT_KIT, KIT_STORAGE_KEY } from "@/lib/kits";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Läuft blockierend vor dem ersten Paint und setzt das gewählte Trikot.
 * Ohne das würde beim Laden kurz das Heimtrikot aufblitzen.
 */
const kitScript = `(function(){try{var k=localStorage.getItem(${JSON.stringify(
  KIT_STORAGE_KEY,
)});document.documentElement.dataset.kit=(k==="heim"||k==="auswaerts")?k:${JSON.stringify(
  DEFAULT_KIT,
)};}catch(e){document.documentElement.dataset.kit=${JSON.stringify(DEFAULT_KIT)};}})();`;

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.eyebrow}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      data-kit={DEFAULT_KIT}
      suppressHydrationWarning
      className={`${inter.variable} ${barlowCondensed.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: kitScript }} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
