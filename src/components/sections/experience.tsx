import { CheckIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-card/50"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          id="experience"
          index="02"
          eyebrow="Experience"
          title="Operational context, hands-on ownership."
          description="Track record spanning plant IT field support engineering, generative AI model evaluation, and full-stack web engineering."
        />
        <ol className="md:ml-48">
          {experience.map((item) => (
            <li
              key={item.company}
              className="grid gap-6 border-t border-border py-10 transition-colors first:border-t-0 md:grid-cols-[11rem_1fr] md:gap-10"
            >
              <div className="font-mono text-xs font-medium leading-5 text-muted-foreground">
                {item.period}
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  {item.current ? (
                    <Badge variant="outline" className="border-foreground/30 bg-background font-mono text-[0.65rem] uppercase tracking-wider">
                      <span aria-hidden="true" className="mr-1.5 size-1.5 rounded-full bg-foreground" />
                      Current Role
                    </Badge>
                  ) : null}
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{item.summary}</p>
                <ul className="mt-5 grid max-w-3xl gap-3 text-sm leading-6 text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 size-4 shrink-0 text-foreground" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="px-2.5 py-1 text-[0.7rem]">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
