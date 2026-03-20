import Image from "next/image";
import type { HeroContent, SocialLink } from "@/content/schema";

type HeroSectionProps = {
  hero: HeroContent;
  socialLinks: SocialLink[];
  headshotUrl?: string;
  resumeUrl?: string;
};

export function HeroSection({ hero, socialLinks, headshotUrl, resumeUrl }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-grain opacity-90" />
      <div className="absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-8">
        <div className="space-y-6 animate-enter">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">{hero.eyebrow}</p>
            <h1 className="max-w-4xl font-serif text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-[4.1rem]">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-7 text-foreground/74">{hero.subtitle}</p>
            <p className="max-w-2xl text-sm leading-7 text-foreground/68">{hero.summary}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition duration-300 hover:opacity-90"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={resumeUrl ?? hero.secondaryCta.href}
              download
              className="inline-flex h-11 items-center justify-center rounded-full border border-border/90 bg-surface/75 px-5 text-sm font-semibold text-foreground transition duration-300 hover:border-accent/40 hover:bg-surfaceStrong/80"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex h-11 items-center justify-center rounded-full border border-border/90 bg-surface/75 px-5 text-sm font-semibold text-foreground transition duration-300 hover:border-accent/40 hover:bg-surfaceStrong/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="animate-enter-delayed space-y-4 lg:justify-self-end lg:w-[76%] lg:max-w-[24rem]">
          <div className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-surface/78 shadow-soft backdrop-blur">
            <div className="relative aspect-[3/4]">
              <Image
                src={headshotUrl ?? "/tom-ogoley-headshot.jpg"}
                alt="Tom Ogoley headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="border-t border-border/80 px-5 py-4">
              <p className="text-sm font-semibold text-foreground">Tom Ogoley</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-accent">External Wholesaler</p>
              <p className="mt-2 text-xs leading-5 text-foreground/62">
                Replace this placeholder with a professional headshot for a stronger executive profile.
              </p>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border/80 bg-surface/78 p-4 shadow-soft backdrop-blur">
            <div className="grid gap-3">
              {hero.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-border/75 bg-background/55 p-3">
                  <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-foreground/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
