import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <As className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </As>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Use "h1" when this is the page's main title (each page needs exactly one h1). */
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-700 mb-2">
          {eyebrow}
        </p>
      )}
      <Heading className="font-display text-3xl sm:text-4xl font-medium text-ink-950 text-balance">
        {title}
      </Heading>
      {description && (
        <p className="mt-3 text-ink-400 max-w-2xl text-balance leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
