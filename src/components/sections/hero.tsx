import {
  ArrowDownRight,
  CircleDot,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <section
        className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-32"
        aria-labelledby="hero-title"
      >
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <CircleDot className="size-3" />
              Available for technical conversations
            </div>
            <h1
              id="hero-title"
              className="max-w-5xl text-balance text-[clamp(3.5rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.08em]"
            >
              Firdaus
              <br />
              Ravi<span className="text-ink-400">.</span>
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start">
              <p className="font-mono text-xs uppercase leading-6 tracking-[0.13em] text-muted-foreground sm:w-44 sm:shrink-0">
                IT field support
                <br />
                Informatics graduate
              </p>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I keep people, systems, and operations moving — from
                plant-floor infrastructure and endpoint support to web
                applications and applied AI.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#work">
                  Explore selected work <ArrowDownRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/Firdaus-Ravi-Faizzani-CV.pdf" download>
                  Download CV <Download />
                </a>
              </Button>
            </div>
          </div>

          <aside
            className="border-l border-border pl-5 lg:mb-2"
            aria-label="Contact details"
          >
            <p className="mb-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Contact / 00
            </p>
            <div className="grid gap-4 text-sm">
              <a
                className="flex items-start gap-3 hover:underline"
                href="mailto:firdausravi33@gmail.com"
              >
                <Mail className="mt-0.5 size-4 text-muted-foreground" />
                <span className="break-all">firdausravi33@gmail.com</span>
              </a>
              <a
                className="flex items-start gap-3 hover:underline"
                href="tel:+6285786683002"
              >
                <Phone className="mt-0.5 size-4 text-muted-foreground" />
                <span>+62 857 8668 3002</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <span>
                  Semarang, Central Java
                  <br />
                  Indonesia
                </span>
              </div>
            </div>
            <p className="mt-10 border-t border-border pt-4 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-muted-foreground">
              Infrastructure · Applications · Intelligence
            </p>
          </aside>
        </div>
      </section>

      <div className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-3 sm:px-8">
          <Metric value="100+" label="plant personnel supported" />
          <Metric value="3" label="technical disciplines in practice" />
          <Metric value="3.69" label="/ 4.00 Informatics GPA" />
        </div>
      </div>
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-3xl font-semibold tracking-[-0.06em]">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
