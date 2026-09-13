"use client";

import { useMemo, useState } from "react";

import { ArticleRow } from "@/components/site/article-card";
import { Button } from "@/components/ui/button";
import type { Article, ArticleCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ArchiveList({
  articles,
  categories,
}: {
  articles: Article[];
  categories: ArticleCategory[];
}) {
  const [active, setActive] = useState<ArticleCategory | "Alle">("Alle");

  const filtered = useMemo(
    () => (active === "Alle" ? articles : articles.filter((a) => a.category === active)),
    [articles, active],
  );

  const byYear = useMemo(() => {
    const map = new Map<string, Article[]>();
    for (const article of filtered) {
      const year = article.date.slice(0, 4);
      map.set(year, [...(map.get(year) ?? []), article]);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-2">
        {(["Alle", ...categories] as const).map((category) => (
          <Button
            key={category}
            size="sm"
            variant="outline"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-none border-border font-display text-xs tracking-widest uppercase",
              active === category
                ? "border-bvb bg-bvb text-bvb-ink hover:bg-bvb hover:text-bvb-ink"
                : "bg-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {byYear.map(([year, items]) => (
        <section key={year} className="mb-14">
          <div className="mb-2 flex items-baseline gap-4">
            <h2 className="font-display text-5xl leading-none font-extrabold tracking-tight text-bvb sm:text-6xl">
              {year}
            </h2>
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              {items.length} {items.length === 1 ? "Text" : "Texte"}
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="border-t border-border">
            {items.map((article) => (
              <ArticleRow key={article.slug} article={article} />
            ))}
          </div>
        </section>
      ))}

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">
          In dieser Rubrik steht noch nichts.
        </p>
      ) : null}
    </>
  );
}
