"use client";

import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/sections";
import { useActiveSection } from "@/hooks/use-active-section";
import { contact } from "@/data/profile";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  // A single passive listener is cheaper than watching every section, and it
  // keeps the highlight in sync with anchor jumps too.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Firdaus Ravi, back to top"
        >
          <span className="grid size-8 place-items-center border border-foreground bg-foreground font-mono text-xs font-semibold text-background transition-colors group-hover:bg-background group-hover:text-foreground">
            FR
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            FIRDAUS RAVI
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[current]:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={`mailto:${contact.email}`} aria-label="Email me to get in touch">
              Let&apos;s talk
            </a>
          </Button>
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </Button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? "true" : undefined}
                className="flex items-center justify-between border-b border-border py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground aria-[current]:text-foreground"
              >
                {item.label}
                <span className="font-mono text-xs text-ink-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
            <Button asChild className="mt-4 w-full">
              <a href={`mailto:${contact.email}`}>Let&apos;s talk</a>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

