import { cn } from "@/lib/utils";

/**
 * Die schwarze Grafik des Heimtrikots 1993/94.
 *
 * Nike hatte da keine gleichmäßigen Streifen draufgedruckt, sondern eine
 * zerrissene Grafik, die über Schulter und Ärmel lief: Balken in
 * unterschiedlicher Länge und Stärke, mit Lücken dazwischen. Genau das
 * bildet das hier nach – Balken werden vertikal erzeugt und anschließend
 * um 45 Grad gedreht.
 *
 * Die Werte kommen aus einem Generator mit festem Startwert, damit Server
 * und Client dasselbe Bild rendern und es sich zwischen zwei Aufrufen nicht
 * verändert.
 */

const VIEW = 200;
/** Überstand, damit nach der Drehung keine leeren Ecken entstehen. */
const BLEED = 140;

function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function buildBars() {
  const random = seeded(19_9394);
  const bars: { x: number; y: number; w: number; h: number }[] = [];
  const from = -BLEED;
  const to = VIEW + BLEED;

  for (let x = from; x < to; ) {
    const width = 3 + random() * 7;
    // Manche Bahnen bleiben leer, sonst wirkt es wieder wie ein Raster.
    if (random() > 0.18) {
      const segments = 1 + Math.floor(random() * 3);
      let y = from + random() * 90;
      for (let i = 0; i < segments && y < to; i += 1) {
        const height = 28 + random() * 150;
        bars.push({ x, y, w: width, h: height });
        y += height + 20 + random() * 120;
      }
    }
    x += width + 4 + random() * 13;
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
      <g fill="currentColor" transform={`rotate(-45 ${VIEW / 2} ${VIEW / 2})`}>
        {BARS.map((bar, index) => (
          <rect
            key={index}
            x={bar.x}
            y={bar.y}
            width={bar.w}
            height={bar.h}
          />
        ))}
      </g>
    </svg>
  );
}
