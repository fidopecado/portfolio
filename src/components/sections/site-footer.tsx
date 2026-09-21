import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-ink-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Firdaus Ravi Faizzani</span>
        <span>Built with care / Semarang, ID</span>
        <a href="#top" className="group inline-flex items-center gap-2 hover:text-background">
          Back to top <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </footer>
  );
}
