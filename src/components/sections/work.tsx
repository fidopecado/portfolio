import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * Project destinations are a mix of internal routes and absolute URLs
 * (GitHub, Pages, Streamlit). `next/link` prefetches internal routes only,
 * so external destinations get a plain anchor with a new-tab target.
 */
function ProjectAction({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary" | "muted";
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center gap-1.5 rounded bg-foreground px-3 py-1.5 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
      : variant === "secondary"
        ? "inline-flex items-center gap-1.5 rounded border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-muted"
        : "inline-flex items-center gap-1.5 rounded border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

  const content = (
    <>
      <span>{label}</span>
      {isExternal(href) ? (
        <span className="text-[10px]">↗</span>
      ) : (
        <ChevronRightIcon className="size-3" />
      )}
    </>
  );

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

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
                      <ProjectAction
                        href={project.liveUrl}
                        label={isExternal(project.liveUrl) ? "Open Live Demo" : "View Interactive Demo"}
                        variant="primary"
                      />
                    )}
                    {project.caseStudyUrl && (
                      <ProjectAction
                        href={project.caseStudyUrl}
                        label="Read Case Study"
                        variant="secondary"
                      />
                    )}
                    {project.githubUrl && (
                      <ProjectAction href={project.githubUrl} label="View Repository" variant="muted" />
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

