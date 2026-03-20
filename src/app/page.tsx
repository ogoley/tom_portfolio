import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { unstable_noStore as noStore } from 'next/cache'
import { getSiteContent } from "@/lib/getSiteContent";

export default async function HomePage() {
  noStore() // opt out of static caching — content comes from Sanity on-demand
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader name={content.site.name} navigation={content.navigation} linkedinUrl={content.site.linkedinUrl} />
      <HeroSection hero={content.hero} socialLinks={content.socialLinks} />
      <AboutSection about={content.about} />
      <ExperienceSection experience={content.experience} />
      <ProjectsSection projects={content.projects} />
      <SkillsSection skills={content.skills} />
      <ContactSection
        contact={content.contact}
        socialLinks={content.socialLinks}
        resumeHref={content.site.resumeHref}
      />
      <SiteFooter name={content.site.name} note={content.footerNote} socialLinks={content.socialLinks} />
    </main>
  );
}
