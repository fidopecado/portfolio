import { ArrowDownRightIcon, CircleDotIcon, DownloadIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/profile";

const metrics = [
  { value: "100+", label: "Plant personnel & office users supported" },
  { value: "3.69", label: "/ 4.00 Cumulative Informatics GPA (S.Kom)" },
  { value: "1+", label: "Years of cumulative work experience*", exp:"*" },
];

export function Hero() {
  return (
    <>
      <section
        className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-32"
        aria-labelledby="hero-title"
      >
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div>
            <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <CircleDotIcon className="size-3 text-foreground" />
              Available for technical roles & collaboration
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl text-balance text-[clamp(3.5rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.08em]"
            >
              Firdaus
              <br />
              Ravi<span className="text-ink-400">.</span>
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start">
              <p className="gap-5 font-mono text-xs uppercase leading-6 tracking-[0.13em] text-muted-foreground sm:w-44 sm:shrink-0 lg:w-auto lg:px-1 ">
                IT Field Support
                <br />
                Bachelor of Informatics
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="lg:w-64">
                <a href="#work">
                  Explore selected work <ArrowDownRightIcon />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={contact.resume} download>
                  Download CV <DownloadIcon />
                </a>
              </Button>
            </div>
          </div>

          <aside className="border-l border-border pl-6 lg:mb-2" aria-label="Contact details">
            <p className="mb-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Contact Overview
            </p>
            <address className="grid gap-4 text-sm not-italic">
              <a className="flex items-start gap-3 transition-colors hover:text-foreground hover:underline" href={`mailto:${contact.email}`}>
                <MailIcon className="mt-0.5 size-4 text-muted-foreground shrink-0" />
                <span className="break-all">{contact.email}</span>
              </a>
              <a className="flex items-start gap-3 transition-colors hover:text-foreground hover:underline" href={contact.phoneHref}>
                <PhoneIcon className="mt-0.5 size-4 text-muted-foreground shrink-0" />
                <span>{contact.phone}</span>
              </a>
              <p className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-4 text-muted-foreground shrink-0" />
                <span>
                  {contact.location.city}, {contact.location.region}
                  <br />
                  {contact.location.country}
                </span>
              </p>
            </address>
            <p className="mt-10 border-t border-border pt-4 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-muted-foreground">
              Infrastructure · Engineering · Intelligence
            </p>
          </aside>
        </div>
      </section>

      <dl className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col divide-y divide-border px-5 sm:flex-row sm:divide-x sm:divide-y-0 sm:px-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex-1 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block font-mono text-3xl font-semibold tracking-[-0.06em]">
                  {metric.value}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">{metric.label}</span>
              </dd>
            </div>
          ))}
        </div>
      </dl>
    </>
  );
}
