export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  metrics: Array<{
    label: string;
    value: string;
  }>;
};

export type AboutContent = {
  title: string;
  paragraphs: string[];
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  impact: string;
  stack: string[];
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactContent = {
  title: string;
  body: string;
  email: string;
  location: string;
  availability: string;
};

export type SiteContent = {
  site: {
    name: string;
    domain: string;
    title: string;
    description: string;
    resumeHref: string;
    linkedinUrl: string;
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  contact: ContactContent;
  footerNote: string;
};
