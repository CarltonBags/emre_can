# BVB-Blog (Arbeitstitel)

Ein Next.js-Blog mit wohlwollenden Texten über Borussia Dortmund, geschrieben
aus Fansicht. 29 Artikel, datiert von Mai 2023 bis September 2026.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4
- shadcn/ui (Button, Badge, Separator, Sheet)
- lucide-react

## Design

Die Farbwelt zitiert das **Heimtrikot 1993/94** (Nike, "die Continentale"):
Neongelbe Fläche, harte schwarze Zickzack-Grafik auf Schulter und Ärmel,
V-Kragen. Das grelle Neongelb von damals ist bewusst durch das heutige
Vereinsgelb `#FDE100` ersetzt.

Zwei Motive, bewusst getrennt:

- **Große Flächen** (Hero, Artikelkopf, Kartenecken) tragen die zerrissene
  Schultergrafik aus `components/site/jersey-graphic.tsx`: Striche von oben
  rechts nach unten links, lückenlos nebeneinander, gleiche Stärke, aber jeder
  unterschiedlich lang und versetzt angesetzt. Erzeugt aus einem Generator mit
  festem Startwert, damit Server und Client dasselbe Bild rendern. Ein
  `repeating-linear-gradient` scheidet aus – der kann nur gleich lange Striche.

  Die Striche laufen oben rechts aus dem Bild, enden aber mit Abstand vor der
  linken und unteren Kante. Sonst schneidet der Rand sie ab und das Quadrat,
  in dem die Grafik sitzt, wird als gerade Linie sichtbar. `floorAt()` rechnet
  dafür aus, wo die gedrehte Fläche endet. Aus demselben Grund steht
  `preserveAspectRatio` auf `meet` und alle Einsatzorte sind quadratisch –
  bei `slice` würde wieder gekappt.
- **Schmale Bänder** zwischen den Sektionen bleiben beim gleichmäßigen
  Zickzack (`.jersey-chevron` in `globals.css`, `ChevronBand`). Auf zehn Pixeln
  Höhe wirkt die zerrissene Variante nur unruhig.

Dazu `CollarNotch` und `WeaveBackdrop` in `components/site/jersey.tsx`.

### Zwei Farbwelten

Statt Hell/Dunkel wählt man im Kopf das Trikot. `data-kit` am `<html>`
schaltet zwischen `heim` (Gelb, `#FDE100`) und `auswaerts` (Pink, `#E8398B`,
Lila in `--bvb-deep`). Beide Paletten stehen in `globals.css`, die Auswahl
liegt in `src/lib/kits.ts`, der Schalter in `components/site/kit-toggle.tsx`.
Ein blockierendes Inline-Skript in `layout.tsx` setzt das Attribut vor dem
ersten Paint, sonst blitzt kurz das Heimtrikot auf.

### Logo

`components/site/stadium-mark.tsx` zeichnet den Sitzplan von oben: 29x29-Raster,
338 Plätze. Die Form folgt dem Signal Iduna Park – vier freistehende Tribünen
statt einer Schüssel, dazu die offenen Ecken mit den nachträglich eingesetzten
Eckblöcken. Die Blöcke stehen als Rechtecke in `STANDS` und liegen spiegel-
symmetrisch zur Mitte. Alle Plätze tragen `--bvb`,
einer auf der Westtribüne `--seat-mine` – und das ist bewusst die Farbe des
jeweils anderen Trikots. `src/app/icon.svg` hat dieselbe Geometrie mit festen
Farben, weil ein Favicon keine CSS-Variablen lesen kann.

## Branding

Der Blog hat noch keinen Namen. Alle Platzhalter stecken in **`src/lib/site.ts`**:

```ts
name          // Blogname im Kopf, Fuß und Titel-Tag
// Das Logo selbst liegt in src/components/site/stadium-mark.tsx
eyebrow       // Zeile über dem Namen
claim         // Zweizeiler im Fuß
```

Freigehaltene Flächen fürs spätere Logo:

- `src/components/site/brand.tsx` – gestricheltes Quadrat in der Kopfleiste
- `src/app/page.tsx` – großes Logofeld im Hero
- `src/components/site/site-footer.tsx` – Logofeld im Fuß

Zum Umbenennen reicht `site.ts`; für das Logo die drei gestrichelten
Container gegen ein `<Image>`/SVG tauschen.

## Inhalte

Ein Artikel = eine Datei unter `src/content/articles/<slug>.ts` mit
Default-Export vom Typ `Article` (`src/lib/types.ts`). Neue Artikel zusätzlich
in `src/content/articles.ts` importieren und in das Array eintragen.

Der Fließtext ist ein kleiner Markdown-Dialekt, gerendert von
`src/lib/markdown.tsx`: `##`, `###`, `>`, `- `, `---`, `**fett**`, `*kursiv*`.

## Entwicklung

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```
