type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-[2rem]">{title}</h2>
      {description ? <p className="text-sm leading-6 text-foreground/68">{description}</p> : null}
    </div>
  );
}
