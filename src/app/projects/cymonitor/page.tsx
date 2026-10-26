import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cyMonitor } from "@/data/links";

export const metadata = {
  title: "CYMonitor — ESP32 Telemetry Display Case Study",
  description:
    "How a 3,100-line ESP32 firmware renders live CPU, GPU and RAM telemetry on a 3.5-inch touch display by filtering a 120 KB sensor tree before it ever reaches the heap — plus the browser recreation built from the same palettes.",
  openGraph: {
    title: "CYMonitor — ESP32 Telemetry Display",
    description:
      "Embedded firmware, a browser recreation and a container image for a touch-first PC telemetry display.",
    images: ["/projects/cymonitor/preview.png"],
    type: "article",
  },
};

const budget = [
  {
    constraint: "LibreHardwareMonitor tree",
    value: "~120 KB JSON",
    why: "Larger than the usable ESP32 heap, so it cannot be buffered and parsed whole.",
  },
  {
    constraint: "JSON nesting limit",
    value: "12 levels",
    why: "Bounds ArduinoJson document depth before any allocation happens.",
  },
  {
    constraint: "JSON filter",
    value: "applied pre-parse",
    why: "Drops unused fields so only sensor names, types and values are materialized.",
  },
  {
    constraint: "Fetch task",
    value: "core 0 / 12 KB stack",
    why: "Keeps networking off the render loop and out of the UI stack budget.",
  },
  {
    constraint: "HTTP timeouts",
    value: "4 s / 10 s",
    why: "A dropped link degrades to a stale state instead of blocking the screen.",
  },
  {
    constraint: "Polling",
    value: "400 ms after each request",
    why: "Caps request rate while the hardware view is active.",
  },
  {
    constraint: "History",
    value: "1 Hz, 40 samples",
    why: "Sparklines cost a fixed ring buffer, not a growing array.",
  },
  {
    constraint: "Firmware",
    value: "~1.1 MB",
    why: "Fits the huge_app partition with room for profiles and themes.",
  },
];

const surfaces = [
  {
    title: "Monitor",
    body: "CPU and GPU cards with temperature, load, package power or fan RPM, GPU hotspot and VRAM, a RAM bar, 40-sample sparklines and trend badges.",
  },
  {
    title: "Wi-Fi diagnostics",
    body: "Signal percentage, RSSI, channel, SSID, IP, gateway, subnet, MAC and DNS, plus TCP latency probes to the gateway and a selectable target.",
  },
  {
    title: "Clock and Pomodoro",
    body: "NTP standby clock with a seconds meter, plus 10/15/25/45-minute presets, a 24-block progress wave and a PWM backlight alarm.",
  },
  {
    title: "Animation and settings",
    body: "Matrix rain, a 3D starfield and a bouncing sprite with a measured-FPS HUD; six saved Wi-Fi profiles and 18 RGB565 themes in NVS.",
  },
];

export default function CyMonitorCaseStudy() {
  const stack = [
    "C++",
    "ESP32",
    "Arduino",
    "PlatformIO",
    "TFT_eSPI",
    "ArduinoJson",
    "WiFiManager",
    "JavaScript",
    "Docker",
    "Nginx",
  ];

  return (
    <div className="paper-noise min-h-screen pb-24">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/#work"
            className="flex items-center gap-2 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>←</span> Back to Selected Work
          </Link>
          <Badge variant="outline" className="font-mono text-[0.65rem] uppercase tracking-wider">
            Embedded Case Study
          </Badge>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-12 sm:px-8">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Firmware, Browser Recreation, Container Packaging
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            CYMonitor: putting a PC&apos;s vitals on a 3.5-inch desk display
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A touch-first ESP32-3248S035 dashboard that polls{" "}
            <strong>LibreHardwareMonitor</strong> over the local network and renders CPU, GPU
            and RAM telemetry on a 480 × 320 TFT. The same interface is rebuilt for the
            browser, and the whole experience ships as an Nginx container.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((item) => (
              <Badge key={item} variant="secondary" className="font-mono text-[0.7rem]">
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={cyMonitor.app}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded bg-foreground px-4 py-2 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
            >
              Open Live Demo <span className="text-[10px]">↗</span>
            </a>
            <a
              href={cyMonitor.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-border bg-background px-4 py-2 font-mono text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              Source on GitHub <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

        <section className="mt-16 space-y-6">
          <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">
            01. The problem
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Telemetry hides behind windows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Checking whether a machine is thermal-throttling means alt-tabbing into a
                  monitoring app. On a desk with a secondary screen, that is exactly the
                  information you want always visible and never focused.
                </p>
                <p>
                  The board has no cloud path and no account system: it reads one JSON
                  endpoint on the LAN and nothing else.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">An ESP32 is not a dashboard host</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  LibreHardwareMonitor&apos;s full tree is roughly <strong>120 KB</strong> of
                  JSON. Parsing it whole is not an option on a microcontroller, and a naive
                  poll blocks the render loop while the network stalls.
                </p>
                <p>
                  Everything in the firmware is therefore designed around a budget rather
                  than around a feature list.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">
            02. Architecture
          </h2>
          <pre className="overflow-x-auto rounded border border-border bg-muted/30 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
{`LibreHardwareMonitor on a Windows PC
  └─ Options → Remote Web Server → Run
       └─ http://<pc-ip>:8085/data.json
              │
              │  Wi-Fi / HTTP
              ▼
ESP32-3248S035
  ├─ httpFetchTask (core 0, priority 1, 12 KB stack)
  │    └─ JSON filter → sensor scan → LiveData snapshot
  ├─ NVS (Preferences)
  │    └─ theme, six Wi-Fi profiles, per-profile endpoint
  └─ TFT_eSPI 480 × 320
       ├─ Monitor
       ├─ Clock / Pomodoro
       ├─ Animation
       └─ Settings`}
          </pre>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The fetch task only runs while the Monitor page is on its hardware sub-page. It
            applies a compiled JSON filter and a nesting limit before scanning, then commits
            an immutable snapshot that the UI reads. Sensor selection is heuristic: candidates
            are scored by hardware type, sensor type and label, so an unfamiliar motherboard
            degrades to a missing value instead of a wrong one.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">
            03. Designing to the budget
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The drawing code is the easy part. These are the numbers that shaped the design.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-border text-left text-sm font-mono">
              <thead className="bg-muted text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="border-b border-border p-3">Constraint</th>
                  <th className="border-b border-border p-3">Value</th>
                  <th className="border-b border-border p-3">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {budget.map((row) => (
                  <tr key={row.constraint} className="hover:bg-muted/10">
                    <td className="p-3 text-foreground">{row.constraint}</td>
                    <td className="p-3 font-semibold text-foreground">{row.value}</td>
                    <td className="p-3 font-sans text-muted-foreground">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Two product decisions follow directly: the UI shows an explicit stale/offline
            state rather than inventing values, and every panel degrades to <code>--</code>{" "}
            when a sensor is missing so the layout never shifts.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">
            04. Screens
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {surfaces.map((surface) => (
              <Card key={surface.title} className="border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="font-mono text-sm uppercase tracking-wider">
                    {surface.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {surface.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">
            05. A second implementation, on purpose
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The browser build is not a separate dashboard — it is the same four screens, built
            with no framework and no build step, sharing the firmware&apos;s 18 RGB565 palettes
            through a single data file. Rebuilding the interface in a second medium forced a
            clean split between rendering and data acquisition, which is what made the
            dependency-free release possible.
          </p>
          <div className="overflow-hidden rounded border border-border">
            <Image
              src="/projects/cymonitor/preview.png"
              alt="CYMonitor landing page with the embedded 480x320 simulator"
              width={1366}
              height={900}
              className="h-auto w-full"
            />
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            The hosted demo runs generated telemetry. Live sensors require a local
            LibreHardwareMonitor instance.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="overflow-hidden rounded border border-border">
                <Image
                  src="/projects/cymonitor/neo-brutalist.png"
                  alt="Neo Brutalist style with the Dracula palette"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Neo Brutalist style with the DRACULA palette. Style and palette are independent.
              </p>
            </div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Why the demo is not live</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  GitHub Pages serves over HTTPS and LibreHardwareMonitor serves HTTP, so a
                  browser blocks the request as mixed content. The public demo therefore runs
                  generated telemetry and says so.
                </p>
                <p>
                  For a real feed, the Docker image exposes a same-origin proxy at{" "}
                  <code>/lhm/data.json</code>. Pointing the app at it removes CORS and
                  mixed-content handling entirely.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="border-b border-border pb-3 text-2xl font-semibold tracking-tight">
            06. What I would do next
          </h2>
          <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-mono text-xs text-foreground">01</span>
              <span>
                Derive the setup-access-point password per device instead of a shared build
                default.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-xs text-foreground">02</span>
              <span>
                Split <code>main.cpp</code> into sensor, render and storage modules once a
                second board variant needs support.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-xs text-foreground">03</span>
              <span>
                Swap the heuristic sensor scorer for a per-motherboard profile table after
                collecting enough real-world reports.
              </span>
            </li>
          </ul>
        </section>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs font-mono text-muted-foreground sm:flex-row">
          <div className="flex gap-4">
            <a
              href={cyMonitor.repo}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-foreground"
            >
              Repository
            </a>
            <a
              href={cyMonitor.site}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-foreground"
            >
              Project site
            </a>
            <Link href="/#work" className="underline hover:text-foreground">
              All work
            </Link>
          </div>
          <span>ESP32-3248S035 · 480 × 320 · fully local</span>
        </footer>
      </main>
    </div>
  );
}
