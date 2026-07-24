import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { PoemCard } from "@/components/poems/poem-card";
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

  const poems = getPoemsByPoet(poet.slug);
  const epigraph = getPoemBySlug("song-of-the-reed")?.translation.find(Boolean);
  const bioParagraphs = poet.bio.split("\n\n");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-nastaliq text-gold text-3xl" dir="rtl">
          {poet.nameOriginal}
        </p>
        <h1 className="font-display mt-3 text-5xl font-semibold">{poet.name}</h1>
        <p className="text-secondary mt-2 text-sm tracking-[0.3em] uppercase">
          {poet.years} · {poet.era}
        </p>
        {epigraph && (
          <p className="font-display text-foreground/70 mt-6 text-xl italic">
            &ldquo;{epigraph}&rdquo;
          </p>
        )}
        <OrnamentalDivider className="my-8" />
        <div className="text-foreground/90 flex flex-col gap-5 text-left leading-relaxed text-pretty sm:text-lg">
          {bioParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-center text-3xl">
          {poems.length} {poems.length === 1 ? "poem" : "poems"} in the collection
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem) => (
            <PoemCard key={poem.slug} poem={poem} poet={poet} />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/library" className="text-secondary text-sm hover:underline">
          ← Browse the poems
        </Link>
      </div>
    </div>
  );
}
