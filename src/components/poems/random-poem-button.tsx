"use client";

import { useRouter } from "next/navigation";
import { Shuffle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getRandomPoem } from "@/lib/poems";
import { cn } from "@/lib/utils";

export function RandomPoemButton({
  className,
  variant = "ghost",
  size = "default",
  currentSlug,
  children,
}: {
  className?: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  currentSlug?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn("gap-2", className)}
      onClick={() => {
        const poem = getRandomPoem(currentSlug);
        router.push(`/poem/${poem.slug}`);
      }}
    >
      <Shuffle className="size-4" />
      {children ?? "Surprise me"}
    </Button>
  );
}
