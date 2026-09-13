import { cn } from "@/lib/utils";

/**
 * Das gleichmäßige Zickzack als schmales Band zwischen den Sektionen.
 * Hier ist die Regelmäßigkeit gewollt: Auf zehn Pixeln Höhe würde die
 * zerrissene Variante nur unruhig aussehen, statt nach Trikot.
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
        "w-full",
        tone === "onYellow" ? "bg-bvb jersey-chevron" : "bg-bvb-ink jersey-chevron-light",
        className,
      )}
      style={{ height }}
    />
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
