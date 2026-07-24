import type { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import { bookSections, films } from "@/data/resources";

export const metadata: Metadata = {
  title: "Books & Films",
  description:
    "A selected guide to Rumi's own works, major translations, biographies, and screen adaptations.",
};

export default async function ResourcesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const isFa = locale === "fa";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.resources.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.resources.subtitle}</p>
      </div>
      <OrnamentalDivider className="my-10" />

      <Tabs defaultValue="books">
        <TabsList className="mx-auto">
          <TabsTrigger value="books">{isFa ? "کتاب‌ها" : "Books"}</TabsTrigger>
          <TabsTrigger value="films">{isFa ? "فیلم‌ها" : "Films"}</TabsTrigger>
        </TabsList>

        <TabsContent value="books" className="mt-8">
          <div className="flex flex-col gap-14">
            {bookSections.map((section) => (
              <div key={section.key}>
                <h2 className="font-display text-2xl">{section.title}</h2>
                <div className="border-border/70 divide-border/70 mt-4 flex flex-col divide-y border-y">
                  {section.books.map((book) => (
                    <div key={book.title} className="py-4">
                      <p className="font-display text-lg">{book.title}</p>
                      <p className="text-secondary text-sm">{book.author}</p>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                        {book.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="films" className="mt-8">
          <div className="border-border/70 divide-border/70 flex flex-col divide-y border-y">
            {films.map((film) => (
              <div
                key={film.title}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-4"
              >
                <span className="text-secondary shrink-0 text-sm font-semibold">
                  {film.year}
                </span>
                <div>
                  <p className="font-display text-lg">{film.title}</p>
                  <p className="text-secondary text-sm">{film.director}</p>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {film.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <p className="text-muted-foreground mt-14 text-center text-xs">
        {dict.resources.updated}
      </p>
    </div>
  );
}
