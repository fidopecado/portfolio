import { About } from "@/components/sections/about";
import { Contact, Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SiteFooter } from "@/components/sections/site-footer";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top" className="paper-noise min-h-screen overflow-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

