"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;   // ms per character when typing
  deletingSpeed?: number; // ms per character when deleting
  pauseAfterType?: number; // ms to hold the full phrase
  pauseAfterDelete?: number; // ms to hold the empty state
  className?: string;
}

/**
 * Lightweight, dependency-free typewriter effect.
 * Loops through an array of phrases, typing and deleting each one.
 */
export default function TypingEffect({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseAfterType = 1600,
  pauseAfterDelete = 400,
  className,
}: TypingEffectProps) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const current = phrases[phraseIdx % phrases.length];
    let delay: number;

    if (!deleting && text === current) {
      // Hold, then start deleting
      delay = pauseAfterType;
      const t = window.setTimeout(() => setDeleting(true), delay);
      return () => window.clearTimeout(t);
    }

    if (deleting && text === "") {
      // Hold, then advance to next phrase
      delay = pauseAfterDelete;
      const t = window.setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }, delay);
      return () => window.clearTimeout(t);
    }

    delay = deleting ? deletingSpeed : typingSpeed;
    const timeout = window.setTimeout(() => {
      setText((prev) =>
        deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [text, deleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-rn-300 align-middle animate-blink" />
    </span>
  );
}
