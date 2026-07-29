import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { FeaturedPoem } from "@/components/poems/featured-poem";
import { getDictionary, getThemeLabels } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import { getPoemOfDay, getPoetBySlug, getAllThemes, withPoet } from "@/lib/poems";

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const themeLabels = getThemeLabels(locale);
  const isFa = locale === "fa";

  const { poem, poet } = withPoet(getPoemOfDay());
  const rumi = getPoetBySlug("rumi");
  const themes = getAllThemes();
  const bioSource = isFa ? (rumi?.bioFa ?? rumi?.bio) : rumi?.bio;
  const [bioExcerpt] = bioSource?.split("\n\n") ?? [];

  const journeyCards = [
    { href: "/ideas", ...dict.sections.ideas },
    { href: "/stories", ...dict.sections.stories },
    { href: "/thinkers", ...dict.sections.thinkers },
    { href: "/for-life", ...dict.sections.forLife },
    { href: "/ask", ...dict.sections.ask },
    { href: "/resources", ...dict.sections.resources },
  ];

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
          {dict.home.kicker}
        </p>
        <OrnamentalDivider className="my-8" />
        <p className="text-muted-foreground leading-relaxed text-pretty sm:text-lg">
          {dict.home.intro}
        </p>
      </section>

      <div className="animate-fade-up mt-14" style={{ animationDelay: "150ms" }}>
        <FeaturedPoem poem={poem} poet={poet} locale={locale} />
      </div>

      <section className="animate-fade-up mt-20" style={{ animationDelay: "250ms" }}>
        <div className="text-center">
          <h2 className="font-display text-3xl">{dict.home.wanderByTheme}</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            {dict.home.wanderByThemeSub}
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
                {themeLabels[theme]}
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
                {isFa ? rumi.nameOriginal : rumi.name}
              </h2>
              <p
                className="text-secondary mt-2 text-sm tracking-[0.3em] uppercase"
                dir="ltr"
              >
                {rumi.years} · {rumi.era}
              </p>
              <OrnamentalDivider className="my-8" />
              <p className="text-foreground/90 leading-relaxed text-pretty sm:text-lg">
                {bioExcerpt}
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/poets/rumi">{dict.home.readFullStory}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="animate-fade-up mt-20" style={{ animationDelay: "450ms" }}>
        <div className="text-center">
          <h2 className="font-display text-3xl">{dict.home.exploreSections}</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            {dict.home.exploreSectionsSub}
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {journeyCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group border-border/70 bg-card rounded-lg border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="font-display group-hover:text-primary text-2xl">
                {card.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
