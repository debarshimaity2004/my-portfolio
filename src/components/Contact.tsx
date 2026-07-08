import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "debarshimaity2004", href: profile.github },
  {
    label: "LinkedIn",
    value: "debarshi-maity",
    href: profile.linkedin,
  },
  { label: "LeetCode", value: "~1693 rating", href: profile.leetcode },
  { label: "Codeforces", value: "~945 rating", href: profile.codeforces },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading command="./contact --me" title="Get In Touch" />
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
        I&apos;m actively looking for SDE-1 opportunities at product-based
        companies. Feel free to reach out — I usually reply within a day.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="group flex items-center justify-between rounded-lg border border-border bg-background-elevated px-5 py-4 transition-colors hover:border-accent/40"
          >
            <div>
              <p className="font-mono text-sm text-accent">{link.label}</p>
              <p className="mt-0.5 text-sm text-foreground-muted">
                {link.value}
              </p>
            </div>
            <span className="font-mono text-foreground-muted transition-colors group-hover:text-accent">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
