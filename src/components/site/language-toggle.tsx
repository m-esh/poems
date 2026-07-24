"use client";

import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/components/site/language-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const isFa = locale === "fa";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={isFa ? "Switch to English" : "تغییر به فارسی"}
          onClick={() => setLocale(isFa ? "en" : "fa")}
          className="gap-1 px-2 text-xs font-semibold"
        >
          <Languages className="size-4" />
          <span aria-hidden>{isFa ? "EN" : "فا"}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{isFa ? "Switch to English" : "تغییر به فارسی"}</TooltipContent>
    </Tooltip>
  );
}
