import { PROFILE } from "@/constants/profile";

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          &copy; {COPYRIGHT_YEAR} {PROFILE.name}
        </p>
        <p>Built with Next.js, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}
