"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { services } from "@/data/services";

const FORMSPREE_FORM_ID = "xdavanak";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  area: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  area: "",
  message: "",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(() => ({
    ...initialState,
    service: searchParams.get("service") ?? "",
  }));
  const [validationError, setValidationError] = useState("");
  const [formspreeState, formspreeSubmit] = useForm(FORMSPREE_FORM_ID);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!form.name || !form.email || !form.message) {
      e.preventDefault();
      setValidationError("Please fill in your name, email and a short message.");
      return;
    }
    setValidationError("");
    formspreeSubmit(e);
  }

  if (formspreeState.succeeded) {
    return (
      <div className="rounded-sm border border-line bg-chalk p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-ink">
          Thanks, {form.name.split(" ")[0]}
        </h3>
        <p className="mt-2 text-sm text-slate">
          Your enquiry has been noted. We&apos;ll be in touch shortly to talk
          through your job and arrange a free, fixed-price quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </Field>
        <Field label="Email address" required>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
          <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="mt-1.5 text-xs font-medium text-accent-dark" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone number">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </Field>
        <Field label="Postcode or area">
          <input
            type="text"
            name="area"
            value={form.area}
            onChange={handleChange}
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="What do you need help with?">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">General enquiry</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about the job" required>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className={inputClasses}
        />
        <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="mt-1.5 text-xs font-medium text-accent-dark" />
      </Field>

      {validationError && (
        <p className="text-sm font-medium text-accent-dark">{validationError}</p>
      )}
      <ValidationError errors={formspreeState.errors} className="text-sm font-medium text-accent-dark" />

      <button
        type="submit"
        disabled={formspreeState.submitting}
        className="w-full rounded-sm bg-accent px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {formspreeState.submitting ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-xs text-slate">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy-policy" className="font-medium text-accent underline-offset-4 hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms-and-conditions" className="font-medium text-accent underline-offset-4 hover:underline">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </form>
  );
}

const inputClasses =
  "mt-1.5 w-full rounded-sm border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-wide text-slate">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
