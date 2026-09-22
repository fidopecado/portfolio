import { TerminalIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
      aria-labelledby="about-title"
    >
      <SectionHeading
        id="about"
        index="01"
        eyebrow="About"
        title="Calm under a fault ticket. Curious on a blank canvas."
        description="I work where steady day-to-day operations meet hands-on building. Finding the root cause is the easy part — the real work is making the fix clear enough for someone else to run with."
      />
      <div className="grid gap-10 md:ml-48 md:grid-cols-2">
        <div className="space-y-5 leading-7 text-muted-foreground">
          <p>
            As an on-site IT Field Support engineer at PT. Wavin Manufacturing Indonesia, I work directly alongside plant personnel and technical infrastructure to maintain uninterrupted production. My role centers on practical troubleshooting, ServiceNow incident resolution under strict SLAs, and owning system lifecycles from diagnosis to lasting stability.
          </p>
          <p>
            My Informatics degree (S.Kom) from Diponegoro University provides a strong engineering foundation: building scalable full-stack web applications, evaluating generative AI models through RLHF and NLP, and applying Computer Vision for pattern recognition. Whether diagnosing network equipment or optimizing classification pipelines, I approach every engineering problem systematically — analyzing root causes thoroughly before applying precise solutions.
          </p>
        </div>
        <div className="dot-grid flex min-h-52 flex-col justify-between border border-border p-6 sm:p-8">
          <TerminalIcon className="size-5 text-foreground" />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Core Engineering Principle
            </p>
            <p className="mt-3 max-w-xs text-xl font-semibold leading-7 tracking-tight">
              Understand the system thoroughly, solve the root cause, and build for reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

