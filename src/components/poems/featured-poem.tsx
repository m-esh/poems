import Link from "next/link";
import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FavoriteButton } from "@/components/poems/favorite-button";
import { RandomPoemButton } from "@/components/poems/random-poem-button";
import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale-constants";
import type { Poem, Poet } from "@/types/poem";

export function FeaturedPoem({
  poem,
  poet,
  locale = "en",
}: {
  poem: Poem;
  poet: Poet | undefined;
  locale?: Locale;
}) {
  const dict = getDictionary(locale);
  const isFa = locale === "fa";
  const lines = (isFa && poem.originalText ? poem.originalText : poem.translation)
    .filter(Boolean)
    .slice(0, 6);
  const title = isFa && poem.titleOriginal ? poem.titleOriginal : poem.title;
  const poetName = isFa ? (poet?.nameOriginal ?? poet?.name) : poet?.name;

  return (
    <section className="border-gold/30 bg-card/70 relative overflow-hidden rounded-xl border px-6 py-12 shadow-sm sm:px-12 sm:py-16">
      <div
        className="pattern-lattice pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-secondary text-xs tracking-[0.35em] uppercase">
          {dict.home.poemOfDay}
        </p>
        <h2
          className={
            isFa && poem.titleOriginal
              ? "font-nastaliq mt-4 text-4xl sm:text-5xl"
              : "font-display mt-4 text-4xl font-semibold sm:text-5xl"
          }
          dir={isFa && poem.titleOriginal ? "rtl" : undefined}
        >
          {title}
        </h2>
        <p className="text-muted-foreground mt-2 text-sm" dir="ltr">
          {poetName} · {poem.collection}
        </p>

        <OrnamentalDivider className="my-8" />

        <div
          className={
            isFa && poem.originalText
              ? "font-nastaliq text-foreground/90 flex flex-col gap-3 text-2xl leading-loose sm:text-3xl"
              : "font-display text-foreground/90 flex flex-col gap-3 text-xl leading-relaxed italic sm:text-2xl"
          }
          dir={isFa && poem.originalText ? "rtl" : undefined}
        >
          {lines.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href={`/poem/${poem.slug}`}>
              <BookOpen className="size-4" />
              {dict.home.readFullPoem}
            </Link>
          </Button>
          <RandomPoemButton variant="outline" size="lg" currentSlug={poem.slug}>
            {dict.home.anotherPoem}
          </RandomPoemButton>
          <FavoriteButton slug={poem.slug} size="lg" showLabel className="px-4" />
        </div>
      </div>
    </section>
  );
}
