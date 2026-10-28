import Link from "next/link";

import { rIndonesia } from "@/data/links";

export const metadata = {
  title: "r/indonesia Analytics — Streamlit Dashboard",
  description:
    "Interactive dashboard over 12,976 r/indonesia threads and 728,522 comments, with sentiment labels, an LLM reference sample and a prevalence correction.",
};

export default function IndonesianSubredditShowcasePage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-border bg-card text-sm font-mono text-muted-foreground z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/#work"
            className="hover:text-foreground transition-colors flex items-center gap-1.5 font-medium"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <span className="text-foreground font-semibold hidden sm:inline">
            r/indonesia Analytics — Streamlit Dashboard
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <a
            href={rIndonesia.app}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-foreground px-3 py-1.5 font-mono text-xs font-medium text-background hover:opacity-90 transition-opacity"
          >
            <span>Open App Fullscreen</span>
            <span>↗</span>
          </a>
          <a
            href={rIndonesia.repo}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground underline px-1"
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>

      {/* Fullscreen Iframe */}
      <div className="flex-1 w-full relative bg-muted/20">
        <iframe
          src={rIndonesia.embed}
          className="w-full h-full border-0 absolute inset-0"
          title="r/indonesia Analytics Dashboard"
          allow="clipboard-write"
        />
      </div>
    </main>
  );
}
