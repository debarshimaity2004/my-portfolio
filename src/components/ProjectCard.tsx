import type { Project } from "@/data/portfolio";

const isPlaceholder = (url: string) => url.startsWith("[");

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-border bg-background-elevated p-6 transition-colors hover:border-accent/40">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-foreground">
          {project.name}
        </h3>
        {project.metrics && (
          <span className="whitespace-nowrap rounded border border-accent/30 bg-accent-soft px-2 py-1 font-mono text-xs text-accent">
            {project.metrics[0]}
          </span>
        )}
      </div>

      <p className="mb-4 text-sm leading-relaxed text-foreground-muted">
        {project.description}
      </p>

      <ul className="mb-4 space-y-1.5">
        {project.highlights.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-sm text-foreground-muted"
          >
            <span className="text-accent">▸</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border px-2 py-0.5 font-mono text-xs text-foreground-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 font-mono text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:underline"
          >
            Live Demo ↗
          </a>
        )}
        {isPlaceholder(project.githubUrl) ? (
          <span
            className="text-foreground-muted/60"
            title="Add the GitHub repo link in src/data/portfolio.ts"
          >
            GitHub: {project.githubUrl}
          </span>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}
