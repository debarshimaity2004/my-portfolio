"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-sm text-foreground transition-colors hover:text-accent"
        >
          <span className="text-accent">dm</span>
          <span className="text-foreground-muted">@portfolio</span>
          <span className="text-foreground-muted">:~$</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded border border-accent/40 px-4 py-1.5 font-mono text-sm text-accent transition-colors hover:bg-accent-soft md:inline-block"
        >
          resume.pdf
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded border border-border text-foreground md:hidden"
        >
          <span className="font-mono text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 font-mono text-sm md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-foreground-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded border border-accent/40 px-4 py-1.5 text-accent"
            >
              resume.pdf
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
