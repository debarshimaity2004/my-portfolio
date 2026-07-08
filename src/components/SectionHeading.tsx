export default function SectionHeading({
  command,
  title,
}: {
  command: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-sm text-accent">
        <span className="text-foreground-muted">$</span> {command}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
