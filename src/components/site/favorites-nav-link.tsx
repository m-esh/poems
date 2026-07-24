"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

export function FavoritesNavLink({ className }: { className?: string }) {
  const { favorites, hydrated } = useFavorites();

  return (
    <Link
      href="/favorites"
      className={cn(
        "text-foreground/80 hover:text-foreground relative inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
        className,
      )}
    >
      <Heart className="size-4" />
      Favorites
      {hydrated && favorites.length > 0 && (
        <span className="bg-secondary text-secondary-foreground inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold">
          {favorites.length}
        </span>
      )}
    </Link>
  );
}
