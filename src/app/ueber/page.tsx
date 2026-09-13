import type { Metadata } from "next";

import { ChevronBand } from "@/components/site/jersey";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über den Blog",
  description: site.description,
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-bvb text-bvb-ink">
        <div
          aria-hidden
          className="absolute -right-20 -bottom-16 size-64 rotate-45 jersey-chevron opacity-[0.13]"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
            In eigener Sache
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.92] font-extrabold tracking-tight uppercase sm:text-6xl">
            Über diesen Blog
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl font-semibold tracking-wide uppercase opacity-80">
            Kein Journalismus. Eine Zuneigung mit Absätzen.
          </p>
        </div>
        <ChevronBand tone="onDark" height={10} />
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 text-[17px] leading-[1.75] text-foreground/85 sm:px-6">
        <p className="my-5">
          Dieser Blog hat noch keinen Namen. Das ist kein Versehen, sondern der
          Stand der Dinge: Ich schreibe hier seit 2023 auf, was mir zu Borussia
          Dortmund einfällt, und über einen Titel für das Ganze bin ich mir
          immer noch nicht einig. Die Fläche dafür ist im Kopf dieser Seite
          freigehalten, oben links, das gestrichelte Quadrat. Da kommt
          irgendwann ein Logo hin.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-extrabold tracking-wide uppercase sm:text-3xl">
          <span className="mr-2 text-bvb">/</span>Worum es hier geht
        </h2>
        <p className="my-5">
          Um Geschichten. Es gibt genug Seiten, auf denen Spielernoten verteilt,
          Ablösesummen gegengerechnet und Trainer nach vier Spieltagen entlassen
          werden. Hier stehen Geschichten – über Spieler, über Abende, über
          Leute, die für diesen Verein gearbeitet haben. Das ist keine
          journalistische Haltung, das ist eine Fanhaltung, und ich halte sie
          für vollkommen legitim, solange man sie dazusagt.
        </p>
        <p className="my-5">
          Was ich mir dabei verbiete: Dinge zu erfinden. Alles, was hier an
          Daten, Ergebnissen und Zahlen steht, ist nachgeschlagen. Die Meinung
          drumherum gehört mir allein.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-extrabold tracking-wide uppercase sm:text-3xl">
          <span className="mr-2 text-bvb">/</span>Wer das schreibt
        </h2>
        <p className="my-5">{site.author.bio}</p>
        <p className="my-5">
          Über meinem Bett hing ein Starschnitt von Stéphane Chapuisat. Auf dem
          Schulweg haben wir die Aufstellung gerufen. Am 17. Juni 1995 saß ich
          auf dem Schoß meines Vaters, als nach 32 Jahren die Schale wieder nach
          Dortmund kam. Und im April 2013 ist mir beim Tor von Felipe Santana
          die Brille kaputtgegangen. Mehr Lebenslauf braucht es hier nicht.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-extrabold tracking-wide uppercase sm:text-3xl">
          <span className="mr-2 text-bvb">/</span>Warum die Seite so aussieht
        </h2>
        <p className="my-5">
          Die Farbwelt kommt vom Heimtrikot der Saison 1993/94: Neongelb, harte
          schwarze Grafik auf Schulter und Ärmel, V-Kragen, Nike, Continentale
          auf der Brust. Das Trikot, in dem diese Mannschaft losgelaufen ist,
          bevor 1995 alles anders wurde.
        </p>
        <p className="my-5">
          Ein Zugeständnis an heute habe ich mir erlaubt: Das grelle Neongelb
          von damals ist durch das Gelb ersetzt, das der Verein inzwischen
          verwendet. Es soll ja nach Erinnerung aussehen, nicht nach
          Kostümverleih.
        </p>

        <div className="my-12 flex items-center gap-3" aria-hidden>
          <span className="h-px flex-1 bg-border" />
          <span className="size-1.5 rotate-45 bg-bvb" />
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="my-5 text-muted-foreground">
          Dies ist eine private Fanseite und steht in keiner Verbindung zu
          Borussia Dortmund. Alle Vereins- und Markenrechte liegen bei ihren
          jeweiligen Inhabern.
        </p>
      </div>
    </div>
  );
}
