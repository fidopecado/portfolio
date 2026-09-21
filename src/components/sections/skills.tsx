import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-card/50" aria-labelledby="toolkit-title">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading index="04" eyebrow="Toolkit" title="A practical stack, from endpoint to experiment." />
        <div className="grid gap-x-10 gap-y-12 md:ml-48 md:grid-cols-2">
          {skillGroups.map((group) => <div key={group.label}><h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{group.label}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <Badge key={item} variant="outline" className="bg-background px-3 py-1.5 text-xs">{item}</Badge>)}</div></div>)}
        </div>
        <Separator className="my-12 md:ml-48 md:w-[calc(100%-12rem)]" />
        <div className="grid gap-8 md:ml-48 md:grid-cols-3"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Indonesian</p><p className="mt-2">Native</p></div><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Javanese</p><p className="mt-2">Native</p></div><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">English / Spanish</p><p className="mt-2">C1 advanced / Beginner</p></div></div>
      </div>
    </section>
  );
}
