"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Check, Copy, Download, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/site/language-provider";
import type { Poem, Poet } from "@/types/poem";

export function SharePoemDialog({ poem, poet }: { poem: Poem; poet: Poet | undefined }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { locale, dict } = useLanguage();
  const isFa = locale === "fa";

  const excerpt = (isFa && poem.originalText ? poem.originalText : poem.translation)
    .filter(Boolean)
    .slice(0, 4);
  const title = isFa && poem.titleOriginal ? poem.titleOriginal : poem.title;
  const poetName = isFa ? (poet?.nameOriginal ?? poet?.name) : poet?.name;
  const url =
    typeof window !== "undefined" ? `${window.location.origin}/poem/${poem.slug}` : "";

  async function handleCopyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function handleDownload() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `${poem.slug}-golshan-raz.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant="outline" className="gap-2" onClick={() => setOpen(true)}>
        <Share2 className="size-4" />
        {dict.common.share}
      </Button>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{dict.poem.shareTitle}</DialogTitle>
          <DialogDescription>{dict.poem.shareDescription}</DialogDescription>
        </DialogHeader>

        <div
          ref={cardRef}
          className="border-gold/40 from-parchment to-parchment/80 text-ink pattern-lattice flex aspect-[4/5] flex-col justify-between rounded-lg border bg-gradient-to-b p-8"
        >
          <div className="bg-parchment/90 text-ink/60 p-2 text-center text-[11px] tracking-[0.3em] uppercase">
            Golshan Raz
          </div>
          <div className="bg-parchment/90 flex flex-1 flex-col justify-center gap-4 px-2 py-4 text-center">
            <p
              className={
                isFa && poem.originalText
                  ? "font-nastaliq text-xl leading-loose"
                  : "font-display text-lg leading-relaxed italic"
              }
              dir={isFa && poem.originalText ? "rtl" : undefined}
            >
              {excerpt.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className="bg-parchment/90 p-2 text-center text-sm">
            <p
              className={
                isFa && poem.titleOriginal
                  ? "font-nastaliq text-lg"
                  : "font-display text-base font-semibold"
              }
              dir={isFa && poem.titleOriginal ? "rtl" : undefined}
            >
              {title}
            </p>
            <p className="text-ink/60 text-xs">{poetName}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            variant="secondary"
            className="flex-1 gap-2"
            onClick={handleDownload}
            disabled={downloading}
          >
            <Download className="size-4" />
            {downloading ? "…" : dict.common.downloadImage}
          </Button>
          <Button variant="outline" className="flex-1 gap-2" onClick={handleCopyLink}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? dict.common.copied : dict.common.copyLink}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
