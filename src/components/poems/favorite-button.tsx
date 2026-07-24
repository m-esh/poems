"use client";

import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { useLanguage } from "@/components/site/language-provider";
import { cn } from "@/lib/utils";

export function FavoriteButton({
  slug,
  className,
  size = "icon",
  showLabel = false,
}: {
  slug: string;
  className?: string;
  size?: React.ComponentProps<typeof Button>["size"];
  showLabel?: boolean;
}) {
  const { isFavorite, toggleFavorite, hydrated } = useFavorites();
  const { dict } = useLanguage();
  const active = hydrated && isFavorite(slug);

  return (
    <Button
      type="button"
      variant="outline"
      size={size}
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : dict.common.save}
      className={cn(
        "border-border/70 gap-2",
        active && "border-secondary/60 bg-secondary/10 text-secondary",
        className,
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(slug);
      }}
    >
      <Heart className={cn("size-4", active && "fill-current")} />
      {showLabel && (active ? dict.common.saved : dict.common.save)}
    </Button>
  );
}
