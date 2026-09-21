import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { certificates, coursework } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" aria-labelledby="education-title">
      <SectionHeading index="05" eyebrow="Education" title="Grounded in informatics. Always still learning." />
      <div className="grid gap-12 md:ml-48 md:grid-cols-2">
        <div><p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">2021 — 2026 · Semarang</p><h3 className="mt-5 text-2xl font-semibold tracking-tight">Bachelor of Informatics</h3><p className="mt-2 text-muted-foreground">Diponegoro University</p><div className="mt-8 inline-flex items-baseline gap-3 border-l-2 border-foreground pl-4"><span className="font-mono text-3xl font-semibold">3.69</span><span className="font-mono text-xs text-muted-foreground">/ 4.00 GPA</span></div></div>
        <div><p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Relevant coursework</p><ul className="mt-5 grid gap-3 text-muted-foreground">{coursework.map((item) => <li key={item} className="flex items-center gap-3"><span className="size-1.5 bg-ink-400" />{item}</li>)}</ul></div>
      </div>
      <div className="mt-24 md:ml-48"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Additional</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">Certificates & continuous learning</h3></div><span className="hidden font-mono text-xs text-muted-foreground sm:block">08 credentials</span></div><div className="grid border-t border-border sm:grid-cols-2">{certificates.map((certificate, index) => <div key={certificate} className="flex gap-4 border-b border-border py-4 text-sm text-muted-foreground"><span className="font-mono text-xs text-ink-400">{String(index + 1).padStart(2, "0")}</span>{certificate}</div>)}</div></div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="border-t border-border bg-foreground text-background" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="grid gap-12 md:grid-cols-[12rem_1fr] md:gap-0"><div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-300">06 / Contact</div><div><h2 id="contact-title" className="max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl">Have a system to support or a problem worth exploring?</h2><p className="mt-6 max-w-xl leading-7 text-ink-200">I&apos;m open to conversations about IT operations, technical support, web development, and applied AI projects.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="bg-background text-foreground hover:bg-ink-100"><a href="mailto:firdausravi33@gmail.com">Send an email <Mail /></a></Button><Button asChild variant="outline" size="lg" className="border-ink-500 text-background hover:bg-ink-700"><a href="tel:+6285786683002">Call me <Phone /></a></Button></div></div></div></div>
    </section>
  );
}
