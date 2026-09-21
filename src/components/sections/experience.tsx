import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-card/50" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading index="02" eyebrow="Experience" title="Operational context, hands-on ownership." description="A timeline of roles spanning plant IT, AI data work, and web development." />
        <div className="md:ml-48">
          {experience.map((item) => (
            <article key={item.company} className="grid gap-6 border-t border-border py-8 md:grid-cols-[10rem_1fr] md:gap-10">
              <div className="font-mono text-xs leading-5 text-muted-foreground">{item.period}</div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div><h3 className="text-xl font-semibold tracking-tight">{item.role}</h3><p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{item.company} · {item.location}</p></div>
                  {item.current ? <Badge variant="outline"><span className="mr-1.5 size-1.5 rounded-full bg-ink-700" /> Current</Badge> : null}
                </div>
                <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{item.summary}</p>
                <ul className="mt-5 grid max-w-3xl gap-3 text-sm leading-6 text-muted-foreground">
                  {item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-ink-500" />{highlight}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">{item.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
