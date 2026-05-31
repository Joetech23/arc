import type {
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";
import type { ReactNode } from "react";

export function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: FieldError;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block font-heading text-sm font-semibold text-navy">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-sm text-red-600">
          {error.message}
        </span>
      )}
    </label>
  );
}

const inputBase =
  "w-full rounded-xl border border-cloud-dark bg-cloud/50 px-4 py-3 text-charcoal outline-none transition-all duration-200 placeholder:text-charcoal-light/50 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/15";

export function TextInput({
  registration,
  type = "text",
  placeholder,
}: {
  registration: UseFormRegisterReturn;
  type?: string;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={inputBase}
      {...registration}
    />
  );
}

export function TextArea({
  registration,
  placeholder,
  rows = 5,
}: {
  registration: UseFormRegisterReturn;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={`${inputBase} resize-none`}
      {...registration}
    />
  );
}

export function Select({
  registration,
  options,
}: {
  registration: UseFormRegisterReturn;
  options: { value: string; label: string }[];
}) {
  return (
    <select className={inputBase} defaultValue="" {...registration}>
      <option value="" disabled>
        Select an option
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
