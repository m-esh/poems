import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { FeaturedPoem } from "@/components/poems/featured-poem";
import {
  getPoemOfDay,
  getPoetBySlug,
  THEME_LABELS,
  getAllThemes,
  withPoet,
} from "@/lib/poems";

export default function Home() {
  const { poem, poet } = withPoet(getPoemOfDay());
  const rumi = getPoetBySlug("rumi");
  const themes = getAllThemes();
  const [bioExcerpt] = rumi?.bio.split("\n\n") ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="animate-fade-up mx-auto max-w-2xl text-center">
        <p className="font-nastaliq text-gold text-3xl" dir="rtl">
          گلشن راز
        </p>
        <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          Golshan Raz
        </h1>
        <p className="text-secondary mt-2 text-sm tracking-[0.3em] uppercase">
          a rose garden of secrets
        </p>
        <OrnamentalDivider className="my-8" />
        <p className="text-muted-foreground leading-relaxed text-pretty sm:text-lg">
          A small, unhurried collection devoted entirely to Jalal ad-Din Rumi — gathered
          here the way an illuminated manuscript gathers light: slowly, and to be returned
          to. Read a poem of the day, wander the collection by theme, or let chance choose
          for you.
        </p>
      </section>

      <div className="animate-fade-up mt-14" style={{ animationDelay: "150ms" }}>
        <FeaturedPoem poem={poem} poet={poet} />
      </div>

      <section className="animate-fade-up mt-20" style={{ animationDelay: "250ms" }}>
        <div className="text-center">
          <h2 className="font-display text-3xl">Wander by theme</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Every poem in the collection is tagged for the mood you arrive with.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {themes.map((theme) => (
            <Link
              key={theme}
              href={`/library?theme=${theme}`}
              className="-my-2 inline-flex items-center py-2"
            >
              <Badge
                variant="outline"
                className="hover:bg-accent/10 cursor-pointer px-3 py-1 text-sm"
              >
                {THEME_LABELS[theme]}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {rumi && (
        <section className="animate-fade-up mt-20" style={{ animationDelay: "350ms" }}>
          <div className="border-gold/30 bg-card/70 relative overflow-hidden rounded-xl border px-6 py-12 shadow-sm sm:px-12 sm:py-16">
            <div
              className="pattern-lattice pointer-events-none absolute inset-0 opacity-40"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="font-nastaliq text-gold text-3xl" dir="rtl">
                {rumi.nameOriginal}
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">
                {rumi.name}
              </h2>
              <p className="text-secondary mt-2 text-sm tracking-[0.3em] uppercase">
                {rumi.years} · {rumi.era}
              </p>
              <OrnamentalDivider className="my-8" />
              <p className="text-foreground/90 leading-relaxed text-pretty sm:text-lg">
                {bioExcerpt}
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/poets/rumi">Read his full story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
