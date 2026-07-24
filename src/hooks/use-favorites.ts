"use client";

import { useCallback, useSyncExternalStore } from "react";

import { useMounted } from "@/hooks/use-mounted";

const STORAGE_KEY = "golshan-raz:favorites";
const CHANGE_EVENT = "golshan-raz:favorites-changed";

let cachedRaw: string | null | undefined;
let cachedFavorites: string[] = [];

function parse(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

function getSnapshot(): string[] {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedFavorites = parse(raw);
  }
  return cachedFavorites;
}

const EMPTY_FAVORITES: string[] = [];

function getServerSnapshot(): string[] {
  return EMPTY_FAVORITES;
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function writeFavorites(slugs: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

/** Favorites are stored client-side only. Reads are empty during SSR/hydration to avoid mismatch. */
export function useFavorites() {
  const favorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useMounted();

  const isFavorite = useCallback((slug: string) => favorites.includes(slug), [favorites]);

  const toggleFavorite = useCallback(
    (slug: string) => {
      const next = favorites.includes(slug)
        ? favorites.filter((s) => s !== slug)
        : [...favorites, slug];
      writeFavorites(next);
    },
    [favorites],
  );

  return { favorites, isFavorite, toggleFavorite, hydrated };
}
