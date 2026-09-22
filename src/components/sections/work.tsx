import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
      aria-labelledby="work-title"
    >
      <SectionHeading
        id="work"
        index="03"
        eyebrow="Selected work"
        title="Engineering projects that bridge theory and production."
        description="A curated portfolio of full-stack web applications, natural language processing benchmarks, computer vision architecture, and enterprise tools."
      />

      <div className="grid gap-6 md:ml-48 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.number}
            className={`flex flex-col justify-between border-border transition-colors hover:border-foreground/40 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            <CardHeader className="gap-4 border-b border-border p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-medium text-muted-foreground">
                  {project.number} / {project.year}
                </span>
                {project.featured ? (
                  <Badge variant="default" className="font-mono text-[0.65rem] uppercase tracking-wider">
                    Featured Project
                  </Badge>
                ) : (
                  <Badge variant="outline" className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    Project Matrix
                  </Badge>
                )}
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {project.type}
                </p>
                <CardTitle className="mt-2 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {project.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8">
              <div className="space-y-4">
                <p className="leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5">
                      <ChevronRightIcon className="mt-1 size-3.5 shrink-0 text-foreground" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-border/60">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-background px-2.5 py-1 text-[0.7rem] font-normal">
                      {tool}
                    </Badge>
                  ))}
                </div>

                {(project.liveUrl || project.caseStudyUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1.5 rounded bg-foreground px-3 py-1.5 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
                      >
                        <span>View Interactive Demo</span>
                        <ChevronRightIcon className="size-3" />
                      </Link>
                    )}
                    {project.caseStudyUrl && (
                      <Link
                        href={project.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 rounded border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        <span>Read Case Study</span>
                        <ChevronRightIcon className="size-3" />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <span>View Repository</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

