"use client";

import { useSyncExternalStore } from "react";

import { DEFAULT_KIT, KIT_STORAGE_KEY, KITS, type KitId } from "@/lib/kits";
import { cn } from "@/lib/utils";

/**
 * Steht da, wo sonst der Hell/Dunkel-Schalter sitzt. Statt Helligkeit
 * wählt man hier das Trikot: Heim oder Auswärts, Saison 1993/94.
 *
 * Die Wahrheit steht im data-kit am <html> – gesetzt wird sie schon vom
 * Inline-Skript im Layout, damit beim Laden nichts aufblitzt. Der Schalter
 * liest dieses Attribut, statt einen zweiten Zustand danebenzustellen.
 */

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-kit"],
  });
  return () => observer.disconnect();
}

function readKit(): KitId {
  const value = document.documentElement.getAttribute("data-kit");
  return value === "auswaerts" || value === "heim" ? value : DEFAULT_KIT;
}

export function KitToggle({ className }: { className?: string }) {
  const kit = useSyncExternalStore(subscribe, readKit, () => DEFAULT_KIT);

  function choose(next: KitId) {
    document.documentElement.setAttribute("data-kit", next);
    try {
      window.localStorage.setItem(KIT_STORAGE_KEY, next);
    } catch {
      // Privates Fenster oder blockierter Speicher: dann eben nur für diesen Besuch.
    }
  }

  return (
    <div
      role="group"
      aria-label="Trikot wählen"
      className={cn("flex items-center gap-1 border border-border p-0.5", className)}
    >
      {KITS.map((option) => {
        const active = kit === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => choose(option.id)}
            aria-pressed={active}
            title={option.description}
            className={cn(
              "flex items-center gap-1.5 px-2 py-1 font-display text-xs font-semibold tracking-widest uppercase transition-colors",
              active ? "bg-bvb text-bvb-ink" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span
              aria-hidden
              className="size-2 shrink-0"
              style={{ backgroundColor: option.swatch }}
            />
            {option.label}
            <span className="font-mono text-[9px] tracking-normal opacity-60">
              {option.year}
            </span>
          </button>
        );
      })}
    </div>
  );
}
