import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { FavoriteButton } from "@/components/poems/favorite-button";
import { SharePoemDialog } from "@/components/poems/share-poem-dialog";
import { RandomPoemButton } from "@/components/poems/random-poem-button";
import { PoemLinesReveal } from "@/components/poems/poem-lines-reveal";
import { PoemCard } from "@/components/poems/poem-card";
import {
  THEME_LABELS,
  getAllPoems,
  getPoemBySlug,
  getPoemsByPoet,
  getPoetBySlug,
} from "@/lib/poems";

export function generateStaticParams() {
  return getAllPoems().map((poem) => ({ slug: poem.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const poem = getPoemBySlug(slug);
  if (!poem) return {};
  const poet = getPoetBySlug(poem.poetSlug);
  return {
    title: poem.title,
    description: `${poem.title} by ${poet?.name ?? "unknown"} — ${poem.translation.filter(Boolean)[0] ?? ""}`,
  };
}

export default async function PoemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const poem = getPoemBySlug(slug);
  if (!poem) notFound();

  const poet = getPoetBySlug(poem.poetSlug);
  const related = getPoemsByPoet(poem.poetSlug)
    .filter((p) => p.slug !== poem.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="text-center">
        {poet && (
          <Link
            href={`/poets/${poet.slug}`}
            className="text-secondary text-xs tracking-[0.3em] uppercase hover:underline"
          >
            {poet.name}
          </Link>
        )}
        <h1 className="font-display mt-3 text-4xl font-semibold text-balance sm:text-5xl">
          {poem.title}
        </h1>
        {poem.titleOriginal && (
          <p className="font-nastaliq text-gold mt-2 text-2xl" dir="rtl">
            {poem.titleOriginal}
          </p>
        )}
        <p className="text-muted-foreground mt-3 text-sm">
          {poem.collection} · {poem.century}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {poem.themes.map((theme) => (
            <Link
              key={theme}
              href={`/library?theme=${theme}`}
              className="-my-2 inline-flex items-center py-2"
            >
              <Badge variant="outline">{THEME_LABELS[theme]}</Badge>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <FavoriteButton slug={poem.slug} showLabel size="default" />
          <SharePoemDialog poem={poem} poet={poet} />
        </div>
      </header>

      <OrnamentalDivider className="my-12" />

      {poem.originalText && (
        <section className="border-gold/30 bg-card/60 mb-12 rounded-lg border p-6 sm:p-8">
          <p className="text-secondary mb-4 text-center text-xs tracking-[0.3em] uppercase">
            Original Persian
          </p>
          <div
            dir="rtl"
            className="font-nastaliq flex flex-col gap-2 text-center text-2xl leading-loose sm:text-3xl"
          >
            {poem.originalText.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-3" aria-hidden />
              ) : (
                <p key={i}>{line}</p>
              ),
            )}
          </div>
        </section>
      )}

      <section className="font-display text-foreground text-2xl sm:text-3xl">
        <PoemLinesReveal lines={poem.translation} className="gap-3 sm:gap-4" />
      </section>

      <p className="text-muted-foreground mt-8 text-right text-sm italic">
        — {poem.translator}
      </p>

      <Separator className="my-12" />

      <section>
        <h2 className="font-display text-2xl">Reflection &amp; context</h2>
        <p className="text-foreground/90 mt-4 leading-relaxed text-pretty">{poem.note}</p>
      </section>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <RandomPoemButton variant="outline" currentSlug={poem.slug}>
          Read another poem
        </RandomPoemButton>
        {poet && (
          <Link
            href={`/poets/${poet.slug}`}
            className="text-secondary text-sm hover:underline"
          >
            More from {poet.name} →
          </Link>
        )}
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-center text-2xl">More from {poet?.name}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PoemCard key={p.slug} poem={p} poet={poet} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
