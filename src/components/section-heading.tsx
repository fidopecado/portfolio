import type { SectionId } from "@/data/sections";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Anchor id for the section. Also used as the heading id, so it must be unique. */
  id: SectionId;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 grid md:mb-14 md:grid-cols-[12rem_1fr]", className)}>
      <div className="flex items-start gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="mt-[0.45rem] h-px w-8 bg-border" />
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2
          id={`${id}-title`}
          className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-pretty leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
