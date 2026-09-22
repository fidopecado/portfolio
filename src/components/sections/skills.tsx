import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { languages, skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-card/50"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          id="skills"
          index="04"
          eyebrow="Technical Stack"
          title="Practical toolkit spanning operations, development, and AI."
          description="Technologies and platforms actively used across IT field support, production web engineering, and machine learning workflows."
        />
        
        <div className="grid gap-x-10 gap-y-10 md:ml-48 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="border border-border bg-background p-6">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="outline" className="border-border bg-card px-3 py-1 text-xs font-medium">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 md:ml-48 md:w-[calc(100%-12rem)]" />

        <div className="md:ml-48">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Language Proficiencies
          </p>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((language) => (
              <div key={language.name} className="border border-border bg-background p-4">
                <dt className="font-semibold text-foreground text-sm">
                  {language.name}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {language.level}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
