"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Brand } from "@/components/site/brand";
import { ChevronBand } from "@/components/site/jersey";
import { KitToggle } from "@/components/site/kit-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-bvb-ink/95 backdrop-blur supports-[backdrop-filter]:bg-bvb-ink/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Brand />

          <nav className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 font-display text-sm font-semibold tracking-widest uppercase transition-colors",
                  isActive(item.href)
                    ? "text-bvb"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <KitToggle className="ml-3" />
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menü öffnen">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border bg-bvb-ink">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-1 p-6 pt-14">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-border/60 py-4 font-display text-2xl font-bold tracking-wide uppercase",
                      isActive(item.href) ? "text-bvb" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-8">
                  <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                    Trikot
                  </p>
                  <KitToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ChevronBand height={8} />
    </header>
  );
}
