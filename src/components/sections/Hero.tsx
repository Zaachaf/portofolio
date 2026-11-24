import Button from "@/components/ui/Button";
import { PROFILE } from "@/constants/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Indigo background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="container-page">
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to new opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m {PROFILE.name}.
            <span className="mt-2 block bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
              {PROFILE.role}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {PROFILE.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#experience">View Experience</Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>

          <ul className="mt-12 flex gap-6">
            {PROFILE.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent-soft"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
