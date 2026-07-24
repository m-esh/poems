"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { PoemCard } from "@/components/poems/poem-card";
import { useLanguage } from "@/components/site/language-provider";
import { searchPoems } from "@/lib/poems";

export function SearchExperience({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => searchPoems(query), [query]);
  const { locale, dict } = useLanguage();
  const isFa = locale === "fa";

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search className="text-muted-foreground pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2" />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.search.placeholder}
          className="h-12 ps-9 text-base"
          dir={isFa ? "rtl" : undefined}
        />
      </div>

      {query.trim() === "" ? (
        <p className="text-muted-foreground mt-10 text-center text-sm">
          {dict.search.hint}
        </p>
      ) : results.length === 0 ? (
        <p className="text-muted-foreground mt-10 text-center text-sm">
          {dict.search.noResults(query)}
        </p>
      ) : (
        <>
          <p className="text-muted-foreground mt-8 text-sm">
            {results.length === 1
              ? dict.search.resultsFoundOne
              : dict.search.resultsFound(results.length)}
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ poem, poet }) => (
              <PoemCard key={poem.slug} poem={poem} poet={poet} locale={locale} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
