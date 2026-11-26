import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT } from "@/constants/profile";
import Magnet from "@/components/ui/Magnet";

interface ContactItem {
  label: string;
  value: string;
  href: string;
}

const EMAIL_SUBJECT = "Hello from your portfolio website";

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT.email,
)}&su=${encodeURIComponent(EMAIL_SUBJECT)}`;

const CONTACT_ITEMS: readonly ContactItem[] = [
  {
    label: "Email",
    value: CONTACT.email,
    href: GMAIL_COMPOSE_URL,
  },
  {
    label: "WhatsApp",
    value: CONTACT.phone,
    href: "https://wa.me/6287838182550",
  },
  {
    label: "LinkedIn",
    value: `linkedin.com/in/${CONTACT.linkedin}`,
    href: `https://linkedin.com/in/${CONTACT.linkedin}`,
  },
  {
    label: "Instagram",
    value: CONTACT.instagram,
    href: `https://instagram.com/${CONTACT.instagram.replace("@", "")}`,
  },
  {
    label: "Github",
    value: CONTACT.github,
    href: `https://github.com/${CONTACT.github.replace("@", "")}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Contact" title="Get in touch" />

        <p className="max-w-xl leading-relaxed text-muted">
          I&apos;m open to new opportunities. Feel free to reach out through any
          of the channels below, and I&apos;ll get back to you as soon as I can.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {CONTACT_ITEMS.map((item) => {
            const external = item.href.startsWith("http");

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-widest text-accent-soft">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate text-foreground">
                      {item.value}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent-soft"
                  >
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-10">
          <Magnet>
            <Button
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send an Email
            </Button>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
