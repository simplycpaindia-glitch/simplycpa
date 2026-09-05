import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink-950 text-paper-50 hover:bg-ink-800 focus-visible:outline-ink-950",
  accent:
    "bg-gold-500 text-ink-950 hover:bg-gold-400 focus-visible:outline-gold-600",
  outline:
    "border border-ink-950/20 text-ink-950 hover:bg-ink-950/5 focus-visible:outline-ink-950",
  ghost: "text-ink-950 hover:bg-ink-950/5 focus-visible:outline-ink-950",
  "outline-light":
    "border border-paper-50/30 text-paper-50 hover:bg-paper-50/10 focus-visible:outline-paper-50",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5 rounded-md gap-1.5",
  md: "text-sm px-4 py-2.5 rounded-md gap-2",
  lg: "text-base px-6 py-3.5 rounded-lg gap-2.5",
};

const base =
  "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  >;

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", size = "md", className, children, ...rest } =
    props;
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as LinkProps;
    return (
      <Link href={href} className={classes} {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
