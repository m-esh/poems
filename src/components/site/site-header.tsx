"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { FavoritesNavLink } from "@/components/site/favorites-nav-link";
import { RandomPoemButton } from "@/components/poems/random-poem-button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/library", label: "Library" },
  { href: "/poets", label: "Poets" },
  { href: "/search", label: "Search" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/70 bg-background/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span
            aria-hidden
            className="border-gold/60 text-gold flex size-8 items-center justify-center rounded-full border transition-transform group-hover:rotate-45"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="10.5" y="1" width="3" height="22" />
              <rect x="10.5" y="1" width="3" height="22" transform="rotate(45 12 12)" />
              <rect x="10.5" y="1" width="3" height="22" transform="rotate(90 12 12)" />
              <rect x="10.5" y="1" width="3" height="22" transform="rotate(135 12 12)" />
            </svg>
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide">
            Golshan Raz
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-foreground/80 hover:text-foreground text-sm font-medium transition-colors",
                pathname.startsWith(link.href) && "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <FavoritesNavLink />
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <RandomPoemButton variant="ghost" className="text-sm">
            Poem of chance
          </RandomPoemButton>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Link href="/search" aria-label="Search" className="p-2">
            <Search className="size-5" />
          </Link>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5">
              <SheetHeader>
                <SheetTitle>Golshan Raz</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-xl"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/favorites"
                  onClick={() => setOpen(false)}
                  className="font-display text-xl"
                >
                  Favorites
                </Link>
                <div onClick={() => setOpen(false)}>
                  <RandomPoemButton variant="secondary" className="w-full justify-center">
                    Poem of chance
                  </RandomPoemButton>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
