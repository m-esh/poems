import type { Metadata } from "next";

import { SearchExperience } from "@/components/poems/search-experience";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the collection by poet, title, line, or theme.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.search.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.search.subtitle}</p>
      </div>
      <div className="mt-10">
        <SearchExperience initialQuery={q ?? ""} />
      </div>
    </div>
  );
}
