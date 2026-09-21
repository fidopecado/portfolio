import { Terminal } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
      aria-labelledby="about-title"
    >
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Technical by instinct. Curious by practice."
        description="My work sits at the intersection of reliable day-to-day operations and thoughtful building. I enjoy finding the root cause, making the fix understandable, and leaving systems in a better state than I found them."
      />
      <div className="grid gap-10 md:grid-cols-2 md:pl-48">
        <div className="space-y-5 leading-7 text-muted-foreground">
          <p>
            As an on-site IT Field Support engineer in a manufacturing
            environment, I work close to the people and infrastructure that keep
            a plant running. That means practical troubleshooting, calm incident
            management, and ownership from first report through resolution.
          </p>
          <p>
            My Informatics background adds another layer: building web products,
            exploring machine learning, and turning messy datasets into useful
            signals. I bring the same structured thinking to both a network issue
            and a classification experiment.
          </p>
        </div>
        <div className="dot-grid flex min-h-52 flex-col justify-between border border-border p-6">
          <Terminal className="size-5" />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Working principle
            </p>
            <p className="mt-3 max-w-xs text-xl font-medium leading-7">
              Make the complex useful, then make it dependable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
