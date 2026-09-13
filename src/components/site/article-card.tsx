import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatDate, formatDateShort, seasonOf } from "@/content/articles";
import { readingMinutes } from "@/lib/markdown";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FeatureCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group relative block overflow-hidden bg-bvb text-bvb-ink transition-transform duration-300 hover:-translate-y-0.5"
    >
      <div
        aria-hidden
        className="absolute -top-16 -right-16 size-64 rotate-12 jersey-chevron opacity-[0.14]"
      />
      <div className="relative flex flex-col gap-6 p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase">
          <span className="bg-bvb-ink px-2 py-1 text-bvb">{article.kicker}</span>
          <span className="opacity-70">{formatDate(article.date)}</span>
          <span className="opacity-70">Saison {seasonOf(article.date)}</span>
        </div>

        <div>
          <h2 className="font-display text-4xl leading-[0.95] font-extrabold tracking-tight uppercase text-balance-tight sm:text-5xl lg:text-6xl">
            {article.title}
          </h2>
          <p className="mt-3 font-display text-lg font-semibold tracking-wide uppercase opacity-80 sm:text-xl">
            {article.subtitle}
          </p>
        </div>

        <p className="max-w-2xl text-[15px] leading-relaxed text-bvb-ink/80">{article.lede}</p>

        <div className="flex items-center gap-2 font-display text-sm font-bold tracking-widest uppercase">
          Weiterlesen
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-bvb/60"
    >
      <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-bvb uppercase">
        <span>{article.kicker}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="text-muted-foreground">{formatDateShort(article.date)}</span>
      </div>

      <h3 className="font-display text-2xl leading-tight font-bold tracking-tight uppercase transition-colors group-hover:text-bvb">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{article.subtitle}</p>

      <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground/90">
        {article.lede}
      </p>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/70">
        <Badge variant="outline" className="border-border text-[10px] tracking-widest uppercase">
          {article.category}
        </Badge>
        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          <Clock className="size-3" />
          {readingMinutes(article.body)} Min
        </span>
      </div>
    </Link>
  );
}

export function ArticleRow({ article, className }: { article: Article; className?: string }) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className={cn(
        "group grid gap-2 border-b border-border py-6 transition-colors hover:bg-card/70 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-6 sm:px-2",
        className,
      )}
    >
      <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
        {formatDateShort(article.date)}
      </span>
      <span>
        <span className="block font-display text-xl leading-tight font-bold tracking-tight uppercase transition-colors group-hover:text-bvb sm:text-2xl">
          {article.title}
        </span>
        <span className="mt-1 block text-sm text-muted-foreground">{article.subtitle}</span>
      </span>
      <span className="font-mono text-[10px] tracking-widest text-bvb uppercase">
        {article.category}
      </span>
    </Link>
  );
}
