import Link from "next/link";
import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FavoriteButton } from "@/components/poems/favorite-button";
import { RandomPoemButton } from "@/components/poems/random-poem-button";
import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import type { Poem, Poet } from "@/types/poem";

export function FeaturedPoem({ poem, poet }: { poem: Poem; poet: Poet | undefined }) {
  const lines = poem.translation.filter(Boolean).slice(0, 6);

  return (
    <section className="border-gold/30 bg-card/70 relative overflow-hidden rounded-xl border px-6 py-12 shadow-sm sm:px-12 sm:py-16">
      <div
        className="pattern-lattice pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-secondary text-xs tracking-[0.35em] uppercase">
          Poem of the day
        </p>
        <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
          {poem.title}
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          {poet?.name} · {poem.collection}
        </p>

        <OrnamentalDivider className="my-8" />

        <div className="font-display text-foreground/90 flex flex-col gap-3 text-xl leading-relaxed italic sm:text-2xl">
          {lines.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href={`/poem/${poem.slug}`}>
              <BookOpen className="size-4" />
              Read the full poem
            </Link>
          </Button>
          <RandomPoemButton variant="outline" size="lg" currentSlug={poem.slug}>
            Another poem
          </RandomPoemButton>
          <FavoriteButton slug={poem.slug} size="lg" showLabel className="px-4" />
        </div>
      </div>
    </section>
  );
}
