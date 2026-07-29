"use client";

import Link from "next/link";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";
import { useLanguage } from "@/components/site/language-provider";

export function SiteFooter() {
  const { dict } = useLanguage();

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/library", label: dict.nav.library },
    { href: "/poets/rumi", label: dict.nav.rumi },
    { href: "/ideas", label: dict.nav.ideas },
    { href: "/stories", label: dict.nav.stories },
    { href: "/thinkers", label: dict.nav.thinkers },
    { href: "/for-life", label: dict.nav.forLife },
    { href: "/ask", label: dict.nav.ask },
    { href: "/resources", label: dict.nav.resources },
    { href: "/search", label: dict.nav.search },
    { href: "/favorites", label: dict.nav.favorites },
  ];

  return (
    <footer className="border-border/70 pattern-lattice relative z-[2] mt-24 border-t">
      <div className="bg-background/92 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <OrnamentalDivider className="mb-8" />
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-display text-muted-foreground text-xl italic">
              &ldquo;{dict.footer.quote}&rdquo;
            </p>
            <nav className="text-foreground/70 -my-2 flex flex-wrap justify-center gap-x-4 text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground -my-2 inline-flex items-center py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-muted-foreground/70 text-xs">
              گلشن راز · {dict.footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
