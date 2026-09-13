import { JerseyGraphic } from "@/components/site/jersey-graphic";
import { cn } from "@/lib/utils";

/**
 * Ein schmaler Ausschnitt der Trikotgrafik als Band zwischen den Sektionen.
 * Weil die Balken unterschiedlich lang und stark sind, sieht jedes Band
 * anders aus als ein sauber gezogener Streifen – so wie das Trikot eben auch.
 */
export function ChevronBand({
  className,
  tone = "onYellow",
  height = 10,
}: {
  className?: string;
  tone?: "onYellow" | "onDark";
  height?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full overflow-hidden",
        tone === "onYellow" ? "bg-bvb text-bvb-ink" : "bg-bvb-ink text-bvb",
        className,
      )}
      style={{ height }}
    >
      <JerseyGraphic className="absolute inset-0 size-full" />
    </div>
  );
}

/** Der V-Kragen des Trikots, als Trennelement über einer Sektion. */
export function CollarNotch({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 24"
      preserveAspectRatio="none"
      className={cn("h-6 w-full text-bvb", className)}
    >
      <path d="M0 0h44l16 20 16-20h44v24H0z" fill="currentColor" />
    </svg>
  );
}

/** Dezenter Trikotstoff-Hintergrund. */
export function WeaveBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 jersey-weave opacity-60", className)}
    />
  );
}
