import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { FeaturedPoem } from "@/components/poems/featured-poem";
import {
  getAllPoets,
  getPoemOfDay,
  getPoemsByPoet,
  THEME_LABELS,
  getAllThemes,
  withPoet,
} from "@/lib/poems";

export default function Home() {
  const { poem, poet } = withPoet(getPoemOfDay());
  const poets = getAllPoets();
  const themes = getAllThemes();

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
          A small, unhurried collection of Persian and Sufi poetry — Rumi, Hafez,
          Sa&apos;di, Attar, Khayyam, and Shabistari — gathered here the way an
          illuminated manuscript gathers light: slowly, and to be returned to. Read a poem
          of the day, wander the library by theme, or let chance choose for you.
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
            <Link key={theme} href={`/library?theme=${theme}`}>
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

      <section className="animate-fade-up mt-20" style={{ animationDelay: "350ms" }}>
        <div className="text-center">
          <h2 className="font-display text-3xl">The poets</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Six voices across seven centuries of Persian verse.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {poets.map((p) => (
            <Link
              key={p.slug}
              href={`/poets/${p.slug}`}
              className="group border-border/70 bg-card rounded-lg border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-nastaliq text-gold text-xl" dir="rtl">
                {p.nameOriginal}
              </p>
              <h3 className="font-display group-hover:text-primary mt-1 text-2xl">
                {p.name}
              </h3>
              <p className="text-muted-foreground mt-1 text-xs">{p.era}</p>
              <p className="text-secondary mt-3 text-xs">
                {getPoemsByPoet(p.slug).length} poems in the collection
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
