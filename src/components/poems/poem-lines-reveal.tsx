"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Renders poem lines with a gentle scroll-triggered reveal, evoking a slow,
 * unhurried recitation. Blank strings in `lines` mark stanza breaks.
 */
export function PoemLinesReveal({
  lines,
  className,
  lineClassName,
  dir = "ltr",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  dir?: "ltr" | "rtl";
}) {
  const lineIndexes: number[] = [];
  lines.reduce((count, line) => {
    const next = line === "" ? count : count + 1;
    lineIndexes.push(next);
    return next;
  }, -1);

  return (
    <div className={cn("flex flex-col", className)} dir={dir}>
      {lines.map((line, i) => {
        if (line === "") {
          return <div key={i} aria-hidden className="h-4 sm:h-6" />;
        }
        const lineIndex = lineIndexes[i];
        return (
          <motion.p
            key={i}
            initial={{ opacity: 0.55, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4, margin: "0px 0px -80px 0px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: Math.min(lineIndex * 0.05, 0.6),
            }}
            className={cn("leading-relaxed text-pretty sm:leading-loose", lineClassName)}
          >
            {line}
          </motion.p>
        );
      })}
    </div>
  );
}
