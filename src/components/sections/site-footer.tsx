import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/links";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-ink-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Firdaus Ravi Faizzani</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-ink-500 underline-offset-4 transition-colors hover:text-background hover:decoration-background"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
          <span>Built with care / Semarang, ID</span>
        </div>
        <a href="#top" className="group inline-flex items-center gap-2 hover:text-background">
          Back to top <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </footer>
  );
}
