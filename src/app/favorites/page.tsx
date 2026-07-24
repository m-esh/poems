"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PoemCard } from "@/components/poems/poem-card";
import { useFavorites } from "@/hooks/use-favorites";
import { getPoemBySlug, getPoetBySlug } from "@/lib/poems";

export default function FavoritesPage() {
  const { favorites, hydrated } = useFavorites();
  const poems = favorites
    .map((slug) => getPoemBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Favorites</h1>
        <p className="text-muted-foreground mt-3">
          Poems you&apos;ve set aside, kept here in your browser for the next visit.
        </p>
      </div>

      <div className="mt-10">
        {!hydrated ? null : poems.length === 0 ? (
          <div className="border-border mx-auto flex max-w-md flex-col items-center gap-4 rounded-lg border border-dashed p-12 text-center">
            <Heart className="text-muted-foreground size-8" />
            <p className="text-muted-foreground">
              Nothing saved yet. Tap the heart on any poem to keep it here.
            </p>
            <Button asChild variant="secondary">
              <Link href="/library">Browse the library</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem) => (
              <PoemCard key={poem.slug} poem={poem} poet={getPoetBySlug(poem.poetSlug)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
