type Tone = "dark" | "light";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: Tone;
  align?: "left" | "center";
}) {
  const eyebrowColor = tone === "dark" ? "text-accent" : "text-accent";
  const titleColor = tone === "dark" ? "text-ink" : "text-paper";
  const subtitleColor = tone === "dark" ? "text-slate" : "text-paper/75";
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const ruleAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
          <span className={`h-px w-8 bg-accent ${ruleAlignment}`} aria-hidden="true" />
          <p className={`font-mono text-xs uppercase tracking-[0.2em] ${eyebrowColor}`}>
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={`font-display font-bold uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

