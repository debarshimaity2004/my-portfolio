import { achievements } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        command="cat achievements.log"
        title="Experience & Achievements"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-border bg-background-elevated p-5 transition-colors hover:border-accent/40"
          >
            <p className="font-mono text-xl font-semibold text-accent">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
