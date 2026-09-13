import type { Metadata } from "next";

import { ChevronBand } from "@/components/site/jersey";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Anbieterkennzeichnung für ${site.name}.`,
  robots: { index: false, follow: true },
};

const { imprint } = site;

export default function ImprintPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-bvb text-bvb-ink">
        <div
          aria-hidden
          className="absolute -right-20 -bottom-16 size-64 rotate-45 jersey-chevron opacity-[0.13]"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
            Pflichtangaben
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.92] font-extrabold tracking-tight uppercase sm:text-6xl">
            Impressum
          </h1>
        </div>
        <ChevronBand tone="onDark" height={10} />
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 text-[17px] leading-[1.75] text-foreground/85 sm:px-6">
        <Section title="Angaben gemäß § 5 DDG">
          <address className="my-5 not-italic">
            {imprint.name}
            <br />
            {imprint.street}
            <br />
            {imprint.city}
            <br />
            {imprint.country}
          </address>
        </Section>

        <Section title="Kontakt">
          {imprint.email ? (
            <p className="my-5">
              E-Mail:{" "}
              <a
                href={`mailto:${imprint.email}`}
                className="text-bvb underline underline-offset-4"
              >
                {imprint.email}
              </a>
            </p>
          ) : (
            <p className="my-5 text-muted-foreground">
              E-Mail-Adresse wird ergänzt.
            </p>
          )}
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <address className="my-5 not-italic">
            {imprint.name}
            <br />
            {imprint.street}
            <br />
            {imprint.city}
          </address>
        </Section>

        <Section title="Haftung für Inhalte">
          <p className="my-5">
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
            Rechtsverletzungen entferne ich diese Inhalte umgehend.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p className="my-5">
            Dieses Angebot enthält Links zu externen Webseiten Dritter, auf
            deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
            rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen entferne ich derartige Links
            umgehend.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p className="my-5">
            Die von mir erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
        </Section>

        <Section title="Verhältnis zu Borussia Dortmund">
          <p className="my-5">
            Dies ist eine private Fanseite. Sie steht in keiner Verbindung zum
            Ballspielverein Borussia 09 e.V. Dortmund und wird von diesem weder
            betrieben noch beauftragt oder unterstützt. Alle Vereins-, Marken-
            und Bildrechte liegen bei ihren jeweiligen Inhabern. Genannte
            Vereins- und Personennamen dienen ausschließlich der Berichterstattung.
          </p>
        </Section>

        <Section title="Streitschlichtung">
          <p className="my-5">
            Ich bin nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="mt-12 mb-4 font-display text-2xl leading-tight font-extrabold tracking-wide uppercase first:mt-0 sm:text-3xl">
        <span className="mr-2 text-bvb">/</span>
        {title}
      </h2>
      {children}
    </>
  );
}
