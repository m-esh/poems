import Link from "next/link";
import type { Metadata } from "next";

import { getAllPoets, getPoemsByPoet } from "@/lib/poems";

export const metadata: Metadata = {
  title: "Poets",
  description: "The six poets gathered in this collection.",
};

export default function PoetsPage() {
  const poets = getAllPoets();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">The Poets</h1>
        <p className="text-muted-foreground mt-3">
          Six voices, seven centuries, one long conversation about longing and the divine.
        </p>
      </div>

      <div className="divide-border/70 border-border/70 mt-12 flex flex-col divide-y border-y">
        {poets.map((poet) => (
          <Link
            key={poet.slug}
            href={`/poets/${poet.slug}`}
            className="group hover:bg-accent/5 flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <p className="font-nastaliq text-gold text-lg" dir="rtl">
                {poet.nameOriginal}
              </p>
              <h2 className="font-display group-hover:text-primary text-3xl">
                {poet.name}
              </h2>
              <p className="text-muted-foreground mt-1 max-w-xl text-sm">{poet.era}</p>
            </div>
            <span className="text-secondary shrink-0 text-xs">
              {getPoemsByPoet(poet.slug).length} poems
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
