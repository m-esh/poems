import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { PoemCard } from "@/components/poems/poem-card";
import { getAllPoets, getPoemsByPoet, getPoetBySlug } from "@/lib/poems";

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
  return { title: poet.name, description: poet.bio };
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
        <OrnamentalDivider className="my-8" />
        <p className="text-foreground/90 text-left leading-relaxed text-pretty sm:text-lg">
          {poet.bio}
        </p>
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
        <Link href="/poets" className="text-secondary text-sm hover:underline">
          ← Back to all poets
        </Link>
      </div>
    </div>
  );
}
