"use client";

import { useEffect, useState } from "react";
import type { CertificateItem } from "@/types";
import { createPortal } from "react-dom";

interface CertificateButtonProps {
  certificate: CertificateItem;
}

export default function CertificateButton({
  certificate,
}: CertificateButtonProps) {
  const [open, setOpen] = useState<boolean>(false);
  const isPdf: boolean = certificate.file.toLowerCase().endsWith(".pdf");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-soft"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zM14 3v5h5M9 13h6M9 17h6"
          />
        </svg>
        {certificate.title}
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={certificate.title}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div
              className="flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-surface"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
                <p className="truncate text-sm font-medium text-foreground">
                  {certificate.title}
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md px-3 py-1.5 text-sm text-accent-soft transition-colors hover:bg-background"
                  >
                    Buka di tab baru ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Tutup"
                    className="rounded-md p-1.5 text-muted transition-colors hover:bg-background hover:text-foreground"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>
              </div>

              {isPdf ? (
                <iframe
                  src={certificate.file}
                  title={certificate.title}
                  className="h-full w-full bg-white"
                />
              ) : (
                <div className="h-full w-full overflow-auto bg-background p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={certificate.file}
                    alt={certificate.title}
                    className="mx-auto h-auto max-w-full rounded-md"
                  />
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
