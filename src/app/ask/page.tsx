import type { Metadata } from "next";

import { AskRumi } from "@/components/poems/ask-rumi";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";

export const metadata: Metadata = {
  title: "Ask Rumi",
  description: "Describe what's on your mind; we'll point you to poems that speak to it.",
};

export default async function AskPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {dict.ask.title}
        </h1>
        <p className="text-muted-foreground mt-3">{dict.ask.subtitle}</p>
      </div>
      <div className="mt-10">
        <AskRumi />
      </div>
    </div>
  );
}
