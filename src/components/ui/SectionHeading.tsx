interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-sm font-medium uppercase tracking-widest text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
