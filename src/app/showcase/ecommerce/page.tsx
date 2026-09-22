import Link from "next/link";

export const metadata = {
  title: "Full-Stack MERN E-Commerce Platform — Interactive Demo",
  description: "Interactive static demo showcase of the MERN E-Commerce platform.",
};

export default function EcommerceShowcasePage() {
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
          <span className="text-foreground font-semibold">MERN E-Commerce Platform — Interactive Demo</span>
        </div>
        <div className="hidden sm:block text-xs text-muted-foreground">
          Static Client-Side Showcase
        </div>
      </div>
      
      {/* Fullscreen Iframe */}
      <div className="flex-1 w-full relative">
        <iframe
          src="/showcase/ecommerce/index.html"
          className="w-full h-full border-0 absolute inset-0"
          title="Full-Stack MERN E-Commerce Platform Demo"
        />
      </div>
    </main>
  );
}

