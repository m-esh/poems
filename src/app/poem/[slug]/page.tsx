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
import { getDictionary, getThemeLabels } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import { getAllPoems, getPoemBySlug, getPoemsByPoet, getPoetBySlug } from "@/lib/poems";

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

  const locale = await getLocale();
  const dict = getDictionary(locale);
  const themeLabels = getThemeLabels(locale);
  const isFa = locale === "fa";
  const hasOriginal = Boolean(poem.originalText);

  const poet = getPoetBySlug(poem.poetSlug);
  const related = getPoemsByPoet(poem.poetSlug)
    .filter((p) => p.slug !== poem.slug)
    .slice(0, 3);

  const primaryTitle = isFa && poem.titleOriginal ? poem.titleOriginal : poem.title;
  const secondaryTitle = isFa && poem.titleOriginal ? poem.title : poem.titleOriginal;
  const poetName = isFa ? (poet?.nameOriginal ?? poet?.name) : poet?.name;
  const note = isFa ? poem.noteFa : poem.note;
  const translator = isFa ? poem.translatorFa : poem.translator;

  const mainLines = isFa && hasOriginal ? poem.originalText! : poem.translation;
  const mainDir = isFa && hasOriginal ? "rtl" : "ltr";
  const secondaryLines = isFa ? poem.translation : poem.originalText;
  const secondaryLabel = isFa ? dict.poem.englishTranslation : dict.poem.originalPersian;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="text-center">
        {poet && (
          <Link
            href={`/poets/${poet.slug}`}
            className="text-secondary text-xs tracking-[0.3em] uppercase hover:underline"
          >
            {poetName}
          </Link>
        )}
        <h1
          className={
            isFa && poem.titleOriginal
              ? "font-nastaliq mt-3 text-4xl text-balance sm:text-5xl"
              : "font-display mt-3 text-4xl font-semibold text-balance sm:text-5xl"
          }
          dir={isFa && poem.titleOriginal ? "rtl" : undefined}
        >
          {primaryTitle}
        </h1>
        {secondaryTitle && (
          <p
            className={
              isFa
                ? "text-muted-foreground mt-2 text-lg"
                : "font-nastaliq text-gold mt-2 text-2xl"
            }
            dir={isFa ? undefined : "rtl"}
          >
            {secondaryTitle}
          </p>
        )}
        <p className="text-muted-foreground mt-3 text-sm" dir="ltr">
          {poem.collection} · {poem.century}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {poem.themes.map((theme) => (
            <Link
              key={theme}
              href={`/library?theme=${theme}`}
              className="-my-2 inline-flex items-center py-2"
            >
              <Badge variant="outline">{themeLabels[theme]}</Badge>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <FavoriteButton slug={poem.slug} showLabel size="default" />
          <SharePoemDialog poem={poem} poet={poet} />
        </div>
      </header>

      <OrnamentalDivider className="my-12" />

      {secondaryLines && (
        <section className="border-gold/30 bg-card/60 mb-12 rounded-lg border p-6 sm:p-8">
          <p className="text-secondary mb-4 text-center text-xs tracking-[0.3em] uppercase">
            {secondaryLabel}
          </p>
          <div
            dir={isFa ? "ltr" : "rtl"}
            className={
              isFa
                ? "flex flex-col gap-2 text-center text-lg leading-relaxed italic sm:text-xl"
                : "font-nastaliq flex flex-col gap-2 text-center text-2xl leading-loose sm:text-3xl"
            }
          >
            {secondaryLines.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-3" aria-hidden />
              ) : (
                <p key={i}>{line}</p>
              ),
            )}
          </div>
        </section>
      )}

      <section
        className={
          isFa && hasOriginal
            ? "font-nastaliq text-foreground text-2xl sm:text-3xl"
            : "font-display text-foreground text-2xl sm:text-3xl"
        }
      >
        <PoemLinesReveal
          lines={mainLines}
          dir={mainDir}
          className="gap-3 sm:gap-4"
          lineClassName={isFa && hasOriginal ? "leading-loose" : undefined}
        />
      </section>

      <p className="text-muted-foreground mt-8 text-end text-sm italic">— {translator}</p>

      <Separator className="my-12" />

      <section>
        <h2 className="font-display text-2xl">{dict.poem.reflectionContext}</h2>
        <p className="text-foreground/90 mt-4 leading-relaxed text-pretty">{note}</p>
      </section>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <RandomPoemButton variant="outline" currentSlug={poem.slug}>
          {dict.poem.readAnother}
        </RandomPoemButton>
        {poet && (
          <Link
            href={`/poets/${poet.slug}`}
            className="text-secondary text-sm hover:underline"
          >
            {dict.poem.moreFrom} {poetName} →
          </Link>
        )}
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-center text-2xl">
            {dict.poem.moreFrom} {poetName}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PoemCard key={p.slug} poem={p} poet={poet} locale={locale} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
