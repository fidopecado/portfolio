import Link from "next/link";

export default function LegitShowcasePage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-card text-sm font-mono text-muted-foreground z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/#work"
            className="hover:text-foreground transition-colors flex items-center gap-1.5 font-medium"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-border">|</span>
          <span className="text-foreground font-semibold">GITLEGIT Mochi — Company Profile Demo</span>
        </div>
        <div className="hidden sm:block text-xs text-muted-foreground">
          Static HTML/CSS Showcase
        </div>
      </div>
      
      {/* Fullscreen Iframe */}
      <div className="flex-1 w-full relative">
        <iframe
          src="/showcase/legit/index.html"
          className="w-full h-full border-0 absolute inset-0"
          title="GITLEGIT Mochi Business Company Profile"
        />
      </div>
    </main>
  );
}

