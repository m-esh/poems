import Link from "next/link";

import { OrnamentalDivider } from "@/components/site/ornamental-divider";

export function SiteFooter() {
  return (
    <footer className="border-border/70 pattern-lattice relative z-[2] mt-24 border-t">
      <div className="bg-background/92 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <OrnamentalDivider className="mb-8" />
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-display text-muted-foreground text-xl italic">
              &ldquo;Listen to the reed, how it tells its tale.&rdquo;
            </p>
            <nav className="text-foreground/70 -my-2 flex flex-wrap justify-center gap-x-4 text-sm">
              <Link
                href="/"
                className="hover:text-foreground -my-2 inline-flex items-center py-2"
              >
                Home
              </Link>
              <Link
                href="/library"
                className="hover:text-foreground -my-2 inline-flex items-center py-2"
              >
                Library
              </Link>
              <Link
                href="/poets/rumi"
                className="hover:text-foreground -my-2 inline-flex items-center py-2"
              >
                Rumi
              </Link>
              <Link
                href="/search"
                className="hover:text-foreground -my-2 inline-flex items-center py-2"
              >
                Search
              </Link>
              <Link
                href="/favorites"
                className="hover:text-foreground -my-2 inline-flex items-center py-2"
              >
                Favorites
              </Link>
            </nav>
            <p className="text-muted-foreground/70 text-xs">
              گلشن راز · a rose garden of secrets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
