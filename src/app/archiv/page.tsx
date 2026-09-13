import type { Metadata } from "next";

import { ArchiveList } from "@/components/site/archive-list";
import { articles, categories } from "@/content/articles";

export const metadata: Metadata = {
  title: "Archiv",
  description: "Alle Texte dieses Blogs, sortiert nach Jahr.",
};

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="mb-12">
        <p className="font-mono text-[10px] tracking-[0.3em] text-bvb uppercase">
          Alles auf einen Blick
        </p>
        <h1 className="mt-2 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl">
          Archiv
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          {articles.length} Texte, geschrieben zwischen 2023 und heute. Manches
          davon ist Tagesgeschäft, manches hätte ich auch vor zwanzig Jahren so
          aufgeschrieben.
        </p>
      </header>

      <ArchiveList articles={articles} categories={[...categories]} />
    </div>
  );
}
