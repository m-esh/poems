import type { Metadata } from "next";

import { LibraryExplorer } from "@/components/poems/library-explorer";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Browse Rumi's poems in this collection, filterable by theme and collection.",
};

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{
    theme?: string;
    collection?: string;
    q?: string;
  }>;
}) {
  const params = await searchParams;
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.library.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.library.subtitle}</p>
      </div>

      <div className="mt-10">
        <LibraryExplorer
          initial={{
            theme: params.theme,
            collection: params.collection,
            q: params.q,
          }}
        />
      </div>
    </div>
  );
}
