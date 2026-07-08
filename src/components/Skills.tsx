import { skillGroups } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading command="ls ./skills" title="Skills" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-background-elevated p-5 transition-colors hover:border-accent/40"
          >
            <h3 className="mb-3 font-mono text-sm text-accent">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border px-2.5 py-1 font-mono text-xs text-foreground-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
