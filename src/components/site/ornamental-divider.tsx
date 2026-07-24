import { cn } from "@/lib/utils";

/** A small eight-pointed star flanked by rules, a recurring Persian manuscript motif. */
export function OrnamentalDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-xs items-center gap-3", className)}
      aria-hidden="true"
    >
      <span className="to-border h-px flex-1 bg-gradient-to-r from-transparent" />
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-gold shrink-0">
        <g fill="currentColor">
          <rect x="10.5" y="1" width="3" height="22" transform="rotate(0 12 12)" />
          <rect x="10.5" y="1" width="3" height="22" transform="rotate(45 12 12)" />
          <rect x="10.5" y="1" width="3" height="22" transform="rotate(90 12 12)" />
          <rect x="10.5" y="1" width="3" height="22" transform="rotate(135 12 12)" />
        </g>
        <circle
          cx="12"
          cy="12"
          r="2.25"
          className="fill-background stroke-gold"
          strokeWidth="1"
        />
      </svg>
      <span className="to-border h-px flex-1 bg-gradient-to-l from-transparent" />
    </div>
  );
}
