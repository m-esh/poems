"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/locale-constants";
import { getDictionary, getThemeLabels, type Dictionary } from "@/lib/i18n/dictionary";
import type { Theme } from "@/types/poem";

interface LanguageContextValue {
  locale: Locale;
  dict: Dictionary;
  themeLabels: Record<Theme, string>;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
      document.documentElement.lang = next;
      document.documentElement.dir = next === "fa" ? "rtl" : "ltr";
      router.refresh();
    },
    [router],
  );

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dict: getDictionary(locale),
        themeLabels: getThemeLabels(locale),
        setLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
