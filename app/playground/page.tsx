import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MatchGame from "@/components/MatchGame";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Playground — Hero Match",
  description:
    "A redesigned memory matching game from Osama Ejaz’s portfolio playground. Flip cards, match heroes, beat the clock.",
};

export default function PlaygroundPage() {
  return (
    <main className="relative min-h-screen pb-20 pt-8">
      <div className="container">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-rn-300/40 hover:text-rn-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <span className="font-mono text-xs text-slate-500">
            /playground
          </span>
        </div>

        <SectionHeading
          eyebrow="Playground"
          title="Hero Match"
          description="A quick memory challenge rebuilt in React — flip cards, match the heroes, and race the clock. A lighter take on an old portfolio experiment."
        />

        <MatchGame />
      </div>
    </main>
  );
}
