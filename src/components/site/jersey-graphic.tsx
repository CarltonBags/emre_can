import { cn } from "@/lib/utils";

/**
 * Die schwarze Grafik des Heimtrikots 1993/94.
 *
 * Kein gleichmäßiges Streifenmuster: Die Striche liegen lückenlos
 * nebeneinander, alle gleich stark, aber jeder unterschiedlich lang und an
 * einer anderen Stelle angesetzt. Dadurch franst die Fläche an beiden Kanten
 * aus, statt als sauberer Balken zu enden.
 *
 * Gebaut wird senkrecht, gedreht wird um 45 Grad, sodass die Striche von
 * oben rechts nach unten links laufen.
 *
 * Die Werte kommen aus einem Generator mit festem Startwert, damit Server und
 * Client dasselbe Bild rendern und es sich zwischen zwei Builds nicht ändert.
 */

const VIEW = 200;
/** Überstand, damit nach der Drehung keine leeren Ecken entstehen. */
const BLEED = 150;
/** Strichstärke. Die Bahnen stoßen ohne Zwischenraum aneinander. */
const STROKE = 3;

function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function buildBars() {
  const random = seeded(19_9394);
  const bars: { x: number; y: number; h: number }[] = [];
  const from = -BLEED;
  const to = VIEW + BLEED;
  const span = to - from;

  for (let x = from; x < to; x += STROKE) {
    // Weite Spanne, damit genug Enden im sichtbaren Bereich liegen –
    // sonst laufen alle Striche durch und die Fläche wirkt wieder massiv.
    const length = span * (0.12 + random() * 0.58);
    const start = from + random() * (span - length);
    bars.push({ x, y: start, h: length });
  }

  return bars;
}

const BARS = buildBars();

export function JerseyGraphic({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none", className)}
    >
      {/* Positive Drehung: die Striche laufen von oben rechts nach unten links. */}
      <g fill="currentColor" transform={`rotate(45 ${VIEW / 2} ${VIEW / 2})`}>
        {BARS.map((bar, index) => (
          <rect key={index} x={bar.x} y={bar.y} width={STROKE} height={bar.h} />
        ))}
      </g>
    </svg>
  );
}
