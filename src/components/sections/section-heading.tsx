interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-5">
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">{eyebrow}</p>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-4xl">{title}</h2>
        {description ? <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p> : null}
      </div>
    </div>
  );
}
