import type { Metadata } from "next";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Stories",
  description: "Parables from the Masnavi, and what they teach.",
};

export default async function StoriesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const isFa = locale === "fa";

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.stories.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.stories.subtitle}</p>
      </div>

      <div className="mt-16 flex flex-col gap-20">
        {stories.map((story) => (
          <article key={story.slug} id={story.slug}>
            <header className="text-center">
              <h2 className="font-display text-3xl">{story.title[locale]}</h2>
              {story.titleOriginal && (
                <p className="font-nastaliq text-gold mt-1 text-xl" dir="rtl">
                  {story.titleOriginal}
                </p>
              )}
              <p className="text-muted-foreground mt-2 text-xs tracking-[0.2em] uppercase">
                {story.source}
              </p>
            </header>

            <OrnamentalDivider className="my-8" />

            <div
              className="text-foreground/90 flex flex-col gap-4 leading-relaxed text-pretty"
              dir={isFa ? "rtl" : "ltr"}
            >
              {story.story[locale].map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div
              className="border-border/70 mt-8 flex flex-col gap-6 border-t pt-8"
              dir={isFa ? "rtl" : "ltr"}
            >
              <div>
                <h3 className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">
                  {dict.stories.meaning}
                </h3>
                <p className="text-foreground/90 mt-2 leading-relaxed">
                  {story.meaning[locale]}
                </p>
              </div>
              <div>
                <h3 className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">
                  {dict.stories.teaching}
                </h3>
                <p className="text-foreground/90 mt-2 leading-relaxed">
                  {story.teaching[locale]}
                </p>
              </div>
              <div className="border-gold/30 bg-card/60 rounded-lg border p-5">
                <h3 className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">
                  {dict.stories.today}
                </h3>
                <p className="text-foreground/90 mt-2 leading-relaxed italic">
                  {story.today[locale]}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
