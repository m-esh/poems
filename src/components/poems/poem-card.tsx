import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { FavoriteButton } from "@/components/poems/favorite-button";
import { THEME_LABELS } from "@/lib/poems";
import type { Poem, Poet } from "@/types/poem";
import { cn } from "@/lib/utils";

export function PoemCard({
  poem,
  poet,
  className,
}: {
  poem: Poem;
  poet: Poet | undefined;
  className?: string;
}) {
  const excerpt = poem.translation.filter(Boolean).slice(0, 2);

  return (
    <div
      className={cn(
        "group border-border/70 bg-card relative flex flex-col justify-between overflow-hidden rounded-lg border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <Link href={`/poem/${poem.slug}`} className="flex flex-1 flex-col">
        <span className="text-secondary text-xs tracking-[0.2em] uppercase">
          {poet?.name ?? "Unknown"}
        </span>
        <h3 className="font-display text-foreground group-hover:text-primary mt-2 text-2xl leading-tight">
          {poem.title}
        </h3>
        <p className="font-body text-muted-foreground mt-3 flex-1 leading-relaxed text-pretty italic">
          {excerpt.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {poem.themes.slice(0, 3).map((theme) => (
            <Badge key={theme} variant="outline" className="text-[10px]">
              {THEME_LABELS[theme]}
            </Badge>
          ))}
        </div>
      </Link>
      <div className="border-border/60 mt-4 flex items-center justify-between border-t pt-4">
        <span className="text-muted-foreground text-xs">{poem.collection}</span>
        <FavoriteButton slug={poem.slug} size="icon" className="size-8" />
      </div>
    </div>
  );
}
