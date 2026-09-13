import { cn } from "@/lib/utils";

/**
 * Die schwarze Grafik des Heimtrikots 1993/94.
 *
 * Striche von oben rechts nach unten links, lückenlos nebeneinander, alle
 * gleich stark – nur die Länge und der Ansatzpunkt wechseln.
 *
 * Wichtig für die Optik: Jeder Strich läuft oben bzw. rechts aus dem Bild
 * heraus – dort darf angeschnitten werden, das ist die Kante, an der die
 * Grafik hängt. Vor der linken und der unteren Kante hört dagegen jeder
 * Strich auf. Würde dort geschnitten, entstünde genau die gerade Linie, die
 * das Quadrat sichtbar macht, in dem die Grafik steckt. Deshalb wird für jede
 * Bahn ausgerechnet, wo die gedrehte Zeichenfläche endet, und davor mit
 * zufälligem Abstand Schluss gemacht. Die Länge ergibt sich daraus von selbst.
 *
 * Die Werte kommen aus einem Generator mit festem Startwert, damit Server und
 * Client dasselbe Bild rendern und es sich zwischen zwei Builds nicht ändert.
 */

const VIEW = 200;
/** Strichstärke. Die Bahnen stoßen ohne Zwischenraum aneinander. */
const STROKE = 2;
/** Mindestabstand zur unteren und linken Kante. */
const MARGIN = 7;
/** So weit ragt jeder Strich über die obere Kante hinaus. */
const OVERSHOOT = 6;

const CENTER = VIEW / 2;
/** Halbe Diagonale: So weit reicht die um 45 Grad gedrehte Fläche. */
const REACH = (VIEW * Math.SQRT2) / 2;

function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

/**
 * Untere Grenze der gedrehten Zeichenfläche an der Stelle x. Das Bild ist im
 * Baukoordinatensystem eine auf die Spitze gestellte Raute; dies ist ihre
 * untere Kante, also im fertigen Bild der linke und der untere Rand.
 */
function floorAt(x: number) {
  return CENTER + REACH - Math.abs(x - CENTER);
}

/** Obere Grenze. Dort darf überstehen – das ist die Ecke oben rechts. */
function ceilingAt(x: number) {
  return CENTER - REACH + Math.abs(x - CENTER);
}

function buildBars() {
  const random = seeded(19_9394);
  const bars: { x: number; y: number; h: number }[] = [];

  for (let x = CENTER - REACH; x < CENTER + REACH; x += STROKE) {
    // Die schmalere der beiden Kanten des Strichs zählt, sonst ragt die
    // hintere Ecke doch über die Grenze.
    const limit = Math.min(floorAt(x), floorAt(x + STROKE)) - MARGIN;
    const top = Math.max(ceilingAt(x), ceilingAt(x + STROKE));
    const window = limit - top;
    if (window < 6) continue;

    // Jeder Strich beginnt jenseits der oberen Kante, läuft also oben bzw.
    // rechts aus dem Bild heraus. Angeschnitten wird nur dort.
    const start = Math.min(ceilingAt(x), ceilingAt(x + STROKE)) - OVERSHOOT;

    // Die Länge entsteht allein daraus, wo der Strich unten links aufhört.
    // Ohne diese Streuung lägen alle Enden auf der Rautenkante – dann wäre
    // die gerade Linie wieder da, nur ein Stück weiter innen.
    const end = limit - random() * window * 0.6;

    bars.push({ x, y: start, h: end - start });
  }

  return bars;
}

const BARS = buildBars();

export function JerseyGraphic({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      // Nicht zuschneiden: Beim Zuschneiden würden die Striche an der Kante
      // gekappt und das Quadrat wäre wieder zu sehen.
      preserveAspectRatio="xMidYMid meet"
      className={cn("pointer-events-none", className)}
    >
      <g fill="currentColor" transform={`rotate(45 ${CENTER} ${CENTER})`}>
        {BARS.map((bar, index) => (
          <rect key={index} x={bar.x} y={bar.y} width={STROKE} height={bar.h} />
        ))}
      </g>
    </svg>
  );
}
