import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ArticleCard, ArticleRow, FeatureCard } from "@/components/site/article-card";
import { ChevronBand, CollarNotch, WeaveBackdrop } from "@/components/site/jersey";
import { StadiumMark } from "@/components/site/stadium-mark";
import { Button } from "@/components/ui/button";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";

export default function Home() {
  const featured = articles.filter((article) => article.featured);
  // Ein angepinnter Artikel schlägt das Datum, sonst der neueste Aufmacher.
  const lead = articles.find((article) => article.pinned) ?? featured[0] ?? articles[0];
  const rest = articles.filter((article) => article.slug !== lead.slug);
  const recent = rest.slice(0, 6);
  const archive = rest.slice(6, 14);

  return (
    <>
      {/* Hero – das Trikot als Fläche: Neongelb, schwarze Ärmelgrafik. */}
      <section className="relative overflow-hidden bg-bvb text-bvb-ink">
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-1/2 jersey-chevron opacity-[0.12]"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-70">
            {site.eyebrow}
          </p>

          {/* Logo plus Arbeitstitel. Der Name steht noch aus. */}
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <StadiumMark
              className="size-24 shrink-0 sm:size-28"
              title="Sitzplan von oben, ein Platz auf der Seitentribüne ist schwarz"
            />
            <h1 className="font-display text-5xl leading-[0.9] font-extrabold tracking-tight uppercase sm:text-7xl">
              {site.name}
            </h1>
          </div>

          <p className="mt-8 max-w-2xl font-display text-2xl leading-tight font-semibold tracking-wide uppercase sm:text-3xl">
            81.365 Plätze. Einer davon ist meiner.
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-bvb-ink/75">
            Erinnerungen, Spielerporträts und Saisonnotizen von jemandem, der
            es nie geschafft hat, sich davon zu lösen.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-bvb-ink font-display tracking-widest text-bvb uppercase hover:bg-bvb-ink/85"
            >
              <Link href={`/artikel/${lead.slug}`}>Zum Aufmacher</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-2 border-bvb-ink bg-transparent font-display tracking-widest text-bvb-ink uppercase hover:bg-bvb-ink hover:text-bvb"
            >
              <Link href="/archiv">Alle {articles.length} Texte</Link>
            </Button>
          </div>
        </div>
        <ChevronBand tone="onDark" height={10} />
      </section>

      {/* Aufmacher */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          label="Aufmacher"
          title="Der Text, mit dem ich anfangen würde"
        />
        <FeatureCard article={lead} />
      </section>

      {/* Zuletzt */}
      <section className="relative border-y border-border bg-card/40">
        <WeaveBackdrop />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionHeading label="Zuletzt geschrieben" title="Neu im Blog" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Archivanriss */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading label="Weiter zurück" title="Aus dem Archiv" />
        <div className="border-t border-border">
          {archive.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-10">
          <Button
            asChild
            variant="ghost"
            className="rounded-none px-0 font-display tracking-widest text-bvb uppercase hover:bg-transparent hover:text-foreground"
          >
            <Link href="/archiv">
              Komplettes Archiv <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Kragen-Abschluss wie am Trikot */}
      <CollarNotch className="rotate-180" />
    </>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-[10px] tracking-[0.3em] text-bvb uppercase">{label}</p>
      <h2 className="mt-2 font-display text-3xl leading-none font-extrabold tracking-tight uppercase sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
