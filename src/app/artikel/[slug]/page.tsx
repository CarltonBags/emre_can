import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

import { ChevronBand } from "@/components/site/jersey";
import { JerseyGraphic } from "@/components/site/jersey-graphic";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { articles, formatDate, getArticle, getNeighbours, seasonOf } from "@/content/articles";
import { readingMinutes, renderMarkdown } from "@/lib/markdown";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/artikel/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.lede,
  };
}

export default async function ArticlePage({ params }: PageProps<"/artikel/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { newer, older } = getNeighbours(slug);

  return (
    <article>
      {/* Kopf im Trikotgelb */}
      <header className="relative overflow-hidden bg-bvb text-bvb-ink">
        <JerseyGraphic className="absolute -top-10 -right-24 size-72 text-bvb-ink opacity-[0.14]" />
        <div className="relative mx-auto max-w-3xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16">
          <Link
            href="/archiv"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase opacity-70 transition-opacity hover:opacity-100"
          >
            <ArrowLeft className="size-3" /> Archiv
          </Link>

          <p className="mt-8 inline-block bg-bvb-ink px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-bvb uppercase">
            {article.kicker}
          </p>

          <h1 className="mt-4 font-display text-4xl leading-[0.92] font-extrabold tracking-tight uppercase text-balance-tight sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 font-display text-xl leading-tight font-semibold tracking-wide uppercase opacity-80 sm:text-2xl">
            {article.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase opacity-75">
            <span>{formatDate(article.date)}</span>
            <span>Saison {seasonOf(article.date)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" />
              {readingMinutes(article.body)} Minuten
            </span>
            <span>{site.author.name}</span>
          </div>
        </div>
        <ChevronBand tone="onDark" height={10} />
      </header>

      {/* Anriss */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="border-l-4 border-bvb bg-card py-6 pr-6 pl-6 text-lg leading-relaxed text-foreground/90 mt-10">
          {article.lede}
        </p>
      </div>

      {/* Fließtext */}
      <div className="mx-auto max-w-3xl px-4 pb-16 text-[17px] text-foreground/85 sm:px-6">
        {renderMarkdown(article.body)}
      </div>

      {/* Schlagworte */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Separator className="bg-border" />
        <div className="flex flex-wrap items-center gap-2 py-8">
          <span className="mr-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
            Schlagworte
          </span>
          {article.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-none border-border text-[11px] tracking-wide"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Blättern */}
      <nav className="mx-auto grid max-w-3xl gap-px bg-border px-4 sm:grid-cols-2 sm:px-6">
        {older ? (
          <Link
            href={`/artikel/${older.slug}`}
            className="group bg-background p-6 transition-colors hover:bg-card"
          >
            <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              <ArrowLeft className="size-3" /> Älter
            </span>
            <span className="mt-2 block font-display text-lg leading-tight font-bold uppercase transition-colors group-hover:text-bvb">
              {older.title}
            </span>
          </Link>
        ) : (
          <span className="bg-background p-6" />
        )}
        {newer ? (
          <Link
            href={`/artikel/${newer.slug}`}
            className="group bg-background p-6 text-right transition-colors hover:bg-card"
          >
            <span className="flex items-center justify-end gap-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Neuer <ArrowRight className="size-3" />
            </span>
            <span className="mt-2 block font-display text-lg leading-tight font-bold uppercase transition-colors group-hover:text-bvb">
              {newer.title}
            </span>
          </Link>
        ) : (
          <span className="bg-background p-6" />
        )}
      </nav>
    </article>
  );
}
