interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export function LifeTimeline({
  items,
  rtl = false,
}: {
  items: TimelineItem[];
  rtl?: boolean;
}) {
  return (
    <ol
      className="border-border relative flex flex-col gap-8 border-s-2 ps-6 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:border-s-0 sm:ps-0"
      dir={rtl ? "rtl" : "ltr"}
    >
      {items.map((item, i) => (
        <li key={i} className="sm:border-border relative sm:border-s-2 sm:ps-6">
          <span
            aria-hidden
            className="bg-gold absolute -start-[1.65rem] top-1.5 size-2.5 rounded-full sm:-start-[0.35rem]"
          />
          {item.year && (
            <p className="text-secondary text-xs font-semibold tracking-[0.2em]">
              {item.year}
            </p>
          )}
          <p className="font-display mt-1 text-lg">{item.title}</p>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
