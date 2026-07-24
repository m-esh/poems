"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PoemCard } from "@/components/poems/poem-card";
import { useLanguage } from "@/components/site/language-provider";
import { getAllCollections, getAllPoems, getAllPoets, getAllThemes } from "@/lib/poems";
import type { Theme } from "@/types/poem";
import { cn } from "@/lib/utils";

const ALL = "all";

export interface LibraryInitialFilters {
  collection?: string;
  theme?: string;
  q?: string;
}

export function LibraryExplorer({ initial }: { initial?: LibraryInitialFilters }) {
  const poems = getAllPoems();
  const poets = getAllPoets();
  const themes = getAllThemes();
  const collections = getAllCollections();
  const router = useRouter();
  const pathname = usePathname();
  const { locale, dict, themeLabels } = useLanguage();
  const isFa = locale === "fa";

  const [query, setQuery] = useState(initial?.q ?? "");
  const [collection, setCollection] = useState<string>(initial?.collection ?? ALL);
  const [activeThemes, setActiveThemes] = useState<Theme[]>(
    initial?.theme && themes.includes(initial.theme as Theme)
      ? [initial.theme as Theme]
      : [],
  );

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (collection !== ALL) params.set("collection", collection);
    if (activeThemes.length === 1) params.set("theme", activeThemes[0]);
    const search = params.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, collection, activeThemes]);

  function toggleTheme(theme: Theme) {
    setActiveThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme],
    );
  }

  function clearFilters() {
    setQuery("");
    setCollection(ALL);
    setActiveThemes([]);
  }

  const hasFilters = query.trim() !== "" || collection !== ALL || activeThemes.length > 0;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return poems.filter((poem) => {
      if (collection !== ALL && poem.collection !== collection) return false;
      if (activeThemes.length > 0 && !activeThemes.every((t) => poem.themes.includes(t)))
        return false;
      if (q) {
        const haystack = [
          poem.title,
          poem.titleOriginal ?? "",
          ...poem.translation,
          ...(poem.originalText ?? []),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [poems, collection, activeThemes, query]);

  return (
    <div>
      <div className="border-border/70 bg-card/60 flex flex-col gap-4 rounded-lg border p-5">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input
            placeholder={dict.library.filterPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="sm:max-w-xs"
            dir={isFa ? "rtl" : undefined}
          />
          <Select value={collection} onValueChange={setCollection}>
            <SelectTrigger className="sm:w-56">
              <SelectValue placeholder={dict.library.allCollections} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>{dict.library.allCollections}</SelectItem>
              {collections.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasFilters && (
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="text-muted-foreground gap-1.5"
            >
              <X className="size-4" />
              {dict.library.clear}
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => {
            const active = activeThemes.includes(theme);
            return (
              <button
                key={theme}
                type="button"
                onClick={() => toggleTheme(theme)}
                className="-my-2 inline-flex items-center py-2"
              >
                <Badge
                  variant={active ? "accent" : "outline"}
                  className={cn("cursor-pointer select-none", active && "shadow-sm")}
                >
                  {themeLabels[theme]}
                </Badge>
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-muted-foreground mt-6 text-sm">
        {results.length === 1
          ? dict.library.poemsFoundOne
          : dict.library.poemsFound(results.length)}
      </p>

      {results.length === 0 ? (
        <div className="border-border text-muted-foreground mt-8 rounded-lg border border-dashed p-12 text-center">
          {dict.library.noResults}
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((poem) => (
            <PoemCard
              key={poem.slug}
              poem={poem}
              poet={poets.find((p) => p.slug === poem.poetSlug)}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  );
}
