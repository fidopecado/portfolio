import Link from "next/link";

export const metadata = {
  title: "Indonesian TikTok Comments Sentiment Analysis — Streamlit App",
  description: "Interactive Streamlit sentiment analysis dashboard for Indonesian social media comments.",
};

export default function SentimentAnalysisShowcasePage() {
  const DIRECT_URL = "https://sentindo.streamlit.app/";
  // ?embed=true tells Streamlit Cloud to load in iframe mode without redirecting
  const EMBED_URL = "https://sentindo.streamlit.app/?embed=true";

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
          <span className="text-border">|</span>
          <span className="text-foreground font-semibold">Indonesian TikTok Sentiment Analysis — Streamlit Dashboard</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <a
            href={DIRECT_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-foreground px-3 py-1.5 font-mono text-xs font-medium text-background hover:opacity-90 transition-opacity"
          >
            <span>Open App Fullscreen</span>
            <span>↗</span>
          </a>
          <a
            href="https://github.com/fidopecado/Indonesian-Tiktok-Comments-Sentiment-Analysis"
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
          src={EMBED_URL}
          className="w-full h-full border-0 absolute inset-0"
          title="Indonesian Social Media Comment Sentiment Analysis Dashboard"
          allow="clipboard-write"
        />
      </div>
    </main>
  );
}
