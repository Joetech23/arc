"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { emailjsConfig, emailjsReady } from "@/lib/emailjs";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Field, Select, TextArea, TextInput } from "./FormFields";
import { IconArrow, IconCheck } from "@/components/icons";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  projectType: z.string().min(1, "Select a project type"),
  location: z.string().min(1, "Select a location"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().optional(),
  message: z.string().min(10, "Describe your project (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const budgets = [
  "Under ₦5M",
  "₦5M – ₦20M",
  "₦20M – ₦50M",
  "₦50M – ₦100M",
  "Over ₦100M",
  "Not sure yet",
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      if (emailjsReady()) {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.quoteTemplateId || emailjsConfig.contactTemplateId,
          { ...data, form_type: "Quote Request" },
          { publicKey: emailjsConfig.publicKey }
        );
      } else {
        const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0AProject: ${data.projectType}%0D%0ALocation: ${data.location}%0D%0ABudget: ${data.budget}%0D%0ATimeline: ${data.timeline ?? "-"}%0D%0A%0D%0A${data.message}`;
        window.location.href = `mailto:${site.email}?subject=Quote request from ${data.name}&body=${body}`;
      }
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-cloud p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold text-navy">
          Request received!
        </h3>
        <p className="mt-2 max-w-sm text-charcoal-light">
          Thanks — we&rsquo;ve got your project details. Expect a call or email
          from our team within one business day.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-6">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <TextInput registration={register("name")} placeholder="Your name" />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <TextInput
            registration={register("phone")}
            type="tel"
            placeholder="+234..."
          />
        </Field>
      </div>
      <Field label="Email" error={errors.email}>
        <TextInput
          registration={register("email")}
          type="email"
          placeholder="you@email.com"
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" error={errors.projectType}>
          <Select
            registration={register("projectType")}
            options={services.map((s) => ({ value: s.title, label: s.title }))}
          />
        </Field>
        <Field label="Location" error={errors.location}>
          <Select
            registration={register("location")}
            options={[...site.serviceAreas, "Other"].map((a) => ({
              value: a,
              label: a,
            }))}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Estimated budget" error={errors.budget}>
          <Select
            registration={register("budget")}
            options={budgets.map((b) => ({ value: b, label: b }))}
          />
        </Field>
        <Field label="Preferred timeline (optional)" error={errors.timeline}>
          <TextInput
            registration={register("timeline")}
            placeholder="e.g. Q3 2026"
          />
        </Field>
      </div>
      <Field label="Project details" error={errors.message}>
        <TextArea
          registration={register("message")}
          placeholder="Tell us about the scope, size and any specifics..."
          rows={6}
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Request My Quote"}
        {status !== "sending" && <IconArrow className="h-4 w-4" />}
      </button>
    </form>
  );
}
