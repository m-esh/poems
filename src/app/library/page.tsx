import type { Metadata } from "next";

import { LibraryExplorer } from "@/components/poems/library-explorer";

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

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">The Library</h1>
        <p className="text-muted-foreground mt-3">
          Every Rumi poem in Golshan Raz, gathered in one room. Filter by collection, or
          by the theme that matches your mood.
        </p>
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
