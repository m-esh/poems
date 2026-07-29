import type { Locale } from "./locale-constants";
import type { Theme } from "@/types/poem";

export const THEME_LABELS_BY_LOCALE: Record<Locale, Record<Theme, string>> = {
  en: {
    love: "Love",
    longing: "Longing",
    "the-divine": "The Divine",
    nature: "Nature",
    "wine-and-ecstasy": "Wine & Ecstasy",
    impermanence: "Impermanence",
    unity: "Unity",
    wisdom: "Wisdom",
  },
  fa: {
    love: "عشق",
    longing: "اشتیاق",
    "the-divine": "امر الهی",
    nature: "طبیعت",
    "wine-and-ecstasy": "می و مستی",
    impermanence: "ناپایداری",
    unity: "وحدت",
    wisdom: "حکمت",
  },
};

const dictionary = {
  en: {
    dir: "ltr",
    common: {
      save: "Save",
      saved: "Saved",
      share: "Share",
      readMore: "Read more",
      copyLink: "Copy link",
      copied: "Copied",
      downloadImage: "Download image",
    },
    nav: {
      home: "Home",
      library: "Poetry",
      rumi: "Rumi",
      explore: "Explore",
      ideas: "Ideas",
      stories: "Stories",
      thinkers: "Thinkers",
      forLife: "For Life",
      ask: "Ask Rumi",
      resources: "Resources",
      search: "Search",
      favorites: "Favorites",
      poemOfChance: "Poem of chance",
      openMenu: "Open menu",
    },
    home: {
      kicker: "a rose garden of secrets",
      intro:
        "A small, unhurried collection devoted entirely to Jalal ad-Din Rumi — gathered here the way an illuminated manuscript gathers light: slowly, and to be returned to. Read a poem of the day, wander the collection by theme, or let chance choose for you.",
      wanderByTheme: "Wander by theme",
      wanderByThemeSub:
        "Every poem in the collection is tagged for the mood you arrive with.",
      exploreSections: "Start your journey",
      exploreSectionsSub: "A few different doors into the same garden.",
      readFullStory: "Read his full story",
      poemOfDay: "Poem of the day",
      readFullPoem: "Read the full poem",
      anotherPoem: "Another poem",
    },
    footer: {
      quote: "Listen to the reed, how it tells its tale.",
      tagline: "a rose garden of secrets",
    },
    sections: {
      ideas: {
        title: "Ideas",
        description: "Rumi's great ideas — the concepts he returned to again and again.",
      },
      stories: {
        title: "Stories",
        description: "Parables from the Masnavi, and what they teach.",
      },
      thinkers: {
        title: "Thinkers",
        description:
          "Philosophers, scholars, poets, and psychologists who have read Rumi — with sources.",
      },
      forLife: {
        title: "For Life",
        description: "Whatever you're carrying today, start here.",
      },
      ask: {
        title: "Ask Rumi",
        description:
          "Tell us what's on your mind; we'll point you to poems that speak to it.",
      },
      resources: {
        title: "Resources",
        description: "Books, translations, and films for going further.",
      },
      poet: {
        title: "Rumi's life",
        description: "Who he was, and how he became who he was.",
      },
    },
    library: {
      title: "The Library",
      subtitle:
        "Every Rumi poem in Golshan Raz, gathered in one room. Filter by collection, or by the theme that matches your mood.",
      filterPlaceholder: "Filter by word or phrase…",
      allCollections: "All collections",
      clear: "Clear",
      poemsFoundOne: "1 poem found",
      poemsFound: (n: number) => `${n} poems found`,
      noResults: "No poems match these filters yet. Try loosening the search.",
    },
    poem: {
      originalPersian: "Original Persian",
      englishTranslation: "English translation",
      reflectionContext: "Reflection & context",
      readAnother: "Read another poem",
      moreFrom: "More from",
      shareTitle: "Share this poem",
      shareDescription: "Save a card for social sharing, or copy the link.",
    },
    poet: {
      browsePoems: "Browse the poems",
      poemsInCollectionOne: "1 poem in the collection",
      poemsInCollection: (n: number) => `${n} poems in the collection`,
      lifeTimeline: "A life, briefly",
      timeline: [
        { year: "1207", title: "Birth", body: "Born in the historical region of Balkh." },
        {
          year: "",
          title: "Childhood & Migration",
          body: "His family traveled through several regions before settling in Konya.",
        },
        {
          year: "",
          title: "Scholar & Teacher",
          body: "Rumi became a respected religious scholar and teacher.",
        },
        {
          year: "1244",
          title: "Meeting Shams",
          body: "His encounter with Shams of Tabriz transformed his spiritual and intellectual life.",
        },
        {
          year: "",
          title: "Poetry & Transformation",
          body: "He increasingly expressed spiritual experience through poetry, story, music, and teaching.",
        },
        {
          year: "",
          title: "Masnavi & Divan",
          body: "His major works became central to Persian literary and spiritual heritage.",
        },
        {
          year: "1273",
          title: "Death",
          body: "Rumi died in Konya; his influence continued to expand across centuries.",
        },
      ],
    },
    search: {
      title: "Search",
      subtitle: "Look for a line you half-remember, or a feeling.",
      placeholder: "Search titles, lines, or themes…",
      hint: 'Try a word like "wine" or "reed," or a theme like "longing."',
      resultsFoundOne: "1 result",
      resultsFound: (n: number) => `${n} results`,
      noResults: (q: string) => `No poems found for "${q}".`,
    },
    favorites: {
      title: "Favorites",
      subtitle: "Poems you've set aside, kept here in your browser for the next visit.",
      empty: "Nothing saved yet. Tap the heart on any poem to keep it here.",
      browseLibrary: "Browse the library",
    },
    ideas: {
      title: "Rumi's Great Ideas",
      subtitle: "Mystical concepts, put in plain words — each one a door into the poems.",
      items: [
        {
          title: "Love",
          body: "Love can transform how we see ourselves and the world — not a feeling so much as a force.",
        },
        {
          title: "Ego",
          body: "The ego can build walls between a person and deeper understanding, mistaking the wall for a self.",
        },
        {
          title: "Self-Knowledge",
          body: "Understanding the world begins with understanding yourself; the outer journey mirrors the inner one.",
        },
        {
          title: "Transformation",
          body: "Human beings are not fixed. We can grow, change direction, and become more awake than we were.",
        },
        {
          title: "Suffering",
          body: "Pain, once understood rather than only endured, can become a teacher rather than only a wound.",
        },
        {
          title: "Unity",
          body: "Behind many apparent differences lies a deeper connection — human, and beyond the human.",
        },
        {
          title: "Silence",
          body: "Not everything that can be understood arrives through words; some knowing is simply lived.",
        },
        {
          title: "The Inner Journey",
          body: "The longest journey Rumi describes is not to Konya or Damascus, but into one's own depths.",
        },
      ],
    },
    stories: {
      title: "Stories from the Masnavi",
      subtitle:
        "Rumi taught as often in parable as in verse. These are retellings for this collection — not claimed as verbatim translations of a specific historical text.",
      meaning: "What it means",
      teaching: "What Rumi was teaching",
      today: "For today",
    },
    forLife: {
      title: "Rumi for Everyday Life",
      subtitle: "What's on your mind today?",
      seePoems: "See related poems",
      items: [
        {
          prompt: "I feel lost",
          description: "Explore identity, purpose, and self-knowledge.",
        },
        {
          prompt: "I am afraid",
          description: "Rumi's thinking on fear, trust, and acceptance.",
        },
        {
          prompt: "I lost someone",
          description: "Poems on separation, grief, and transformation.",
        },
        {
          prompt: "I feel lonely",
          description: "On connection, belonging, and inner solitude.",
        },
        {
          prompt: "I am angry",
          description: "On the ego, reaction, forgiveness, and awareness.",
        },
        {
          prompt: "I am searching for love",
          description: "The difference between attachment and love that transforms.",
        },
        {
          prompt: "I want to understand myself",
          description: "A starting point for the inward journey.",
        },
      ],
    },
    ask: {
      title: "Ask Rumi",
      subtitle: "Describe what's on your mind, in your own words.",
      placeholder: "e.g. I'm afraid of failing at something…",
      submit: "Find what fits",
      disclaimer:
        "This doesn't generate new text or put words in Rumi's mouth — it matches what you write against the poems, themes, and reflections already in this collection.",
      resultsIntro: "Poems from the collection that may speak to this:",
      noMatch:
        'Nothing matched closely. Try a simpler word — "fear," "love," "loss," "alone" — or browse by theme instead.',
      tryWords: "Or try one of these:",
    },
    resources: {
      title: "Books & Films",
      subtitle:
        "A selected, curated guide for readers who want to go further — Rumi's own works, major translations, biographies, and screen adaptations.",
      updated:
        "Updated July 2026. A selective guide, not a claim to catalogue every edition in print.",
    },
    thinkers: {
      title: "Rumi Through Other Thinkers",
      subtitle:
        "Rumi was never only a poet of the past. Here is how philosophers, historians of religion, poets, and psychologists have engaged with him — each entry grounded in a documented, citable source, not an invented quote.",
      methodology:
        "\"Direct influence\" and \"intellectual resemblance\" are not the same thing, and this page tries to keep them apart. Where a thinker's contact with Rumi was indirect — through a translation rather than the Persian original — that is stated plainly. Every entry is sourced to a specific published work.",
    },
  },
  fa: {
    dir: "rtl",
    common: {
      save: "ذخیره",
      saved: "ذخیره شد",
      share: "اشتراک‌گذاری",
      readMore: "بیشتر بخوانید",
      copyLink: "کپی لینک",
      copied: "کپی شد",
      downloadImage: "دانلود تصویر",
    },
    nav: {
      home: "خانه",
      library: "اشعار",
      rumi: "مولانا",
      explore: "بیشتر",
      ideas: "اندیشه‌ها",
      stories: "حکایت‌ها",
      thinkers: "دیدگاه متفکران",
      forLife: "برای زندگی",
      ask: "از مولانا بپرس",
      resources: "منابع",
      search: "جستجو",
      favorites: "علاقه‌مندی‌ها",
      poemOfChance: "شعر تصادفی",
      openMenu: "باز کردن منو",
    },
    home: {
      kicker: "باغ رازها",
      intro:
        "مجموعه‌ای کوچک و آرام، تمام‌وکمال وقف جلال‌الدین محمد مولوی — گردآوری‌شده به شیوه‌ی نسخه‌های خطی مصور که نور را آهسته جمع می‌کنند: بی‌شتاب، و برای بازگشت دوباره. شعر روز را بخوانید، مجموعه را بر اساس مضمون بگردید، یا بگذارید تصادف انتخاب کند.",
      wanderByTheme: "گشت‌وگذار بر اساس مضمون",
      wanderByThemeSub:
        "هر شعر این مجموعه با برچسبی نشان‌گذاری شده تا با حال‌وهوایی که با آن آمده‌اید همراه شود.",
      exploreSections: "سفرتان را آغاز کنید",
      exploreSectionsSub: "چند در گوناگون به یک باغ.",
      readFullStory: "داستان کامل زندگی او را بخوانید",
      poemOfDay: "شعر روز",
      readFullPoem: "شعر کامل را بخوانید",
      anotherPoem: "شعری دیگر",
    },
    footer: {
      quote: "بشنو از نی چون حکایت می‌کند",
      tagline: "باغ رازها",
    },
    sections: {
      ideas: {
        title: "اندیشه‌ها",
        description: "اندیشه‌های بزرگ مولانا — مفاهیمی که بارها و بارها به آن‌ها بازگشت.",
      },
      stories: {
        title: "حکایت‌ها",
        description: "حکایت‌هایی از مثنوی، و آنچه می‌آموزند.",
      },
      thinkers: {
        title: "دیدگاه متفکران",
        description:
          "فیلسوفان، پژوهشگران، شاعران و روان‌شناسانی که مولانا را خوانده‌اند — همراه با منبع.",
      },
      forLife: {
        title: "برای زندگی",
        description: "هرچه امروز با خود دارید، از اینجا شروع کنید.",
      },
      ask: {
        title: "از مولانا بپرس",
        description:
          "بگویید در ذهن‌تان چه می‌گذرد؛ ما شما را به شعرهای مرتبط راهنمایی می‌کنیم.",
      },
      resources: {
        title: "منابع",
        description: "کتاب‌ها، ترجمه‌ها و فیلم‌ها برای ادامه‌ی مسیر.",
      },
      poet: {
        title: "زندگی مولانا",
        description: "او که بود، و چگونه به آنچه شد بدل شد.",
      },
    },
    library: {
      title: "کتابخانه",
      subtitle:
        "هر شعر مولانا در گلشن راز، در یک اتاق گرد آمده است. بر اساس مجموعه، یا مضمونی که با حال‌وهوای شما همخوانی دارد، فیلتر کنید.",
      filterPlaceholder: "فیلتر بر اساس واژه یا عبارت…",
      allCollections: "همه مجموعه‌ها",
      clear: "پاک کردن",
      poemsFoundOne: "۱ شعر یافت شد",
      poemsFound: (n: number) => `${n} شعر یافت شد`,
      noResults: "هیچ شعری با این فیلترها مطابقت ندارد. جستجو را ساده‌تر کنید.",
    },
    poem: {
      originalPersian: "متن اصلی فارسی",
      englishTranslation: "ترجمه‌ی انگلیسی",
      reflectionContext: "تأمل و زمینه",
      readAnother: "شعر دیگری بخوانید",
      moreFrom: "بیشتر از",
      shareTitle: "این شعر را به اشتراک بگذارید",
      shareDescription: "کارتی برای اشتراک‌گذاری ذخیره کنید، یا لینک را کپی کنید.",
    },
    poet: {
      browsePoems: "مرور شعرها",
      poemsInCollectionOne: "۱ شعر در این مجموعه",
      poemsInCollection: (n: number) => `${n} شعر در این مجموعه`,
      lifeTimeline: "زندگی، به‌اختصار",
      timeline: [
        { year: "۱۲۰۷", title: "تولد", body: "تولد در منطقهٔ تاریخی بلخ." },
        {
          year: "",
          title: "کودکی و مهاجرت",
          body: "سفر خانواده از مناطق مختلف و در نهایت اقامت در قونیه.",
        },
        {
          year: "",
          title: "عالم و مدرس",
          body: "تبدیل شدن به یکی از مدرسان و عالمان شناخته‌شده.",
        },
        {
          year: "۱۲۴۴",
          title: "دیدار با شمس",
          body: "آغاز تحولی عمیق در زندگی معنوی و فکری مولانا.",
        },
        {
          year: "",
          title: "شعر و تحول درونی",
          body: "بیان تجربه‌های معنوی از طریق شعر، داستان، موسیقی و تعلیم.",
        },
        {
          year: "",
          title: "مثنوی و دیوان شمس",
          body: "خلق آثاری که از مهم‌ترین میراث‌های ادبیات فارسی شدند.",
        },
        {
          year: "۱۲۷۳",
          title: "وفات",
          body: "وفات در قونیه و گسترش روزافزون میراث او در جهان.",
        },
      ],
    },
    search: {
      title: "جستجو",
      subtitle: "به‌دنبال بیتی که نیمه‌به‌یاد دارید، یا حسی که می‌جویید، بگردید.",
      placeholder: "جستجو در عنوان‌ها، ابیات یا مضامین…",
      hint: "واژه‌ای مانند «می» یا «نی» را امتحان کنید، یا مضمونی مانند «اشتیاق».",
      resultsFoundOne: "۱ نتیجه",
      resultsFound: (n: number) => `${n} نتیجه`,
      noResults: (q: string) => `هیچ شعری برای «${q}» یافت نشد.`,
    },
    favorites: {
      title: "علاقه‌مندی‌ها",
      subtitle:
        "شعرهایی که کنار گذاشته‌اید، اینجا در مرورگر شما برای بازدید بعدی نگه داشته می‌شوند.",
      empty: "هنوز چیزی ذخیره نشده. روی قلب هر شعر بزنید تا اینجا نگه داشته شود.",
      browseLibrary: "مرور کتابخانه",
    },
    ideas: {
      title: "اندیشه‌های بزرگ مولانا",
      subtitle: "مفاهیم عرفانی، به زبان ساده — هرکدام دری به‌سوی شعرها.",
      items: [
        {
          title: "عشق",
          body: "عشق می‌تواند نگاه ما به خود و جهان را دگرگون کند — نه چندان یک احساس، که یک نیرو.",
        },
        {
          title: "نفس",
          body: "نفس می‌تواند میان انسان و فهم عمیق‌تر دیواری بسازد، و آن دیوار را به‌جای خود بگیرد.",
        },
        {
          title: "خودشناسی",
          body: "شناخت جهان از شناخت خویش آغاز می‌شود؛ سفر بیرونی، آینه‌ی سفر درونی است.",
        },
        {
          title: "تحول",
          body: "انسان ثابت نیست. می‌تواند رشد کند، مسیر را تغییر دهد و آگاه‌تر از پیش شود.",
        },
        {
          title: "رنج",
          body: "درد، وقتی فهمیده شود نه فقط تحمل، می‌تواند آموزگار شود نه فقط زخم.",
        },
        {
          title: "وحدت",
          body: "در پس بسیاری از تفاوت‌های ظاهری، پیوندی عمیق‌تر نهفته است — انسانی، و فراتر از انسانی.",
        },
        {
          title: "سکوت",
          body: "هر آنچه فهمیدنی است از راه کلمات نمی‌آید؛ بخشی از دانستن را فقط باید زیست.",
        },
        {
          title: "سفر درون",
          body: "طولانی‌ترین سفری که مولانا از آن سخن می‌گوید، نه به قونیه یا دمشق، که به ژرفای خویشتن است.",
        },
      ],
    },
    stories: {
      title: "حکایت‌های مثنوی",
      subtitle:
        "مولانا به همان اندازه که با شعر، با حکایت نیز تعلیم می‌داد. این‌ها بازروایت‌هایی برای این مجموعه‌اند — نه ترجمه‌ی عینی یک متن تاریخی مشخص.",
      meaning: "معنی داستان",
      teaching: "مولانا چه می‌خواست بگوید",
      today: "برای امروز",
    },
    forLife: {
      title: "مولانا برای زندگی روزمره",
      subtitle: "امروز چه چیزی ذهن شما را درگیر کرده؟",
      seePoems: "شعرهای مرتبط را ببینید",
      items: [
        {
          prompt: "احساس می‌کنم مسیرم را گم کرده‌ام",
          description: "هویت، هدف و خودشناسی را کاوش کنید.",
        },
        { prompt: "می‌ترسم", description: "نگاه مولانا به ترس، اعتماد و پذیرش." },
        {
          prompt: "کسی را از دست داده‌ام",
          description: "شعرهایی درباره‌ی جدایی، سوگ و تحول.",
        },
        {
          prompt: "احساس تنهایی می‌کنم",
          description: "درباره‌ی پیوند، تعلق و تنهایی درونی.",
        },
        { prompt: "عصبانی هستم", description: "درباره‌ی نفس، واکنش، بخشش و آگاهی." },
        {
          prompt: "در جست‌وجوی عشق هستم",
          description: "تفاوت میان وابستگی و عشقی که دگرگون می‌کند.",
        },
        {
          prompt: "می‌خواهم خودم را بهتر بشناسم",
          description: "نقطه‌ی آغازی برای سفر درون.",
        },
      ],
    },
    ask: {
      title: "از مولانا بپرس",
      subtitle: "آنچه در ذهن دارید را با کلمات خودتان بنویسید.",
      placeholder: "مثلاً: از شکست خوردن در کاری می‌ترسم…",
      submit: "بگرد",
      disclaimer:
        "این ابزار متن تازه‌ای تولید نمی‌کند و چیزی را به مولانا نسبت نمی‌دهد — فقط نوشته‌ی شما را با شعرها، مضامین و یادداشت‌های موجود در این مجموعه مقایسه می‌کند.",
      resultsIntro: "شعرهایی از این مجموعه که ممکن است به این موضوع مربوط باشند:",
      noMatch:
        "چیزی به‌درستی مطابقت نداشت. واژه‌ی ساده‌تری مانند «ترس»، «عشق»، «فقدان» یا «تنهایی» را امتحان کنید، یا بر اساس مضمون بگردید.",
      tryWords: "یا یکی از این‌ها را امتحان کنید:",
    },
    resources: {
      title: "کتاب‌ها و فیلم‌ها",
      subtitle:
        "راهنمایی گزیده برای خوانندگانی که می‌خواهند فراتر بروند — آثار خود مولانا، ترجمه‌های مهم، زندگینامه‌ها و اقتباس‌های سینمایی.",
      updated: "به‌روزرسانی ژوئیه ۲۰۲۶. راهنمایی گزیده، نه ادعای ثبت هر چاپ موجود.",
    },
    thinkers: {
      title: "مولانا از نگاه دیگر متفکران",
      subtitle:
        "مولانا هرگز تنها شاعری از گذشته نبوده است. این صفحه نشان می‌دهد فیلسوفان، تاریخ‌نگاران دین، شاعران و روان‌شناسان چگونه با او درگیر شده‌اند — هر مدخل بر پایه منبعی مستند و قابل استناد، نه نقل‌قولی ساختگی.",
      methodology:
        "«تأثیر مستقیم» و «شباهت فکری» یکی نیستند، و این صفحه می‌کوشد این دو را از هم جدا نگه دارد. جایی که تماس یک متفکر با مولانا غیرمستقیم بوده — از طریق ترجمه، نه متن اصلی فارسی — این نکته به‌صراحت بیان شده است. هر مدخل به یک اثر منتشرشده مشخص ارجاع دارد.",
    },
  },
} satisfies Record<Locale, unknown>;

export type Dictionary = typeof dictionary.en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale] as Dictionary;
}

export function getThemeLabels(locale: Locale): Record<Theme, string> {
  return THEME_LABELS_BY_LOCALE[locale];
}
