import poemsData from "@/data/poems.json";
import poetsData from "@/data/poets.json";
import type { Poem, Poet, Theme } from "@/types/poem";

export const poems: Poem[] = poemsData as Poem[];
export const poets: Poet[] = poetsData as Poet[];

export const THEME_LABELS: Record<Theme, string> = {
  love: "Love",
  longing: "Longing",
  "the-divine": "The Divine",
  nature: "Nature",
  "wine-and-ecstasy": "Wine & Ecstasy",
  impermanence: "Impermanence",
  unity: "Unity",
  wisdom: "Wisdom",
};

export function getAllThemes(): Theme[] {
  return Object.keys(THEME_LABELS) as Theme[];
}

export function getAllCollections(): string[] {
  return Array.from(new Set(poems.map((p) => p.collection))).sort();
}

export function getAllPoems(): Poem[] {
  return poems;
}

export function getAllPoets(): Poet[] {
  return poets;
}

export function getPoetBySlug(slug: string): Poet | undefined {
  return poets.find((p) => p.slug === slug);
}

export function getPoemBySlug(slug: string): Poem | undefined {
  return poems.find((p) => p.slug === slug);
}

export function getPoemsByPoet(poetSlug: string): Poem[] {
  return poems.filter((p) => p.poetSlug === poetSlug);
}

export function getPoemsByTheme(theme: Theme): Poem[] {
  return poems.filter((p) => p.themes.includes(theme));
}

export function getPoemsByCollection(collection: string): Poem[] {
  return poems.filter((p) => p.collection === collection);
}

/** A stable per-day dayNumber, shared by server and client, so SSR markup matches. */
export function dayNumber(date: Date = new Date()): number {
  const utcMidnight = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );
  return Math.floor(utcMidnight / 86_400_000);
}

/** Deterministic "poem of the day" — same poem for everyone, all day, changes at UTC midnight. */
export function getPoemOfDay(date: Date = new Date()): Poem {
  const index = dayNumber(date) % poems.length;
  return poems[index];
}

export function getRandomPoem(excludeSlug?: string): Poem {
  const pool = excludeSlug ? poems.filter((p) => p.slug !== excludeSlug) : poems;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

export interface SearchResult {
  poem: Poem;
  poet: Poet | undefined;
}

export function searchPoems(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return poems
    .map((poem) => ({ poem, poet: getPoetBySlug(poem.poetSlug) }))
    .filter(({ poem, poet }) => {
      const haystack = [
        poem.title,
        poem.titleOriginal ?? "",
        poem.collection,
        poem.note,
        poem.noteFa,
        ...poem.translation,
        ...(poem.originalText ?? []),
        ...poem.themes.map((t) => THEME_LABELS[t]),
        poet?.name ?? "",
        poet?.nameOriginal ?? "",
      ]
        .join(" \n ")
        .toLowerCase();
      return haystack.includes(q);
    });
}

export function withPoet(poem: Poem): { poem: Poem; poet: Poet | undefined } {
  return { poem, poet: getPoetBySlug(poem.poetSlug) };
}
