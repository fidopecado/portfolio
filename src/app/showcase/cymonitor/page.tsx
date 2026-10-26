import Link from "next/link";
import { cyMonitor } from "@/data/links";

export const metadata = {
  title: "CYMonitor — ESP32 Desk Telemetry Display",
  description:
    "Interactive browser build of the CYMonitor ESP32 interface: hardware telemetry, Wi-Fi diagnostics, clock, Pomodoro, animations and 18 themes.",
};

export default function CyMonitorShowcasePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Top Header Bar */}
      <div className="z-10 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-6 py-3 text-sm font-mono text-muted-foreground shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/#work"
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-foreground"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-border">|</span>
          <span className="font-semibold text-foreground">
            CYMonitor — Browser Build of the ESP32 Interface
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <a
            href={cyMonitor.site}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-foreground px-3 py-1.5 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
          >
            <span>Open Project Page</span>
            <span>↗</span>
          </a>
          <a
            href={cyMonitor.demo}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Fullscreen ↗
          </a>
          <a
            href={cyMonitor.repo}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>

      <p className="border-b border-border bg-muted/40 px-6 py-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
        Demo runs on generated telemetry. Live sensor data requires a local
        LibreHardwareMonitor instance — see the case study.
      </p>

      {/* Fullscreen Iframe */}
      <div className="relative w-full flex-1 bg-muted/20">
        <iframe
          src={cyMonitor.demo}
          className="absolute inset-0 h-full w-full border-0"
          title="CYMonitor interactive ESP32 interface"
          allow="clipboard-write"
        />
      </div>
    </main>
  );
}
