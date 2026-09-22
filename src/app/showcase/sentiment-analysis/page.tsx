import Link from "next/link";

export const metadata = {
  title: "Indonesian TikTok Comments Sentiment Analysis — Streamlit App",
  description: "Interactive Streamlit sentiment analysis dashboard for Indonesian social media comments.",
};

export default function SentimentAnalysisShowcasePage() {
  // Replace STREAMLIT_URL with your live Streamlit Cloud app URL once deployed
  const STREAMLIT_URL = process.env.NEXT_PUBLIC_STREAMLIT_SENTIMENT_URL || "";

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
          <span className="text-foreground font-semibold">Indonesian TikTok Sentiment Analysis — Streamlit Dashboard</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href="https://github.com/FirdausRavi/Indonesian-Tiktok-Comments-Sentiment-Analysis"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground underline"
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>
      
      {/* Fullscreen Iframe or Streamlit Link */}
      <div className="flex-1 w-full relative bg-muted/20">
        {STREAMLIT_URL ? (
          <iframe
            src={STREAMLIT_URL}
            className="w-full h-full border-0 absolute inset-0"
            title="Indonesian Social Media Comment Sentiment Analysis Dashboard"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 max-w-md mx-auto my-auto">
            <div className="text-4xl">📊</div>
            <h2 className="text-xl font-bold font-mono">Streamlit App Deployment Ready</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The project repository at <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">D:\Past Project\Indonesian-Tiktok-Comments-Sentiment-Analysis</code> has been prepared with <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">requirements.txt</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">.streamlit/config.toml</code>.
            </p>
            <p className="text-xs text-muted-foreground">
              After deploying to Streamlit Community Cloud, set your app URL in <code className="bg-muted px-1.5 py-0.5 rounded font-mono">NEXT_PUBLIC_STREAMLIT_SENTIMENT_URL</code> or paste it directly in this page to embed it live inside your portfolio.
            </p>
            <a
              href="https://github.com/FirdausRavi/Indonesian-Tiktok-Comments-Sentiment-Analysis"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-foreground px-4 py-2 font-mono text-xs font-medium text-background hover:opacity-90 transition-opacity"
            >
              <span>View GitHub Repository</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

