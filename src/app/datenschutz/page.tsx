import type { Metadata } from "next";

import { ChevronBand } from "@/components/site/jersey";
import { JerseyGraphic } from "@/components/site/jersey-graphic";
import { formatDate } from "@/content/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Wie diese Seite mit Daten umgeht – ${site.name}.`,
  robots: { index: false, follow: true },
};

const { imprint, privacy } = site;

export default function PrivacyPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-bvb text-bvb-ink">
        <JerseyGraphic className="absolute -right-20 -bottom-16 size-64 text-bvb-ink opacity-[0.14]" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
            Stand: {formatDate(privacy.updated)}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.92] font-extrabold tracking-tight uppercase sm:text-6xl">
            Datenschutz
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl font-semibold tracking-wide uppercase opacity-80">
            Kurz gesagt: kein Tracking, keine Werbung, keine Konten.
          </p>
        </div>
        <ChevronBand tone="onDark" height={10} />
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 text-[17px] leading-[1.75] text-foreground/85 sm:px-6">
        <Section title="Verantwortlicher">
          <p className="my-5">
            Verantwortlich für die Datenverarbeitung auf dieser Website im
            Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <address className="my-5 not-italic">
            {imprint.name}
            <br />
            {imprint.street}
            <br />
            {imprint.city}
            <br />
            {imprint.country}
            <br />
            <a
              href={`mailto:${imprint.email}`}
              className="text-bvb underline underline-offset-4"
            >
              {imprint.email}
            </a>
          </address>
        </Section>

        <Section title="Was diese Seite nicht macht">
          <p className="my-5">
            Diese Website setzt keine Cookies, bindet keine Werbung ein,
            verwendet keine Analyse- oder Tracking-Dienste, keine Social-Media-
            Plugins und keine externen Schriftarten-, Karten- oder
            Video-Dienste. Es gibt keine Benutzerkonten, keine Kommentarfunktion
            und keinen Newsletter. Es werden keine Daten an Dritte verkauft oder
            zu Werbezwecken weitergegeben.
          </p>
          <p className="my-5">
            Die verwendeten Schriften werden zusammen mit der Seite von meinem
            eigenen Server ausgeliefert. Beim Aufruf entsteht also keine
            Verbindung zu Google Fonts oder einem anderen fremden Server.
          </p>
        </Section>

        <Section title="Hosting und Server-Logfiles">
          <p className="my-5">
            Die Seite wird bei einem externen Dienstleister gehostet
            {privacy.hostingProvider ? ` (${privacy.hostingProvider})` : ""}. Der
            Hoster verarbeitet in meinem Auftrag die Daten, die beim Aufruf
            dieser Website anfallen. Grundlage ist ein Vertrag über
            Auftragsverarbeitung nach Art. 28 DSGVO.
          </p>
          <p className="my-5">
            Bei jedem Aufruf erhebt der Server automatisch Informationen, die
            Ihr Browser übermittelt und die technisch nötig sind, um die Seite
            auszuliefern:
          </p>
          <ul className="my-5 space-y-2 pl-1">
            {[
              "IP-Adresse des anfragenden Geräts",
              "Datum und Uhrzeit des Zugriffs",
              "Name und URL der abgerufenen Datei",
              "übertragene Datenmenge und Meldung über den Erfolg des Abrufs",
              "verweisende Seite (Referrer), sofern übermittelt",
              "verwendeter Browser und Betriebssystem",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-bvb" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="my-5">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes
            Interesse liegt darin, die Seite technisch auszuliefern, ihre
            Stabilität zu sichern und Angriffe abwehren zu können. Diese Daten
            werden nicht mit anderen Datenquellen zusammengeführt und nicht
            dazu verwendet, einzelne Besucherinnen und Besucher zu
            identifizieren. Sie werden nach spätestens sieben Tagen gelöscht,
            sofern sie nicht ausnahmsweise zur Aufklärung eines konkreten
            Missbrauchsfalls länger benötigt werden.
          </p>
        </Section>

        <Section title="Gewählte Farbwelt im Browser">
          <p className="my-5">
            Oben im Kopf lässt sich zwischen zwei Farbwelten umschalten, dem
            Heim- und dem Auswärtstrikot. Wenn Sie eine davon auswählen, merkt
            sich der Browser diese Entscheidung lokal auf Ihrem Gerät
            (localStorage, Schlüssel <code className="font-mono text-[15px]">bvb-kit</code>).
          </p>
          <p className="my-5">
            Diese Information verlässt Ihr Gerät nicht, wird nicht an mich oder
            an Dritte übertragen und enthält keine personenbezogenen Daten. Sie
            dient ausschließlich dazu, die von Ihnen ausdrücklich gewünschte
            Darstellung beim nächsten Besuch beizubehalten, und ist damit nach
            § 25 Abs. 2 Nr. 2 TDDDG einwilligungsfrei. Sie können den Eintrag
            jederzeit über die Einstellungen Ihres Browsers löschen.
          </p>
        </Section>

        <Section title="Kontaktaufnahme per E-Mail">
          <p className="my-5">
            Wenn Sie mir schreiben, verarbeite ich Ihre Angaben aus der E-Mail
            einschließlich Ihrer Absenderadresse ausschließlich zur Bearbeitung
            Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO,
            bei Anfragen zu einem Vertragsverhältnis Art. 6 Abs. 1 lit. b DSGVO.
            Ich lösche diese Daten, sobald Ihr Anliegen erledigt ist und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
          <p className="my-5">
            Ein Hinweis zur Ehrlichkeit: E-Mails werden in der Regel
            unverschlüsselt übertragen. Bitte schicken Sie mir auf diesem Weg
            keine besonders schützenswerten Informationen.
          </p>
        </Section>

        <Section title="Verschlüsselung">
          <p className="my-5">
            Diese Seite wird über eine verschlüsselte Verbindung (TLS)
            ausgeliefert, erkennbar am Schloss-Symbol und an der Adresse, die
            mit <span className="font-mono text-[15px]">https://</span> beginnt.
            Dadurch können die zwischen Ihrem Browser und dem Server
            übertragenen Daten nicht ohne Weiteres mitgelesen werden.
          </p>
        </Section>

        <Section title="Externe Links">
          <p className="my-5">
            In den Texten stehen Links auf fremde Websites. Sobald Sie einem
            solchen Link folgen, gilt die Datenschutzerklärung des jeweiligen
            Anbieters. Auf die Datenverarbeitung dort habe ich keinen Einfluss.
          </p>
        </Section>

        <Section title="Ihre Rechte">
          <p className="my-5">Sie haben mir gegenüber jederzeit das Recht auf:</p>
          <ul className="my-5 space-y-2 pl-1">
            {[
              "Auskunft über die zu Ihnen gespeicherten Daten (Art. 15 DSGVO)",
              "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
              "Löschung (Art. 17 DSGVO)",
              "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
              "Datenübertragbarkeit (Art. 20 DSGVO)",
              "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-bvb" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="my-5">
            Eine formlose E-Mail an die oben genannte Adresse genügt. Außerdem
            haben Sie nach Art. 77 DSGVO das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde zu beschweren. Für mich zuständig ist
            die Landesbeauftragte für Datenschutz und Informationsfreiheit
            Nordrhein-Westfalen.
          </p>
        </Section>

        <Section title="Keine automatisierte Entscheidungsfindung">
          <p className="my-5">
            Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne
            von Art. 22 DSGVO findet nicht statt.
          </p>
        </Section>

        <Section title="Änderungen">
          <p className="my-5">
            Wenn sich die Seite technisch ändert, ändert sich diese Erklärung
            mit. Es gilt jeweils die Fassung, die hier abrufbar ist. Stand
            dieser Fassung: {formatDate(privacy.updated)}.
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
