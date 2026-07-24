import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { LifeTimeline } from "@/components/site/life-timeline";
import { PoemCard } from "@/components/poems/poem-card";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/locale";
import { getAllPoets, getPoemBySlug, getPoemsByPoet, getPoetBySlug } from "@/lib/poems";

export function generateStaticParams() {
  return getAllPoets().map((poet) => ({ slug: poet.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const poet = getPoetBySlug(slug);
  if (!poet) return {};
  const [firstParagraph] = poet.bio.split("\n\n");
  return { title: poet.name, description: firstParagraph };
}

export default async function PoetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const poet = getPoetBySlug(slug);
  if (!poet) notFound();

  const locale = await getLocale();
  const dict = getDictionary(locale);
  const isFa = locale === "fa";

  const poems = getPoemsByPoet(poet.slug);
  const epigraphPoem = getPoemBySlug("song-of-the-reed");
  const epigraph = isFa
    ? epigraphPoem?.originalText?.find(Boolean)
    : epigraphPoem?.translation.find(Boolean);
  const bioParagraphs = (isFa ? poet.bioFa : poet.bio).split("\n\n");
  const poemsCountLabel =
    poems.length === 1
      ? dict.poet.poemsInCollectionOne
      : dict.poet.poemsInCollection(poems.length);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-nastaliq text-gold text-3xl" dir="rtl">
          {poet.nameOriginal}
        </p>
        <h1 className="font-display mt-3 text-5xl font-semibold">
          {isFa ? poet.nameOriginal : poet.name}
        </h1>
        <p className="text-secondary mt-2 text-sm tracking-[0.3em] uppercase" dir="ltr">
          {poet.years} · {poet.era}
        </p>
        {epigraph && (
          <p
            className={
              isFa
                ? "font-nastaliq text-foreground/70 mt-6 text-2xl"
                : "font-display text-foreground/70 mt-6 text-xl italic"
            }
            dir={isFa ? "rtl" : undefined}
          >
            &ldquo;{epigraph}&rdquo;
          </p>
        )}
        <OrnamentalDivider className="my-8" />
        <div
          className="text-foreground/90 flex flex-col gap-5 text-start leading-relaxed text-pretty sm:text-lg"
          dir={isFa ? "rtl" : "ltr"}
        >
          {bioParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-center text-3xl">{dict.poet.lifeTimeline}</h2>
        <div className="mt-10">
          <LifeTimeline items={dict.poet.timeline} rtl={isFa} />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-center text-3xl">{poemsCountLabel}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem) => (
            <PoemCard key={poem.slug} poem={poem} poet={poet} locale={locale} />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/library" className="text-secondary text-sm hover:underline">
          {isFa ? "→" : "←"} {dict.poet.browsePoems}
        </Link>
      </div>
    </div>
  );
}
