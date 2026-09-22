import { MailIcon, PhoneIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { contact, certificates, coursework } from "@/data/profile";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
      aria-labelledby="education-title"
    >
      <SectionHeading
        id="education"
        index="05"
        eyebrow="Education"
        title="Grounded in computer science. Committed to continuous growth."
        description="Academic background from Diponegoro University paired with technical certifications across database engineering, software development, and project management."
      />

      <div className="grid gap-12 md:ml-48 md:grid-cols-2">
        <div className="border border-border bg-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            2021 — 2026 · Semarang, Indonesia
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            Bachelor of Informatics
          </h3>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            Diponegoro University (S.Kom)
          </p>

          <div className="mt-8 inline-flex items-baseline gap-3 border-l-2 border-foreground pl-4">
            <span className="font-mono text-3xl font-semibold">3.69</span>
            <span className="font-mono text-xs text-muted-foreground">
              / 4.00 Cumulative GPA
            </span>
          </div>
        </div>

        <div className="border border-border bg-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Relevant Coursework
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {coursework.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="size-1.5 rounded-full bg-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 md:ml-48">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Additional Qualifications
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              Certifications & Technical Credentials
            </h3>
          </div>
          <span className="hidden font-mono text-xs text-muted-foreground sm:block">
            08 Verified Credentials
          </span>
        </div>

        <div className="grid border-t border-border sm:grid-cols-2">
          {certificates.map((certificate, index) => (
            <div
              key={certificate}
              className="flex items-center gap-4 border-b border-border py-4.5 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-mono text-xs text-ink-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{certificate}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-foreground text-background"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 md:grid-cols-[12rem_1fr] md:gap-0">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-300">
            06 / Contact
          </div>
          <div>
            <h2
              id="contact-title"
              className="max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl"
            >
              Have a system to support or a problem worth exploring?
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-ink-200">
              I&apos;m open to technical opportunities, IT infrastructure roles, web engineering, and applied AI collaboration.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-ink-100"
              >
                <a href={`mailto:${contact.email}`}>
                  Send an email <MailIcon className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-ink-500 bg-transparent text-background hover:bg-ink-700 hover:text-background"
              >
                <a href={contact.phoneHref}>
                  Call me <PhoneIcon className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
