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
  service: z.string().min(1, "Please choose a service"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
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
          emailjsConfig.contactTemplateId,
          { ...data, form_type: "Contact" },
          { publicKey: emailjsConfig.publicKey }
        );
      } else {
        // Fallback until EmailJS credentials are configured.
        const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0AService: ${data.service}%0D%0A%0D%0A${data.message}`;
        window.location.href = `mailto:${site.email}?subject=Website enquiry from ${data.name}&body=${body}`;
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
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-charcoal-light">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send another message
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
      <Field label="Service of interest" error={errors.service}>
        <Select
          registration={register("service")}
          options={services.map((s) => ({ value: s.title, label: s.title }))}
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <TextArea
          registration={register("message")}
          placeholder="Tell us about your project..."
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
        {status === "sending" ? "Sending..." : "Send Message"}
        {status !== "sending" && <IconArrow className="h-4 w-4" />}
      </button>
    </form>
  );
}
