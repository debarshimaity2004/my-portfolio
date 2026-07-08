import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-6 py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-in-up">
          <p className="mb-4 font-mono text-sm text-accent">
            <span className="text-foreground-muted">$</span> whoami
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-lg text-accent sm:text-xl">
            {profile.role}
            <span className="cursor-blink" />
          </p>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded bg-accent px-6 py-3 font-mono text-sm font-medium text-background transition-colors hover:bg-accent/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Contact
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up order-first flex justify-center md:order-last">
          <div className="relative aspect-square w-48 sm:w-64 md:w-full">
            <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-background-elevated">
              <Image
                src="/images/profile.png"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
