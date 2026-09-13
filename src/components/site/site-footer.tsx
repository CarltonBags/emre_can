import Link from "next/link";

import { ChevronBand } from "@/components/site/jersey";
import { StadiumMark } from "@/components/site/stadium-mark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24">
      <ChevronBand height={8} />
      <div className="bg-bvb-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <StadiumMark className="size-11 shrink-0" />
              <p className="font-display text-2xl leading-none font-extrabold tracking-tight uppercase">
                {site.name}
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <p className="mb-1 font-mono text-[10px] tracking-[0.25em] text-bvb uppercase">
              Navigation
            </p>
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <p className="mb-1 font-mono text-[10px] tracking-[0.25em] text-bvb uppercase">
              In eigener Sache
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kein offizielles Angebot des Vereins. Private Fanseite, ohne
              Anspruch auf Neutralität.
            </p>
          </div>
        </div>

        <div className="border-t border-border/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>{site.claim}</p>
            <p className="font-mono tracking-widest uppercase">
              Farbwelt: Heimtrikot 1993/94
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
