import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-dim">
        <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
        <p>Built with React, Tailwind &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
