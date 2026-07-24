import Link from "next/link";
import type { Metadata } from "next";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import type { Theme } from "@/types/poem";

export const metadata: Metadata = {
  title: "For Life",
  description: "Whatever you're carrying today, start here.",
};

/** Theme tags matched to each life-topic prompt, in dictionary item order. */
const FOR_LIFE_THEMES: Theme[][] = [
  ["wisdom", "longing"],
  ["the-divine", "wisdom"],
  ["longing", "impermanence"],
  ["longing", "unity"],
  ["wisdom"],
  ["love"],
  ["wisdom", "unity"],
];

export default async function ForLifePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const isFa = locale === "fa";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.forLife.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.forLife.subtitle}</p>
      </div>
      <OrnamentalDivider className="my-10" />
      <div className="grid gap-5 sm:grid-cols-2">
        {dict.forLife.items.map((item, i) => {
          const themes = FOR_LIFE_THEMES[i];
          const href = `/library?theme=${themes[0]}`;
          return (
            <Link
              key={item.prompt}
              href={href}
              className="group border-border/70 bg-card rounded-lg border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              dir={isFa ? "rtl" : "ltr"}
            >
              <h2 className="font-display group-hover:text-primary text-xl">
                {item.prompt}
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
              <p className="text-secondary mt-4 text-xs font-medium">
                {dict.forLife.seePoems} →
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
