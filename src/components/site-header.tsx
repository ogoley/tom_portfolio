"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import type { NavItem } from "@/content/schema";

type SiteHeaderProps = {
  name: string;
  navigation: NavItem[];
  linkedinUrl: string;
};

export function SiteHeader({ name, navigation, linkedinUrl }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-border/80 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-background/50 backdrop-blur-md"
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/88">
            {name}
          </a>
          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-4 text-sm font-medium text-foreground/88 transition duration-300 hover:border-accent/40 hover:bg-surfaceStrong/90"
              aria-label="Open LinkedIn profile"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M4.98 3.5C4.98 4.88 3.89 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 8.5h4.6V24H.2V8.5Zm7.5 0h4.4v2.12h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7.02V24h-4.6v-7.01c0-1.67-.03-3.82-2.33-3.82-2.34 0-2.7 1.83-2.7 3.7V24H7.7V8.5Z" />
              </svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
        <div className="mt-4 overflow-x-auto pb-1 md:mt-3">
          <nav className="flex min-w-max items-center gap-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/72 transition duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
