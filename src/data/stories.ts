import type { Locale } from "@/lib/i18n/locale-constants";

export interface Story {
  slug: string;
  title: Record<Locale, string>;
  titleOriginal?: string;
  source: string;
  story: Record<Locale, string[]>;
  meaning: Record<Locale, string>;
  teaching: Record<Locale, string>;
  today: Record<Locale, string>;
}

export const stories: Story[] = [
  {
    slug: "elephant-in-the-dark",
    title: { en: "The Elephant in the Dark", fa: "فیل در تاریکی" },
    titleOriginal: "پیل اندر خانهٔ تاریک",
    source: "Masnavi-ye Ma'navi, Book III",
    story: {
      en: [
        "Some people brought an elephant to town and put it in a dark shed, and a crowd came to see it — but since the room had no light, they could only know the animal by touch.",
        "One put a hand on its ear and said an elephant is like a great fan. Another felt its leg and was sure it was a kind of pillar. A third touched its back and called it a throne; a fourth found the trunk and said, with total confidence, that an elephant is exactly like a hose.",
        "Each was telling the truth about the part they had touched, and each was wrong about the whole. If each of them had held a candle, Rumi says, their accounts would not have differed.",
      ],
      fa: [
        "گروهی فیلی به شهر آوردند و آن را در طویله‌ای تاریک نهادند، و مردم برای دیدنش آمدند — اما چون در آن اتاق نوری نبود، تنها از راه لمس می‌توانستند آن حیوان را بشناسند.",
        "یکی دست بر گوشش نهاد و گفت فیل چیزی چون بادبزنی بزرگ است. دیگری پایش را لمس کرد و یقین داشت که ستونی است. سومی به پشتش دست کشید و آن را تختی خواند؛ چهارمی خرطوم را یافت و با اطمینان کامل گفت فیل درست مانند نی‌ای بلند است.",
        "هرکدام درباره‌ی همان بخشی که لمس کرده بودند راست می‌گفتند، و هرکدام درباره‌ی کلیت آن در اشتباه بودند. مولانا می‌گوید اگر هرکدام شمعی در دست داشتند، روایت‌هایشان با هم اختلافی نمی‌داشت.",
      ],
    },
    meaning: {
      en: "Each person in the dark is not lying — they are reporting exactly what they felt. The story isn't about dishonesty; it's about the limits of partial contact with something too large to hold in one hand.",
      fa: "هیچ‌کدام از آن مردم در تاریکی دروغ نمی‌گویند — هرکدام دقیقاً همان چیزی را گزارش می‌کنند که لمس کرده‌اند. این حکایت درباره‌ی نادرستی نیست؛ درباره‌ی محدودیت تماسی جزئی با چیزی است که بزرگ‌تر از آن است که در یک دست جای گیرد.",
    },
    teaching: {
      en: "Rumi uses the elephant as a figure for the divine, or for any truth too vast for a single vantage point. Certainty earned from only one angle — one school, one sense, one argument — will always feel complete to the person holding it, and will always be partial. The candle he wishes they had is not more cleverness; it's a wider light.",
      fa: "مولانا فیل را نمادی از امر الهی می‌سازد، یا هر حقیقتی که برای یک زاویه‌ی دید به‌تنهایی بیش‌ازحد بزرگ است. یقینی که تنها از یک زاویه به‌دست آمده — یک مکتب، یک حس، یک استدلال — همواره برای دارنده‌اش کامل احساس می‌شود، و همواره ناقص است. شمعی که مولانا آرزو می‌کند در دستشان بود، هوشی بیشتر نیست؛ نوری گسترده‌تر است.",
    },
    today: {
      en: "The next time you're certain someone else is simply wrong, it may be worth asking which part of the elephant they were standing next to — and which part you were.",
      fa: "دفعه‌ی بعد که یقین دارید دیگری به‌سادگی در اشتباه است، شاید ارزشش را داشته باشد که بپرسید او کنار کدام بخش از فیل ایستاده بود — و شما کدام بخش را لمس کرده بودید.",
    },
  },
  {
    slug: "moses-and-the-shepherd",
    title: { en: "Moses and the Shepherd", fa: "موسی و شبان" },
    titleOriginal: "قصهٔ موسی و شبان",
    source: "Masnavi-ye Ma'navi, Book II",
    story: {
      en: [
        'Moses came across a shepherd praying out loud in the wilderness. "O God," the shepherd said, "where are you, that I might become your servant — mend your shoes, comb your hair, wash your clothes, kill a louse for you, bring you milk?"',
        'Moses cut him off, appalled. "Who are you talking to like this? This is blasphemy — God has no body, no hands to mend, no hair to comb." The shepherd, ashamed, tore his shirt, gave a bitter sigh, and fled into the desert, empty of words.',
        'Then a voice came to Moses: "You have separated Me from My servant. You came to unite, not to sever. Every creature has its own way of praising and its own way of understanding. What is sweet syrup to a Persian speaker is poison to an Arabic speaker — but I do not listen for the words. I look at the heart, at the humility, not at the grammar of the prayer."',
        "Moses ran into the wilderness to find the shepherd and take back what he'd said, and found him transformed — no longer needing the old words at all, because something else had opened in him.",
      ],
      fa: [
        "موسی شبانی را یافت که در بیابان بلندبلند دعا می‌کرد. شبان می‌گفت: «ای خدا، کجایی که بنده‌ات شوم — کفشت را وصله زنم، مویت را شانه کنم، جامه‌ات را بشویم، شپشت را بکشم، برایت شیر آورم؟»",
        "موسی با خشم سخنش را برید: «با که این‌گونه سخن می‌گویی؟ این کفر است — خدا را جسمی نیست، دستی که وصله خواهد، مویی که شانه خواهد.» شبان، شرمسار، جامه‌اش را درید، آهی تلخ کشید، و بی‌کلام به بیابان گریخت.",
        "آنگاه ندایی به موسی رسید: «تو مرا از بنده‌ام جدا کردی. تو آمدی که بپیوندی، نه که ببری. هر آفریده‌ای زبان ستایش خود را دارد و راه فهم خویش را. آنچه برای فارسی‌زبانی شهدی شیرین است، برای عرب‌زبانی زهر است — اما من به کلمات گوش نمی‌سپارم. به دل می‌نگرم، به فروتنی، نه به دستور زبان دعا.»",
        "موسی به بیابان دوید تا شبان را بیابد و سخنش را پس گیرد، و او را دگرگون‌شده یافت — دیگر نیازی به آن واژه‌های کهن نداشت، زیرا چیزی دیگر در او گشوده شده بود.",
      ],
    },
    meaning: {
      en: "Correctness and connection are not the same thing. The shepherd's theology was clumsy; his love was not. Moses, for all his authority, had the form right and missed the substance.",
      fa: "درستی و پیوند یک چیز نیستند. کلام‌شناسی شبان دست‌وپاشکسته بود؛ عشقش نبود. موسی، با همه‌ی جایگاهش، صورت را درست داشت و جوهر را از دست داد.",
    },
    teaching: {
      en: "This is one of Rumi's clearest statements against policing other people's devotion by its outward form. He was, by training, a jurist — someone whose job was precisely to specify correct religious practice — which makes his insistence here on the primacy of the heart over the letter especially pointed.",
      fa: "این یکی از روشن‌ترین بیانیه‌های مولانا علیه داوری درباره‌ی عبادت دیگران بر پایه‌ی صورت ظاهری آن است. او خود، به‌حکم تحصیل، فقیهی بود — کسی که کارش دقیقاً تعیین صورت درست عبادت بود — و همین اصرار او بر برتری دل بر حرف، آن را ویژه‌تر می‌کند.",
    },
    today: {
      en: "Before correcting how someone else prays, grieves, or hopes, it's worth asking whether you're protecting the truth, or just its dialect.",
      fa: "پیش از آنکه شیوه‌ی دعا کردن، سوگواری یا امیدوار بودن کسی دیگر را اصلاح کنید، شاید ارزشش را داشته باشد که بپرسید آیا از حقیقت دفاع می‌کنید، یا فقط از گویش آن.",
    },
  },
  {
    slug: "merchant-and-the-parrot",
    title: { en: "The Merchant and the Parrot", fa: "بازرگان و طوطی" },
    titleOriginal: "قصهٔ بازرگان و طوطی",
    source: "Masnavi-ye Ma'navi, Book I",
    story: {
      en: [
        "A merchant kept a beloved parrot in a cage, and before leaving on a trading journey to India, he asked it if it wanted anything brought back. The parrot asked him to find its wild cousins there and pass along a simple message: that it was alive, but caged.",
        "In India, the merchant delivered the message to a gathering of wild parrots — and one of them, on hearing it, trembled, fell from its branch, and lay still. The merchant, sorry to have caused such grief, thought no more of it and went home.",
        "When he told his own parrot what had happened, the caged bird gave the same shudder, fell to the bottom of its cage, and appeared to be dead. Heartbroken, the merchant opened the cage and lifted the small body out to bury it — and the parrot instantly took flight and landed on a high branch outside.",
        '"That other parrot," it explained, "wasn\'t dying. It was teaching me: to be truly free, first play dead to everything that has been keeping you caged."',
      ],
      fa: [
        "بازرگانی طوطی‌ای دوست‌داشتنی در قفس نگه می‌داشت، و پیش از رفتن به سفری تجاری به هند، از او پرسید آیا چیزی می‌خواهد که برایش بیاورد. طوطی از او خواست خویشاوندان وحشی‌اش را در آنجا بیابد و پیامی ساده به آنان برساند: که او زنده است، اما در قفس.",
        "در هند، بازرگان پیام را به جمعی از طوطیان وحشی رساند — و یکی از آنان، چون شنید، لرزید، از شاخه فروافتاد، و بی‌حرکت ماند. بازرگان، از اینکه چنین اندوهی برانگیخته، دلگیر شد اما بیش از آن نیندیشید و به خانه بازگشت.",
        "چون آنچه رخ داده بود را برای طوطی خود بازگفت، پرنده‌ی محبوسش نیز همان‌گونه لرزید، به کف قفس افتاد، و مرده به‌نظر رسید. بازرگان دل‌شکسته، در قفس را گشود و پیکر کوچک را برای دفن بیرون آورد — و طوطی بی‌درنگ پرکشید و بر شاخه‌ای بلند در بیرون نشست.",
        "طوطی توضیح داد: «آن طوطی دیگر در حال مردن نبود. به من می‌آموخت: برای آزادی راستین، نخست باید نسبت به هرچه تو را در قفس نگه داشته، خود را به‌مردن بزنی.»",
      ],
    },
    meaning: {
      en: "Freedom, in this story, doesn't come from the cage door opening from outside. It comes from the caged self finding a way to stop being the self that needed the cage explained to it.",
      fa: "آزادی، در این حکایت، از باز شدن در قفس از بیرون نمی‌آید. از این می‌آید که خودِ محبوس راهی بیابد تا دیگر همان خودی نباشد که نیاز داشت قفس برایش توضیح داده شود.",
    },
    teaching: {
      en: "Rumi returns often to this idea of a death before death — fana, the ego's self-forgetting — as the real precondition for spiritual freedom, more than any change in outward circumstance. The wild parrot's collapse is instruction, not tragedy.",
      fa: "مولانا بارها به این اندیشه‌ی مرگ پیش از مرگ بازمی‌گردد — فنا، خودفراموشی نفس — به‌عنوان پیش‌شرط راستین آزادی معنوی، بیش از هر تغییری در شرایط بیرونی. فروافتادن طوطی وحشی، آموزش است، نه تراژدی.",
    },
    today: {
      en: "What would you have to stop performing — even just for a moment — to find out you were never actually caged by it?",
      fa: "چه چیزی را باید از بازی‌ درآوردن دست بکشید — حتی فقط برای یک لحظه — تا دریابید که هرگز واقعاً به‌دست آن در قفس نبوده‌اید؟",
    },
  },
];
