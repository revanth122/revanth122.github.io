import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full min-h-[100dvh] sm:min-h-0 sm:max-w-5xl sm:max-h-[85vh] overflow-y-auto rounded-none sm:rounded-2xl border border-border bg-surface"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="fixed sm:absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/90 text-text-dim backdrop-blur hover:border-border-bright hover:text-heading transition-colors"
            >
              <X size={16} />
            </button>

            <div className="px-5 pb-16 pt-16 sm:px-10 sm:pb-14 sm:pt-14">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
