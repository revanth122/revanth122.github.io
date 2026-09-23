import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Magnetic from "./Magnetic";
import { profile } from "../data";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-heading placeholder:text-text-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error — please try again or reach out directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface/60 px-6 py-10 text-center">
        <CheckCircle2 className="text-accent" size={28} />
        <p className="font-display text-lg font-medium text-heading">Message sent</p>
        <p className="text-sm text-text-dim">Thanks for reaching out — I'll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 text-left"
    >
      <input type="hidden" name="access_key" value={profile.web3formsAccessKey} />
      <input type="hidden" name="subject" value="New message from portfolio site" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs text-text-dim">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-text-dim">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-xs text-text-dim">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What would you like to talk about?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="mt-3 flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={15} />
          {error}
        </p>
      )}

      <div className="mt-5">
        <Magnetic strength={0.2}>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-full bg-heading px-6 py-3 text-sm font-medium text-bg hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </Magnetic>
      </div>
    </form>
  );
}
