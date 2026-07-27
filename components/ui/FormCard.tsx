import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * FormCard — a bordered container for forms with a copper top
 * accent bar. Composes the `.mh-form-card` atom.
 *
 * Typical layout:
 *
 *   <FormCard>
 *     <FormCardHeader eyebrow="Get Started" title="Book a Consultation" />
 *     <Field label="Name"><Input name="name" /></Field>
 *     <Field label="Email"><Input type="email" name="email" /></Field>
 *     <Button block>Send</Button>
 *   </FormCard>
 */

export function FormCard({
  className,
  children,
  ...rest
}: ComponentProps<"section">) {
  return (
    <section className={cn("mh-form-card", className)} {...rest}>
      {children}
    </section>
  );
}

export function FormCardHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <header>
      {eyebrow ? <p className="mh-eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 mh-display text-2xl md:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm text-[color:var(--mh-ink-300)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mh-field", className)}>
      <label className="mh-field-label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-[color:var(--mh-ink-400)]">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-xs text-[color:var(--mh-copper-300)]">{error}</p>
      ) : null}
    </div>
  );
}

export function Input({ className, ...rest }: ComponentProps<"input">) {
  return <input className={cn("mh-input", className)} {...rest} />;
}

export function Textarea({ className, ...rest }: ComponentProps<"textarea">) {
  return <textarea className={cn("mh-textarea", className)} {...rest} />;
}

export function Select({ className, children, ...rest }: ComponentProps<"select">) {
  return (
    <select className={cn("mh-select", className)} {...rest}>
      {children}
    </select>
  );
}
