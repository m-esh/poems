import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { FavoriteButton } from "@/components/poems/favorite-button";
import { getThemeLabels } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale-constants";
import type { Poem, Poet } from "@/types/poem";
import { cn } from "@/lib/utils";

export function PoemCard({
  poem,
  poet,
  locale = "en",
  className,
}: {
  poem: Poem;
  poet: Poet | undefined;
  locale?: Locale;
  className?: string;
}) {
  const isFa = locale === "fa";
  const themeLabels = getThemeLabels(locale);
  const excerpt = (isFa && poem.originalText ? poem.originalText : poem.translation)
    .filter(Boolean)
    .slice(0, 2);
  const title = isFa && poem.titleOriginal ? poem.titleOriginal : poem.title;
  const poetName = isFa ? (poet?.nameOriginal ?? poet?.name) : poet?.name;

  return (
    <div
      className={cn(
        "group border-border/70 bg-card relative flex flex-col justify-between overflow-hidden rounded-lg border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <Link href={`/poem/${poem.slug}`} className="flex flex-1 flex-col">
        <span className="text-secondary text-xs tracking-[0.2em] uppercase">
          {poetName ?? "Unknown"}
        </span>
        <h3
          className={cn(
            "text-foreground group-hover:text-primary mt-2 text-2xl leading-tight",
            isFa && poem.titleOriginal ? "font-nastaliq" : "font-display",
          )}
          dir={isFa && poem.titleOriginal ? "rtl" : undefined}
        >
          {title}
        </h3>
        <p
          className={cn(
            "font-body text-muted-foreground mt-3 flex-1 leading-relaxed text-pretty italic",
            isFa && poem.originalText && "font-nastaliq text-lg not-italic",
          )}
          dir={isFa && poem.originalText ? "rtl" : undefined}
        >
          {excerpt.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {poem.themes.slice(0, 3).map((theme) => (
            <Badge key={theme} variant="outline" className="text-[10px]">
              {themeLabels[theme]}
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
