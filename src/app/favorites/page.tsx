"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PoemCard } from "@/components/poems/poem-card";
import { useFavorites } from "@/hooks/use-favorites";
import { useLanguage } from "@/components/site/language-provider";
import { getPoemBySlug, getPoetBySlug } from "@/lib/poems";

export default function FavoritesPage() {
  const { favorites, hydrated } = useFavorites();
  const { locale, dict } = useLanguage();
  const poems = favorites
    .map((slug) => getPoemBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.favorites.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.favorites.subtitle}</p>
      </div>

      <div className="mt-10">
        {!hydrated ? null : poems.length === 0 ? (
          <div className="border-border mx-auto flex max-w-md flex-col items-center gap-4 rounded-lg border border-dashed p-12 text-center">
            <Heart className="text-muted-foreground size-8" />
            <p className="text-muted-foreground">{dict.favorites.empty}</p>
            <Button asChild variant="secondary">
              <Link href="/library">{dict.favorites.browseLibrary}</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem) => (
              <PoemCard
                key={poem.slug}
                poem={poem}
                poet={getPoetBySlug(poem.poetSlug)}
                locale={locale}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
