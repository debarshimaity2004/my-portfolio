import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading command="cat about.md" title="About" />
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
