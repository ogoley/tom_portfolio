import type { SocialLink } from "@/content/schema";

type SiteFooterProps = {
  name: string;
  note: string;
  socialLinks: SocialLink[];
};

export function SiteFooter({ name, note, socialLinks }: SiteFooterProps) {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/85">{name}</p>
          <p className="max-w-2xl text-sm leading-6 text-foreground/64">{note}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/68">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition duration-300 hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
