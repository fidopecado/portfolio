import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { rIndonesia } from "@/data/links";

export const metadata = {
  title: "r/indonesia Analytics — 728K Comments in a 1 GB Budget",
  description:
    "Case study: a hosted Streamlit dashboard over 12,976 r/indonesia threads and 728,522 comments, its sentiment layer, and the load-path rewrite that cut the peak from 1.42 GB to 712 MB.",
};

const stack = [
  "Python",
  "Streamlit",
  "pandas",
  "PyArrow",
  "Plotly",
  "HuggingFace",
  "LLM Labelling",
  "Docker",
];

const scope = [
  { label: "Threads", value: "12,976", note: "27 Dec 2025 → 02 Oct 2026" },
  { label: "Comments", value: "728,522", note: "726,031 unique ids" },
  { label: "Commenters", value: "24,451", note: "2,642 thread authors" },
  { label: "Flairs", value: "35", note: "rare flairs excluded by default" },
];

const perLabel = [
  { label: "negative", support: "3,280", p: "0.414", r: "0.856", f1: "0.558" },
  { label: "neutral", support: "5,639", p: "0.757", r: "0.211", f1: "0.330" },
  { label: "positive", support: "1,081", p: "0.338", r: "0.515", f1: "0.409" },
];

const calibration = [
  { label: "negative", observed: "67.5%", corrected: "30.2%", delta: "−37.3 pts" },
  { label: "neutral", observed: "16.1%", corrected: "59.6%", delta: "+43.5 pts" },
  { label: "positive", observed: "16.4%", corrected: "10.1%", delta: "−6.3 pts" },
];

const memory = [
  { phase: "Frames loaded", before: "924 MB deep", after: "490 MB RSS" },
  { phase: "After sidebar filters", before: "—", after: "644 MB RSS" },
  { phase: "Worst page (Comments)", before: "1,423 MB RSS", after: "748 MB RSS" },
  { phase: "Peak for the whole session", before: "1,423 MB", after: "712 MB" },
];

export default function IndonesianSubredditCaseStudy() {
  return (
    <div className="paper-noise min-h-screen pb-24">
      {/* Top Bar */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/#work"
            className="font-mono text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to Selected Work
          </Link>
          <Badge variant="outline" className="font-mono text-[0.65rem] uppercase tracking-wider">
            Data Product Case Study
          </Badge>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-12 sm:px-8">
        {/* Header Section */}
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Streamlit · pandas · Sentiment Analysis
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Every r/indonesia comment in one dashboard, inside a 1 GB budget
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A ten-month scrape of r/indonesia — 12,976 threads and 728,522 comments — made
            filterable in the browser, with model-generated sentiment labels, an LLM-labelled
            reference sample, and a prevalence correction that keeps the raw model output from
            being read as ground truth.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((item) => (
              <Badge key={item} variant="secondary" className="font-mono text-[0.7rem]">
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4 font-mono text-xs">
            <a
              href={rIndonesia.app}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded bg-foreground px-3 py-1.5 font-medium text-background hover:opacity-90 transition-opacity"
            >
              Open the live dashboard <span>↗</span>
            </a>
            <a
              href={rIndonesia.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              Source on GitHub <span>↗</span>
            </a>
          </div>
        </div>

        {/* Scope */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            01. Scope
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item) => (
              <Card key={item.label} className="border-border">
                <CardContent className="p-5 space-y-1">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold tracking-tight text-foreground">
                    {item.value}
                  </p>
                  <p className="font-mono text-[0.7rem] text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The corpus is a snapshot, not a feed: nothing is fetched at runtime. Every timestamp
            is converted to WIB (UTC+7) before aggregation, because the subreddit&apos;s activity
            curve is meaningless in UTC.
          </p>
        </section>

        {/* Pipeline */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            02. Pipeline
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Raw CSVs are a one-time input. A build step normalises them into a parquet cache —
            threads, comments, the comment bodies, sentiment artifacts and a provenance file — and
            the dashboard only ever reads that cache. Nothing in the pipeline runs on the host, so
            the app boots from a cold clone in seconds.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Reconciled counts</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Reddit&apos;s <code className="font-mono text-xs">num_comments</code> is a
                  scrape-time counter and drifts from reality. The build joins the thread export
                  against the comment export to produce{" "}
                  <code className="font-mono text-xs">total_comments_actual</code>, and the UI shows
                  both so the difference stays visible instead of being silently &quot;fixed&quot;.
                </p>
                <p>
                  Duplicate thread ids across dataset versions are collapsed by keeping the highest
                  version; the ~2,500 repeated comment ids are deliberately kept and flagged, since
                  deduplicating them would quietly change every count on the page.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">State lives in the URL</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>
                  Date range, flair set, score bounds, flags, post type and language are serialised
                  into query parameters, so any filtered view is a shareable link. Reloading it
                  restores the exact view — the same mechanism the portfolio&apos;s iframe uses.
                </p>
                <p>
                  Eight views share one filter set: overview, threads, comments, authors, flairs,
                  timing, sentiment and methodology. Each filter change re-aggregates the whole
                  corpus live; the few pre-computed tables are labelled as static snapshots.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sentiment */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            03. The sentiment layer, and how wrong it is
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A transformer classifier labels 678,522 comments (~93% of the unique corpus), with a
            language router sending 590,756 to the Indonesian path and 87,766 to English. It is
            fast and it covers almost everything — and it is not the reference. A 10,000-comment
            sample labelled by an LLM under a written rubric is.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-5 space-y-1">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Labelled
                </p>
                <p className="text-2xl font-semibold">678,522</p>
                <p className="font-mono text-[0.7rem] text-muted-foreground">
                  93% of unique comments
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-5 space-y-1">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Agreement with LLM
                </p>
                <p className="text-2xl font-semibold">45.5%</p>
                <p className="font-mono text-[0.7rem] text-muted-foreground">
                  Cohen&apos;s κ = 0.19
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-5 space-y-1">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Mean confidence
                </p>
                <p className="text-2xl font-semibold">0.835</p>
                <p className="font-mono text-[0.7rem] text-muted-foreground">
                  14.2% below 0.60
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              A. Per-class quality against the LLM reference (N = 10,000)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-mono border border-border">
                <thead className="bg-muted text-muted-foreground uppercase text-[0.7rem] tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-border">Label</th>
                    <th className="p-3 border-b border-border">Support</th>
                    <th className="p-3 border-b border-border">Precision</th>
                    <th className="p-3 border-b border-border">Recall</th>
                    <th className="p-3 border-b border-border">F1</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {perLabel.map((row) => (
                    <tr key={row.label} className="hover:bg-muted/10">
                      <td className="p-3">{row.label}</td>
                      <td className="p-3 text-muted-foreground">{row.support}</td>
                      <td className="p-3">{row.p}</td>
                      <td className="p-3">{row.r}</td>
                      <td className="p-3 font-semibold text-foreground">{row.f1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The shape of the failure is specific: negative recall is 0.86 while neutral recall is
              0.21. The model is not noisy in general — it collapses the large neutral class into
              negative, which is exactly the error that makes a headline &quot;67% of r/indonesia
              is negative&quot; chart wrong.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-medium">B. Correcting prevalence instead of hiding it</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The 10K confusion matrix gives a transition matrix from reference label to model
              label. A least-squares solve against the full-corpus label counts recovers an
              estimated true prevalence, which is what the dashboard shows next to the observed
              numbers — along with the method, so it can be argued with.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-mono border border-border">
                <thead className="bg-muted text-muted-foreground uppercase text-[0.7rem] tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-border">Label</th>
                    <th className="p-3 border-b border-border">Model output</th>
                    <th className="p-3 border-b border-border">Corrected estimate</th>
                    <th className="p-3 border-b border-border">Shift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {calibration.map((row) => (
                    <tr key={row.label} className="hover:bg-muted/10">
                      <td className="p-3">{row.label}</td>
                      <td className="p-3 text-muted-foreground">{row.observed}</td>
                      <td className="p-3 font-semibold text-foreground">{row.corrected}</td>
                      <td className="p-3 text-muted-foreground">{row.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Memory */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            04. Making it fit in 1 GB
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Streamlit Community Cloud gives each app 1 GB of RAM. The first working version peaked
            at 1.42 GB, so it was a local-only toy. Fixing that meant measuring the real server —
            sampling the interpreter&apos;s working set while a headless browser drove every page —
            rather than trusting <code className="font-mono text-xs">memory_usage()</code>, which
            understated the process by more than 300 MB.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-mono border border-border">
              <thead className="bg-muted text-muted-foreground uppercase text-[0.7rem] tracking-wider">
                <tr>
                  <th className="p-3 border-b border-border">Phase</th>
                  <th className="p-3 border-b border-border">Before</th>
                  <th className="p-3 border-b border-border">After</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {memory.map((row) => (
                  <tr key={row.phase} className="hover:bg-muted/10">
                    <td className="p-3">{row.phase}</td>
                    <td className="p-3 text-muted-foreground">{row.before}</td>
                    <td className="p-3 font-semibold text-foreground">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            {[
              "Arrow-backed text: strings live in contiguous buffers instead of one Python object per value, taking the comments frame from 337 MB to 104 MB, with non-text columns cast back to numpy so every existing pandas and plotly path is unchanged.",
              "cache_resource instead of cache_data, which otherwise keeps a pickled twin of every cached frame next to the live one.",
              "Comment bodies are never resident: only the 30 comments on screen are read, from a file sorted by comment id in 2,000-row groups so the filter skips almost every group — 48 ms, ~0 MB.",
              "Seven columns no page reads are dropped at load, and the volume and heatmap aggregations build two-column stand-ins instead of copying all sixteen columns to touch two.",
              "Score and word-count histograms are pre-binned with numpy, so plotly receives 60 bars instead of 705k values.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Caveats */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-3">
            05. What the dashboard says about its own limits
          </h2>
          <Card className="border-border">
            <CardContent className="p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                A methodology tab documents the scrape window, the filter semantics, the static
                aggregates, the model coverage gap (~7% of unique comments) and the calibration
                method. The corpus run covers 678,522 of 726,031 unique comments because duplicate
                bodies and one-word replies are excluded before classification — a number that is
                stated on the page rather than smoothed over.
              </p>
              <p>
                The point of the project was not to produce a sentiment chart. It was to see how far
                a dataset can be pushed inside a hosting budget without letting the budget, or the
                model, quietly rewrite what the data says.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={rIndonesia.app}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-foreground"
            >
              Live dashboard ↗
            </a>
            <span className="text-border">|</span>
            <a
              href={rIndonesia.repo}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-foreground"
            >
              Source ↗
            </a>
          </div>
          <Link href="/#work" className="hover:text-foreground underline">
            Return to Main Portfolio Work Section
          </Link>
        </footer>
      </main>
    </div>
  );
}
