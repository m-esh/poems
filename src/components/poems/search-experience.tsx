"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { PoemCard } from "@/components/poems/poem-card";
import { searchPoems } from "@/lib/poems";

export function SearchExperience({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => searchPoems(query), [query]);

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, poets, lines, or themes…"
          className="h-12 pl-9 text-base"
        />
      </div>

      {query.trim() === "" ? (
        <p className="text-muted-foreground mt-10 text-center text-sm">
          Try searching for a poet&apos;s name, a word like &ldquo;wine&rdquo; or
          &ldquo;reed,&rdquo; or a theme like &ldquo;longing.&rdquo;
        </p>
      ) : results.length === 0 ? (
        <p className="text-muted-foreground mt-10 text-center text-sm">
          No poems found for &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <>
          <p className="text-muted-foreground mt-8 text-sm">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ poem, poet }) => (
              <PoemCard key={poem.slug} poem={poem} poet={poet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
