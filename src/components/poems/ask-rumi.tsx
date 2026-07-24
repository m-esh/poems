"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PoemCard } from "@/components/poems/poem-card";
import { useLanguage } from "@/components/site/language-provider";
import { getAllPoems, getPoetBySlug } from "@/lib/poems";
import type { Poem } from "@/types/poem";

/** Loose synonym groups so "scared" also matches poems tagged/worded around "fear". Not exhaustive — a hint layer, not a model. */
const SYNONYMS: string[][] = [
  [
    "afraid",
    "scared",
    "fear",
    "anxious",
    "anxiety",
    "worry",
    "worried",
    "ترس",
    "می‌ترسم",
    "نگران",
  ],
  ["sad", "grief", "loss", "lost", "mourning", "غم", "فقدان", "سوگ", "گم"],
  ["alone", "lonely", "loneliness", "isolated", "تنها", "تنهایی"],
  ["love", "heart", "beloved", "loved", "عشق", "دل", "معشوق"],
  ["angry", "anger", "rage", "frustrated", "عصبانی", "خشم"],
  ["death", "dying", "mortality", "impermanent", "مرگ", "ناپایداری"],
  ["god", "divine", "faith", "prayer", "spiritual", "خدا", "الهی", "دعا"],
  ["wine", "drunk", "ecstasy", "tavern", "شراب", "می", "مستی", "میخانه"],
  ["change", "transformation", "growth", "تحول", "تغییر"],
  ["wisdom", "knowledge", "understand", "understanding", "حکمت", "دانستن", "فهمیدن"],
];

function expand(tokens: string[]): string[] {
  const out = new Set(tokens);
  for (const token of tokens) {
    for (const group of SYNONYMS) {
      if (group.includes(token)) {
        for (const g of group) out.add(g);
      }
    }
  }
  return Array.from(out);
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((t) => t.length > 2);
}

interface Scored {
  poem: Poem;
  score: number;
}

export function AskRumi() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { locale, dict } = useLanguage();
  const isFa = locale === "fa";
  const poems = getAllPoems();

  const results = useMemo<Scored[]>(() => {
    const tokens = expand(tokenize(query));
    if (tokens.length === 0) return [];

    return poems
      .map((poem) => {
        const haystack = [
          poem.title,
          poem.titleOriginal ?? "",
          poem.note,
          poem.noteFa,
          ...poem.translation,
          ...(poem.originalText ?? []),
          ...poem.themes,
        ]
          .join(" ")
          .toLowerCase();

        const score = tokens.reduce(
          (sum, token) => sum + (haystack.includes(token) ? 1 : 0),
          0,
        );
        return { poem, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [query, poems]);

  const quickWords = isFa
    ? ["ترس", "عشق", "فقدان", "تنهایی", "خشم", "مرگ"]
    : ["fear", "love", "loss", "alone", "anger", "death"];

  return (
    <div>
      <form
        className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSubmitted(true);
          }}
          placeholder={dict.ask.placeholder}
          className="h-12 text-base"
          dir={isFa ? "rtl" : undefined}
        />
        <Button type="submit" size="lg" className="gap-2">
          <Sparkles className="size-4" />
          {dict.ask.submit}
        </Button>
      </form>

      <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-center text-xs leading-relaxed">
        {dict.ask.disclaimer}
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-muted-foreground text-xs">{dict.ask.tryWords}</span>
        {quickWords.map((word) => (
          <button
            key={word}
            type="button"
            className="border-border/70 hover:bg-accent/10 -my-2 rounded-full border px-3 py-2 text-xs"
            onClick={() => {
              setQuery(word);
              setSubmitted(true);
            }}
          >
            {word}
          </button>
        ))}
      </div>

      {submitted && query.trim() !== "" && (
        <div className="mt-10">
          {results.length === 0 ? (
            <p className="text-muted-foreground text-center text-sm">
              {dict.ask.noMatch}
            </p>
          ) : (
            <>
              <p className="text-muted-foreground text-sm">{dict.ask.resultsIntro}</p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map(({ poem }) => (
                  <PoemCard
                    key={poem.slug}
                    poem={poem}
                    poet={getPoetBySlug(poem.poetSlug)}
                    locale={locale}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
