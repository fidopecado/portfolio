import { ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" aria-labelledby="selected-work-title">
      <SectionHeading index="03" eyebrow="Selected work" title="Projects that turn questions into working systems." description="A cross-section of web products, language-model experiments, computer vision, and practical business tools." />
      <div className="grid gap-4 md:ml-48 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.number} className={project.featured ? "md:col-span-2" : ""}>
            <CardHeader className="gap-5 border-b border-border p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-muted-foreground">{project.number} / {project.year}</span><ExternalLink className="size-4 text-muted-foreground" aria-hidden="true" /></div>
              <div><p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-muted-foreground">{project.type}</p><CardTitle className="mt-2 text-2xl tracking-[-0.04em]">{project.title}</CardTitle></div>
            </CardHeader>
            <CardContent className="grid gap-6 p-6 sm:p-8">
              <p className="max-w-xl leading-7 text-muted-foreground">{project.description}</p>
              <ul className="grid gap-2 text-sm text-muted-foreground">{project.details.map((detail) => <li key={detail} className="flex gap-2"><ChevronRight className="mt-0.5 size-4 shrink-0" />{detail}</li>)}</ul>
              <div className="flex flex-wrap gap-2">{project.stack.map((tool) => <Badge key={tool} variant="outline">{tool}</Badge>)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
