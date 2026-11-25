"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: readonly string[];
  className?: string;
}

export default function Typewriter({ words, className }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const current = words[wordIndex];
    const isComplete = !deleting && text === current;
    const isEmpty = deleting && text === "";
    const delay = isComplete ? 1600 : isEmpty ? 400 : deleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (isComplete) {
        setDeleting(true);
      } else if (isEmpty) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className={className}>
        {text}
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent-soft motion-safe:animate-blink"
      />
    </>
  );
}
