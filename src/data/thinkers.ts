export interface Thinker {
  slug: string;
  name: string;
  nameFa: string;
  field: string;
  fieldFa: string;
  category: string;
  categoryFa: string;
  summary: string;
  summaryFa: string;
  source: string;
  sourceFa: string;
}

/**
 * Every entry here describes a documented, citable relationship between a named
 * thinker and Rumi's work — not an invented quote attributed to them. Where the
 * connection is indirect (e.g. Hegel reading Rückert's German verse rather than
 * the Persian), that is stated explicitly rather than implied.
 */
export const thinkers: Thinker[] = [
  {
    slug: "nicholson",
    name: "Reynold A. Nicholson",
    nameFa: "رینولد نیکلسون",
    field: "Orientalist and philologist (Cambridge)",
    fieldFa: "شرق‌شناس و زبان‌شناس (کمبریج)",
    category: "Eastern and Western literary scholars",
    categoryFa: "پژوهشگران ادبیات شرق و غرب",
    summary:
      "Nicholson spent much of his career on a single task: producing the first complete critical edition and English translation of the Masnavi, published in eight volumes between 1925 and 1940, with Persian text, translation, and commentary. His edition remains the base text most later translators and scholars work from, and effectively founded Rumi studies as an academic field in the English-speaking world.",
    summaryFa:
      "نیکلسون بخش عمده حرفه علمی خود را صرف یک کار کرد: تدوین نخستین تصحیح انتقادی و ترجمه کامل انگلیسی مثنوی، در هشت جلد، همراه با متن فارسی، ترجمه و شرح، که بین سال‌های ۱۹۲۵ تا ۱۹۴۰ منتشر شد. تصحیح او همچنان متن پایه‌ای است که بسیاری از مترجمان و پژوهشگران بعدی بر اساس آن کار کرده‌اند و عملاً مولوی‌پژوهی را به‌عنوان یک رشته دانشگاهی در جهان انگلیسی‌زبان بنیان نهاد.",
    source: "The Mathnawi of Jalalu'ddin Rumi, 8 volumes (1925–1940)",
    sourceFa: "مثنوی مولانا در هشت جلد (۱۹۲۵–۱۹۴۰)",
  },
  {
    slug: "schimmel",
    name: "Annemarie Schimmel",
    nameFa: "آنماری شیمل",
    field: "Islamicist and historian of religion (Harvard, Bonn)",
    fieldFa: "اسلام‌شناس و تاریخ‌نگار ادیان (هاروارد، بن)",
    category: "Historians and scholars of religion",
    categoryFa: "مورخان و پژوهشگران دین",
    summary:
      "Schimmel devoted several major books to Rumi across four decades, arguing that his poetry cannot be separated from the technical vocabulary of Islamic mysticism it draws on — the Quran, hadith, and centuries of Sufi thought. Her studies remain a standard bridge between Rumi's poetry and its religious and symbolic context for non-specialist readers.",
    summaryFa:
      "شیمل در طول چهار دهه چندین کتاب مهم را به مولانا اختصاص داد و استدلال کرد که شعر او را نمی‌توان از واژگان فنی عرفان اسلامی که از آن مایه می‌گیرد — قرآن، حدیث و قرن‌ها اندیشه صوفیانه — جدا کرد. مطالعات او همچنان پلی استاندارد میان شعر مولانا و زمینه دینی و نمادین آن برای خوانندگان غیرمتخصص است.",
    source: "I Am Wind, You Are Fire; The Triumphal Sun; Rumi's World",
    sourceFa: "من باد هستم، تو آتش؛ خورشید پیروزمند؛ جهان مولانا",
  },
  {
    slug: "chittick",
    name: "William C. Chittick",
    nameFa: "ویلیام چیتیک",
    field: "Scholar of Islamic philosophy and Sufism (Stony Brook)",
    fieldFa: "پژوهشگر فلسفه اسلامی و تصوف (استونی بروک)",
    category: "Philosophers and intellectuals",
    categoryFa: "فیلسوفان و متفکران",
    summary:
      "Chittick built on his earlier translation work on Ibn Arabi — whom Rumi never met, but whose thought shaped how later generations read him — to draw the connecting lines between Rumi's teachings on love, imagination, and the \"unity of being,\" which appear scattered across the Masnavi and the Divan, into a coherent doctrine.",
    summaryFa:
      "چیتیک با تکیه بر کار ترجمه‌ای که پیش‌تر روی ابن‌عربی انجام داده بود — کسی که مولانا هرگز او را ندید، اما اندیشه‌اش بر خوانش‌های بعدی از مولانا سایه انداخت — خط پیوند میان تعالیم پراکنده مولانا درباره عشق، خیال و «وحدت وجود» را در مثنوی و دیوان نشان داد و آن‌ها را در قالبی نظام‌مند گرد آورد.",
    source: "The Sufi Path of Love; The Sufi Doctrine of Rumi",
    sourceFa: "طریق صوفیانه عشق؛ آموزه صوفیانه مولانا",
  },
  {
    slug: "lewis",
    name: "Franklin D. Lewis",
    nameFa: "فرانکلین لوئیس",
    field: "Literary historian (University of Chicago)",
    fieldFa: "تاریخ‌نگار ادبیات (دانشگاه شیکاگو)",
    category: "Eastern and Western literary scholars",
    categoryFa: "پژوهشگران ادبیات شرق و غرب",
    summary:
      "Lewis's Rumi: Past and Present, East and West is widely regarded as the most thorough modern English account of Rumi's biography, textual history, and reception — including how European thinkers from the nineteenth century onward largely encountered him through German and English verse translations rather than the Persian original.",
    summaryFa:
      "کتاب مولانا: دیروز و امروز، شرق و غرب اثر لوئیس، به‌طور گسترده جامع‌ترین شرح مدرن انگلیسی از زندگی‌نامه، تاریخ متنی و بازتاب مولانا شناخته می‌شود — از جمله این‌که چگونه متفکران اروپایی از سده نوزدهم به بعد، بیشتر از طریق ترجمه‌های منظوم آلمانی و انگلیسی، نه متن اصلی فارسی، با او آشنا شدند.",
    source: "Rumi: Past and Present, East and West",
    sourceFa: "مولانا: دیروز و امروز، شرق و غرب",
  },
  {
    slug: "iqbal",
    name: "Muhammad Iqbal (Allama Iqbal)",
    nameFa: "محمد اقبال لاهوری (علامه اقبال)",
    field: "Poet-philosopher (British India / Pakistan)",
    fieldFa: "شاعر-فیلسوف (هند بریتانیا / پاکستان)",
    category: "Poets and writers",
    categoryFa: "شاعران و نویسندگان",
    summary:
      "Writing in Persian in the early twentieth century, Iqbal cast Rumi as his own guide through the heavens in his long poem Javid Nama — modeling the journey on Dante's Virgil — and returned throughout his philosophical poetry to Rumi's sense of selfhood as a corrective to what he saw as a passive, fatalistic reading of Sufism.",
    summaryFa:
      "اقبال، در اوایل سده بیستم، در منظومه بلند جاویدنامه — با الگوگیری از نقش ویرژیل برای دانته — مولانا را راهنمای خود در سفر میان افلاک قرار داد و در سراسر شعر فلسفی‌اش بارها به برداشت مولانا از «خودی» بازگشت، به‌عنوان پاسخی به آنچه او خوانشی منفعلانه و جبرگرایانه از تصوف می‌دید.",
    source: "Javid Nama (1932)",
    sourceFa: "جاویدنامه (۱۹۳۲)",
  },
  {
    slug: "hegel",
    name: "G. W. F. Hegel",
    nameFa: "گئورگ ویلهلم فریدریش هگل",
    field: "Philosopher (Germany)",
    fieldFa: "فیلسوف (آلمان)",
    category: "Philosophers and intellectuals",
    categoryFa: "فیلسوفان و متفکران",
    summary:
      "Hegel encountered Rumi's poetry secondhand, through Friedrich Rückert's early German verse translations, and referenced it in his lectures on aesthetics and religion as an example of a pantheistic mysticism in which the individual soul dissolves into the divine. Later Rumi scholars, including Schimmel and Lewis, have discussed this brief but documented episode as one of Rumi's earliest points of contact with Western philosophy.",
    summaryFa:
      "هگل شعر مولانا را به‌واسطه ترجمه‌های منظوم آلمانی اولیه فریدریش روکرت شناخت و در درس‌گفتارهایش درباره زیبایی‌شناسی و دین به آن اشاره کرد، به‌عنوان نمونه‌ای از عرفان وحدت‌وجودی که در آن روح فردی در ذات الهی محو می‌شود. پژوهشگران بعدی مولانا، از جمله شیمل و لوئیس، این رویداد کوتاه اما مستند را یکی از نخستین نقاط تماس مولانا با فلسفه غرب دانسته‌اند.",
    source: "As discussed in Lewis, Rumi: Past and Present, East and West",
    sourceFa: "به‌روایت لوئیس در مولانا: دیروز و امروز، شرق و غرب",
  },
  {
    slug: "barks",
    name: "Coleman Barks",
    nameFa: "کولمن بارکس",
    field: "Poet",
    fieldFa: "شاعر",
    category: "Poets and writers",
    categoryFa: "شاعران و نویسندگان",
    summary:
      "Working without Persian, and from earlier literal translations by Nicholson and Arberry, Barks produced the free-verse adaptations — beginning with Open Secret in 1984 — that became by far the most widely read versions of Rumi in English. His versions are poetic re-creations rather than scholarly translations, a distinction Barks himself has always been explicit about.",
    summaryFa:
      "بارکس، بدون دانش زبان فارسی و بر اساس ترجمه‌های لفظی پیشین نیکلسون و آربری، بازآفرینی‌های شعر آزادی را پدید آورد — با آغاز از راز آشکار در سال ۱۹۸۴ — که به‌مراتب پرخواننده‌ترین روایت‌های مولانا در زبان انگلیسی شدند. کارهای او بازآفرینی شاعرانه‌اند، نه ترجمه به معنای دانشگاهی کلمه، تمایزی که خود بارکس همواره بر آن تأکید داشته است.",
    source: "The Essential Rumi, and other volumes",
    sourceFa: "مولانای ضروری و دیگر مجلدات",
  },
  {
    slug: "arasteh",
    name: "Abdol Reza Arasteh",
    nameFa: "عبدالرضا آراسته",
    field: "Psychologist",
    fieldFa: "روان‌شناس",
    category: "Psychologists and spiritual thinkers",
    categoryFa: "روان‌شناسان و متفکران معنوی",
    summary:
      "Arasteh read Rumi's account of the self's transformation through the lens of twentieth-century psychology, treating the stages of the Sufi path as a documented case study in what he called \"final integration\" — a model of psychological growth extending beyond the goals set out by the Western developmental psychology of his time.",
    summaryFa:
      "آراسته روایت مولانا از دگرگونی خویشتن را از دریچه روان‌شناسی سده بیستم خواند و مراحل سیر و سلوک صوفیانه را نمونه‌ای مستند از آنچه خود «یکپارچگی نهایی» می‌نامید دانست — الگویی از رشد روانی که فراتر از اهدافی است که روان‌شناسی رشد غربی زمان او ترسیم می‌کرد.",
    source: "Rumi the Persian, the Sufi",
    sourceFa: "مولانای ایرانی، صوفی",
  },
  {
    slug: "keshavarz",
    name: "Fatemeh Keshavarz",
    nameFa: "فاطمه کشاورز",
    field: "Literary scholar (University of Maryland / USC)",
    fieldFa: "پژوهشگر ادبیات (دانشگاه مریلند / دانشگاه کالیفرنیای جنوبی)",
    category: "Eastern and Western literary scholars",
    categoryFa: "پژوهشگران ادبیات شرق و غرب",
    summary:
      "Rather than treating doctrine alone, Keshavarz has focused on the craft of Rumi's lyric poetry itself — how ambiguity, voice, and performance function inside the ghazals of the Divan — arguing against readings that treat the poems mainly as a thin covering over a fixed mystical teaching.",
    summaryFa:
      "کشاورز به‌جای تمرکز صرف بر آموزه، به خودِ صنعت شعری غزل‌های مولانا پرداخته است — این‌که ابهام، صدا و اجرا چگونه در غزل‌های دیوان عمل می‌کنند — و در برابر خوانش‌هایی ایستاده که این شعرها را عمدتاً پوششی نازک بر آموزه‌ای عرفانی و ثابت می‌بینند.",
    source: "Reading Mystical Lyric: The Case of Jalal al-Din Rumi",
    sourceFa: "خواندن غزل عرفانی: مورد جلال‌الدین رومی",
  },
];

export const thinkerCategoryOrder = [
  "Philosophers and intellectuals",
  "Historians and scholars of religion",
  "Poets and writers",
  "Psychologists and spiritual thinkers",
  "Eastern and Western literary scholars",
];
