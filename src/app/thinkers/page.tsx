import type { Metadata } from "next";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import { thinkers, thinkerCategoryOrder } from "@/data/thinkers";

export const metadata: Metadata = {
  title: "Rumi Through Other Thinkers",
  description:
    "How philosophers, scholars, poets, and psychologists have read and engaged with Rumi — each with a cited source.",
};

export default async function ThinkersPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const isFa = locale === "fa";

  const categories = thinkerCategoryOrder.map((category) => ({
    category,
    people: thinkers.filter((t) => t.category === category),
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.thinkers.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.thinkers.subtitle}</p>
      </div>
      <OrnamentalDivider className="my-10" />

      <div className="flex flex-col gap-14">
        {categories.map(({ category, people }) => {
          const first = people[0];
          if (!first) return null;
          return (
            <div key={category}>
              <h2 className="font-display text-2xl">
                {isFa ? first.categoryFa : category}
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {people.map((person) => (
                  <div
                    key={person.slug}
                    className="border-border/70 bg-card rounded-lg border p-5 shadow-sm"
                  >
                    <p className="font-display text-xl">
                      {isFa ? person.nameFa : person.name}
                    </p>
                    <p className="text-secondary mt-1 text-sm">
                      {isFa ? person.fieldFa : person.field}
                    </p>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                      {isFa ? person.summaryFa : person.summary}
                    </p>
                    <p className="text-muted-foreground/80 mt-3 text-xs italic">
                      {isFa ? person.sourceFa : person.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-muted-foreground mx-auto mt-14 max-w-2xl text-center text-xs leading-relaxed">
        {dict.thinkers.methodology}
      </p>
    </div>
  );
}
