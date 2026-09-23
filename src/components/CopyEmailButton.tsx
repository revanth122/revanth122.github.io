import { useState } from "react";
import { Check, Mail } from "lucide-react";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    // Clipboard API unavailable (older browser / insecure context) — fall back.
  }
  const el = document.createElement("textarea");
  el.value = text;
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export default function CopyEmailButton({
  email,
  className = "",
  iconOnly = false,
  size = 16,
}: {
  email: string;
  className?: string;
  iconOnly?: boolean;
  size?: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await copyText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={iconOnly ? (copied ? "Email copied" : "Copy email address") : undefined}
      className={className}
    >
      {copied ? <Check size={size} /> : <Mail size={size} />}
      {!iconOnly && <span>{copied ? "Copied to clipboard!" : email}</span>}
    </button>
  );
}
