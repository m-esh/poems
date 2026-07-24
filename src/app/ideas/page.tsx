import Link from "next/link";
import type { Metadata } from "next";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import type { Theme } from "@/types/poem";

export const metadata: Metadata = {
  title: "Ideas",
  description: "Rumi's great ideas — the concepts he returned to again and again.",
};

/** Best-effort link from each concept to the closest matching poem theme tag. */
const IDEA_THEME: Theme[] = [
  "love",
  "wisdom",
  "wisdom",
  "impermanence",
  "longing",
  "unity",
  "the-divine",
  "longing",
];

export default async function IdeasPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const isFa = locale === "fa";

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.ideas.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.ideas.subtitle}</p>
      </div>
      <OrnamentalDivider className="my-10" />
      <div className="grid gap-5 sm:grid-cols-2">
        {dict.ideas.items.map((item, i) => (
          <Link
            key={item.title}
            href={`/library?theme=${IDEA_THEME[i]}`}
            className="group border-border/70 bg-card rounded-lg border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            dir={isFa ? "rtl" : "ltr"}
          >
            <h2 className="font-display group-hover:text-primary text-2xl">
              {item.title}
            </h2>
            <p className="text-muted-foreground mt-2 leading-relaxed">{item.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
