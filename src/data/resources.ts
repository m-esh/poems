export interface BookEntry {
  title: string;
  titleFa: string;
  author: string;
  authorFa: string;
  note: string;
  noteFa: string;
}

export interface FilmEntry {
  year: string;
  title: string;
  titleFa: string;
  director: string;
  directorFa: string;
  note: string;
  noteFa: string;
}

export interface ResourceSection {
  key: string;
  title: string;
  titleFa: string;
  books: BookEntry[];
}

export const bookSections: ResourceSection[] = [
  {
    key: "core",
    title: "Core works and critical editions",
    titleFa: "آثار اصلی و تصحیح‌های انتقادی",
    books: [
      {
        title: "Masnavi-ye Ma'navi (The Spiritual Couplets)",
        titleFa: "مثنوی معنوی",
        author: "Jalal al-Din Rumi",
        authorFa: "مولانا جلال‌الدین محمد بلخی",
        note: "Rumi's six-book narrative and teaching masterpiece; the central text of the Mevlevi tradition. Dictated over roughly the last decade of his life to his scribe Hussam al-Din Chalabi, its some 25,000 couplets move continually between story, argument, and lyric outburst; generations of readers have called it 'the Quran in Persian' for how persistently it circles back to a handful of core teachings.",
        noteFa:
          "شاهکار شش‌دفتری روایی و تعلیمی مولانا و یکی از بنیادی‌ترین متون سنت مولویه. این اثر در حدود یک دهه پایانی زندگی مولانا و با املا به کاتبش، حسام‌الدین چلبی، شکل گرفت؛ نزدیک به ۲۵٬۰۰۰ بیت آن پیوسته میان حکایت، استدلال و فوران غنایی در نوسان است، و نسل‌ها خواننده آن را «قرآن به زبان فارسی» خوانده‌اند، از بس که به چند آموزه محوری بازمی‌گردد.",
      },
      {
        title: "Divan-e Shams-e Tabrizi / Kulliyat-e Shams",
        titleFa: "دیوان شمس تبریزی / کلیات شمس",
        author: "Jalal al-Din Rumi",
        authorFa: "مولانا جلال‌الدین محمد بلخی",
        note: "Rumi's vast collection of ghazals, lyric poems, and ecstatic verse associated with Shams of Tabriz. Composed in the years following Shams's disappearance and signed, unusually, with Shams's name rather than Rumi's own, the Divan runs to several thousand poems and reads as an extended act of mourning turned into praise.",
        noteFa:
          "مجموعه عظیم غزل‌ها، اشعار عاشقانه و سروده‌های شورمندانه مولانا که با نام شمس تبریزی پیوند دارد. این دیوان در سال‌های پس از ناپدید شدن شمس سروده شد و، به شکلی غیرمعمول، نه به نام خود مولانا بلکه به نام شمس امضا شده است؛ به چند هزار غزل می‌رسد و در کلیت خود چون سوگواری‌ای طولانی است که به ستایش بدل شده.",
      },
      {
        title: "Fihi Ma Fihi (Discourses)",
        titleFa: "فیه ما فیه",
        author: "Jalal al-Din Rumi",
        authorFa: "مولانا جلال‌الدین محمد بلخی",
        note: "Prose conversations and teachings recorded by Rumi's circle. Unlike the verse of the Masnavi and Divan, these are informal talks — closer to notes taken during a lesson than a composed text — and they give a more direct, conversational view of how Rumi addressed the students and patrons around him.",
        noteFa:
          "مجموعه گفتارها و درس‌های منثور مولانا که شاگردان و نزدیکان او ثبت کرده‌اند. برخلاف اشعار مثنوی و دیوان، این‌ها گفتارهایی غیررسمی‌اند — نزدیک‌تر به یادداشت‌هایی از یک درس تا متنی پرداخته‌شده — و تصویری مستقیم‌تر و محاوره‌ای‌تر از نحوه سخن‌گفتن مولانا با شاگردان و حامیانش به دست می‌دهند.",
      },
      {
        title: "Majalis-e Sab'a (The Seven Sermons)",
        titleFa: "مجالس سبعه",
        author: "Jalal al-Din Rumi",
        authorFa: "مولانا جلال‌الدین محمد بلخی",
        note: "Seven sermons from Rumi's earlier public teaching career. Delivered before his meeting with Shams-e Tabrizi transformed him from a respected jurist into an ecstatic poet, they show the more conventional preacher Rumi was before that turning point.",
        noteFa:
          "هفت خطابه از دوره نخست فعالیت علمی و وعظ مولانا. این خطابه‌ها پیش از دیدار او با شمس تبریزی — دیداری که مولانا را از فقیهی محترم به شاعری شوریده بدل کرد — ایراد شده‌اند و چهره واعظی متعارف‌تر از مولانا را پیش از آن نقطه عطف نشان می‌دهند.",
      },
      {
        title: "Makatib (The Letters)",
        titleFa: "مکتوبات مولانا",
        author: "Jalal al-Din Rumi",
        authorFa: "مولانا جلال‌الدین محمد بلخی",
        note: "Letters showing Rumi as teacher, community leader, intercessor, and family figure. They are the least poetic and most practical of his surviving writings, dealing with everyday matters — requests, recommendations, family concerns — and offer a useful counterweight to the visionary voice of the Masnavi and Divan.",
        noteFa:
          "نامه‌هایی که چهره مولانا را به‌عنوان استاد، رهبر اجتماعی، میانجی و عضو خانواده نشان می‌دهد. این نامه‌ها کم‌شاعرانه‌ترین و کاربردی‌ترین بخش نوشته‌های برجای‌مانده از اوست — درباره امور روزمره، درخواست‌ها، توصیه‌ها و دغدغه‌های خانوادگی — و وزنه‌ای سودمند در برابر لحن رؤیاگون مثنوی و دیوان به دست می‌دهند.",
      },
      {
        title: "Rubaiyat (Quatrains)",
        titleFa: "رباعیات مولانا",
        author: "Attributed to Jalal al-Din Rumi",
        authorFa: "منسوب به مولانا جلال‌الدین محمد بلخی",
        note: "The quatrains traditionally transmitted under Rumi's name; attribution varies among manuscripts. Some overlap with quatrains also credited to other poets of the period, and scholars continue to debate how much of this material is securely his rather than absorbed into his corpus over centuries of copying.",
        noteFa:
          "رباعیاتی که به نام مولانا نقل شده‌اند؛ انتساب برخی رباعیات در نسخه‌های گوناگون محل بحث است. برخی از آن‌ها با رباعیاتی که به شاعران دیگر همان دوره نیز نسبت داده شده‌اند هم‌پوشانی دارند، و پژوهشگران همچنان بر سر این‌که چه میزان از این مواد واقعاً از آنِ اوست یا در طول قرن‌ها رونویسی به مجموعه او افزوده شده، اختلاف نظر دارند.",
      },
      {
        title: "Kulliyat-e Shams-e Tabrizi, critical edition",
        titleFa: "کلیات شمس تبریزی، تصحیح انتقادی",
        author: "Edited by Badiozzaman Foruzanfar",
        authorFa: "بدیع‌الزمان فروزانفر",
        note: "The standard monumental Persian critical edition of Rumi's lyric corpus. Foruzanfar spent decades comparing manuscripts to establish a reliable text of the Divan, and his edition — organized by rhyme and meter rather than theme — remains the reference point nearly every serious translator since has worked from.",
        noteFa:
          "یکی از مهم‌ترین و معیارترین تصحیح‌های فارسی دیوان غزلیات مولانا. فروزانفر دهه‌ها به مقابله نسخه‌های خطی پرداخت تا متنی معتبر از دیوان به دست دهد؛ تصحیح او — که بر اساس قافیه و وزن، نه موضوع، سامان یافته — همچنان نقطه ارجاع تقریباً هر مترجم جدی پس از او بوده است.",
      },
      {
        title: "Masnavi-ye Ma'navi, Persian critical text",
        titleFa: "مثنوی معنوی، متن انتقادی فارسی",
        author: "Edited by R. A. Nicholson",
        authorFa: "تصحیح رینولد نیکلسون",
        note: "A foundational modern critical text used by generations of scholars and translators. Nicholson prepared this Persian text alongside his English translation, comparing the earliest available manuscripts, and it became the working text behind most twentieth-century scholarship on the Masnavi in the West.",
        noteFa:
          "متن انتقادی اثرگذار که مبنای کار نسل‌های متعدد پژوهشگران و مترجمان بوده است. نیکلسون این متن فارسی را همراه با ترجمه انگلیسی خود و با مقابله کهن‌ترین نسخه‌های خطی در دسترس آماده کرد، و این متن به مبنای کار بیشتر پژوهش‌های سده بیستمی درباره مثنوی در غرب بدل شد.",
      },
      {
        title: "Masnavi-ye Ma'navi, annotated Persian edition",
        titleFa: "مثنوی معنوی، شرح و تصحیح فارسی",
        author: "Edited and explained by Mohammad Estelami",
        authorFa: "محمد استعلامی",
        note: "A widely used Persian edition with extensive explanations and notes. Estelami's line-by-line commentary, aimed at Persian-speaking readers rather than specialists, unpacks the historical, grammatical, and Sufi references a modern reader might otherwise miss, and it remains a standard classroom edition in Iran.",
        noteFa:
          "نسخه‌ای پرکاربرد همراه با توضیحات و یادداشت‌های گسترده برای خوانندگان فارسی‌زبان. شرح بیت‌به‌بیت استعلامی، که برای خواننده فارسی‌زبان عادی نوشته شده نه صرفاً متخصصان، اشارات تاریخی، دستوری و عرفانی‌ای را باز می‌کند که خواننده امروزی ممکن است بی‌آن از کنارشان بگذرد، و همچنان نسخه‌ای استاندارد در کلاس‌های درس در ایران است.",
      },
      {
        title: "Masnavi-ye Ma'navi, critical Persian edition",
        titleFa: "مثنوی معنوی، تصحیح انتقادی",
        author: "Edited by Mohammad Ali Movahed",
        authorFa: "محمدعلی موحد",
        note: "A major recent Persian critical edition based on extensive manuscript comparison. Movahed's edition revisits Nicholson's base text in light of manuscripts discovered or reassessed since, and is widely regarded among contemporary Persian scholars as the most careful modern reconstruction of Rumi's original wording.",
        noteFa:
          "تصحیح مهم معاصر بر پایه مقابله گسترده نسخه‌های خطی. تصحیح موحد متن پایه نیکلسون را با توجه به نسخه‌های خطی‌ای که از آن پس یافت یا بازارزیابی شده‌اند، از نو بررسی می‌کند و در میان پژوهشگران معاصر فارسی‌زبان، دقیق‌ترین بازسازی امروزی از عبارت اصلی مولانا شمرده می‌شود.",
      },
      {
        title: "Fihi Ma Fihi, critical Persian edition",
        titleFa: "فیه ما فیه، تصحیح انتقادی",
        author: "Edited by Badiozzaman Foruzanfar",
        authorFa: "بدیع‌الزمان فروزانفر",
        note: "An authoritative modern Persian edition of Rumi's prose discourses. Like his edition of the Divan, Foruzanfar's work here established a stable base text for a work that had circulated for centuries in inconsistent manuscript copies.",
        noteFa:
          "از معتبرترین تصحیح‌های جدید گفتارهای منثور مولانا. فروزانفر در این‌جا نیز، همچون در تصحیح دیوان، متنی پایدار برای اثری فراهم آورد که قرن‌ها در نسخه‌های خطی ناهمسان دست‌به‌دست شده بود.",
      },
      {
        title: "Ahadith-e Masnavi and Sources of the Tales and Parables",
        titleFa: "احادیث مثنوی و مآخذ قصص و تمثیلات مثنوی",
        author: "Badiozzaman Foruzanfar",
        authorFa: "بدیع‌الزمان فروزانفر",
        note: "Reference works tracing hadith, narrative, and literary sources used in the Masnavi. Foruzanfar identified the prophetic sayings, folk tales, and earlier literary material Rumi drew on and reworked, giving later readers a map of where his stories came from before he made them his own.",
        noteFa:
          "آثار مرجع برای شناسایی احادیث، روایت‌ها و سرچشمه‌های ادبی و دینی داستان‌های مثنوی. فروزانفر احادیث نبوی، حکایت‌های عامیانه و مواد ادبی پیشینی را که مولانا از آن‌ها بهره برده و بازآفریده شناسایی کرد و به این ترتیب نقشه‌ای از خاستگاه داستان‌های او پیش از آن‌که به‌کلی از آنِ خودش شوند، در اختیار خوانندگان بعدی گذاشت.",
      },
    ],
  },
  {
    key: "early",
    title: "Early and scholarly translations",
    titleFa: "ترجمه‌های اولیه و دانشگاهی",
    books: [
      {
        title: "The Mesnevi of Mevlana Jelalu'd-din er-Rumi, Book the First",
        titleFa: "مثنوی مولانا، دفتر نخست",
        author: "James W. Redhouse",
        authorFa: "ترجمه جیمز ردهاوس",
        note: "An important nineteenth-century English translation of Book One. Redhouse's 1881 rendering was among the very first attempts to bring the Masnavi into English at length, working in a scholarly but pre-critical era before Nicholson's edition set a new standard.",
        noteFa:
          "یکی از ترجمه‌های مهم انگلیسی سده نوزدهم از دفتر اول مثنوی. برگردان ردهاوس در سال ۱۸۸۱ یکی از نخستین تلاش‌ها برای انتقال مثنوی به‌طور مفصل به انگلیسی بود، در دوره‌ای دانشورانه اما پیش از دورانی که تصحیح نیکلسون معیاری تازه پدید آورد.",
      },
      {
        title: "Masnavi-i Ma'navi: The Spiritual Couplets",
        titleFa: "مثنوی معنوی: ابیات روحانی",
        author: "E. H. Whinfield",
        authorFa: "ترجمه ای. اچ. وینفیلد",
        note: "An influential abridged Victorian translation of the Masnavi. Whinfield condensed all six books into a single volume of selected passages in 1887, trading completeness for readability, and introduced many English-language readers to the Masnavi decades before Nicholson's full translation existed.",
        noteFa:
          "ترجمه تلخیص‌شده و اثرگذار دوره ویکتوریایی از مثنوی. وینفیلد در سال ۱۸۸۷ هر شش دفتر را در یک جلد از گزیده‌های منتخب فشرد و کامل‌بودن را به‌خاطر خوانایی کنار گذاشت؛ نسخه او دهه‌ها پیش از وجود ترجمه کامل نیکلسون، بسیاری از خوانندگان انگلیسی‌زبان را با مثنوی آشنا کرد.",
      },
      {
        title: "The Masnavi by Jalalu'd-din Rumi, Book II",
        titleFa: "مثنوی مولانا، دفتر دوم",
        author: "C. E. Wilson",
        authorFa: "ترجمه سی. ای. ویلسون",
        note: "A detailed prose translation of the second book with commentary. Wilson's 1910 volume filled a gap left after Redhouse covered only Book One, giving English readers continued access to the Masnavi decades before Nicholson's complete edition appeared.",
        noteFa:
          "ترجمه منثور و تفصیلی دفتر دوم همراه با شرح. جلد ویلسون در سال ۱۹۱۰ خلأیی را پر کرد که پس از پوشش تنها دفتر اول به دست ردهاوس باقی مانده بود، و دهه‌ها پیش از انتشار ترجمه کامل نیکلسون، دسترسی خوانندگان انگلیسی‌زبان را به دفتر دوم مثنوی ادامه داد.",
      },
      {
        title: "The Mathnawi of Jalalu'ddin Rumi (8 volumes)",
        titleFa: "مثنوی مولانا در هشت جلد",
        author: "Reynold A. Nicholson",
        authorFa: "ترجمه و شرح رینولد نیکلسون",
        note: "Complete English translation, Persian text, commentary, and indexes; a landmark scholarly edition. Published between 1925 and 1940, it remains the only complete line-by-line English translation of the Masnavi accompanied by a full scholarly commentary, and is still the base text most later translators check their work against.",
        noteFa:
          "ترجمه کامل انگلیسی همراه با متن فارسی، شرح و نمایه‌ها؛ اثری بنیادی در مولوی‌پژوهی. این اثر که بین سال‌های ۱۹۲۵ تا ۱۹۴۰ منتشر شد، همچنان تنها ترجمه کامل و بیت‌به‌بیت انگلیسی مثنوی همراه با شرحی دانشگاهی کامل است، و بیشتر مترجمان بعدی کار خود را با آن می‌سنجند.",
      },
      {
        title: "Tales from the Masnavi",
        titleFa: "داستان‌هایی از مثنوی",
        author: "A. J. Arberry",
        authorFa: "ترجمه ای. جی. آربری",
        note: "Readable English retellings and translations of selected Masnavi stories. Arberry arranged the best-known parables — the elephant in the dark, the merchant and the parrot, and others — as self-contained narratives, a natural entry point for readers who find the full Masnavi's digressions harder going.",
        noteFa:
          "بازگویی و ترجمه روان گزیده‌ای از داستان‌های مثنوی. آربری شناخته‌شده‌ترین تمثیل‌ها — فیل در تاریکی، بازرگان و طوطی و دیگران — را به‌صورت روایت‌هایی مستقل سامان داد و آن را به دروازه‌ای طبیعی برای خوانندگانی بدل کرد که دنباله‌روی از انحراف‌های مثنوی کامل برایشان دشوارتر است.",
      },
      {
        title: "Discourses of Rumi",
        titleFa: "گفتارهای مولانا",
        author: "A. J. Arberry",
        authorFa: "ترجمه ای. جی. آربری",
        note: "Classic English translation of Fihi Ma Fihi. Arberry's 1961 translation was for decades the standard way English readers encountered Rumi's prose teachings, a more conversational counterpart to his celebrated verse.",
        noteFa:
          "ترجمه کلاسیک انگلیسی از فیه ما فیه. ترجمه آربری در سال ۱۹۶۱، تا دهه‌ها راه استاندارد آشنایی خوانندگان انگلیسی‌زبان با تعالیم منثور مولانا بود و همتایی محاوره‌ای‌تر برای اشعار مشهور او فراهم آورد.",
      },
      {
        title: "Mystical Poems of Rumi: First Selection",
        titleFa: "اشعار عرفانی مولانا: گزیده نخست",
        author: "A. J. Arberry",
        authorFa: "ترجمه ای. جی. آربری",
        note: "A major scholarly selection from Rumi's lyric poetry. This first volume, published in 1968, offered careful literal translations of several hundred poems from the Divan, aimed at readers wanting precision over poetic license.",
        noteFa:
          "گزیده‌ای مهم و دانشگاهی از غزل‌ها و اشعار عرفانی مولانا. این نخستین جلد که در سال ۱۹۶۸ منتشر شد، ترجمه‌های لفظی و دقیقی از چند صد شعر دیوان ارائه داد، برای خوانندگانی که دقت را بر آزادی شاعرانه ترجیح می‌دهند.",
      },
      {
        title: "Mystical Poems of Rumi: Second Selection",
        titleFa: "اشعار عرفانی مولانا: گزیده دوم",
        author: "A. J. Arberry",
        authorFa: "ترجمه ای. جی. آربری",
        note: "A companion volume expanding Arberry's translations from the Divan. Published posthumously in 1979, it continued the same literal, line-by-line approach as the first selection, together covering several hundred more poems.",
        noteFa:
          "جلد تکمیلی ترجمه‌های آربری از دیوان شمس. این جلد که پس از مرگ او در سال ۱۹۷۹ منتشر شد، همان رویکرد لفظی و بیت‌به‌بیت گزیده نخست را ادامه داد و چند صد شعر دیگر را نیز دربر گرفت.",
      },
      {
        title: "The Rubai'yat of Jalal al-Din Rumi",
        titleFa: "رباعیات جلال‌الدین رومی",
        author: "A. J. Arberry",
        authorFa: "ترجمه ای. جی. آربری",
        note: "Selected quatrains translated into English verse. Published posthumously, this volume applies Arberry's careful scholarship to the shorter, four-line rubai form, a genre distinct from the longer ghazals of the Divan.",
        noteFa:
          "گزیده رباعیات با ترجمه منظوم انگلیسی. این جلد که پس از مرگ او منتشر شد، دقت علمی آربری را بر قالب کوتاه‌تر رباعی چهارمصرعی به‌کار می‌گیرد، ژانری متفاوت از غزل‌های بلندتر دیوان.",
      },
      {
        title: "Spiritual Verses: The First Book of the Masnavi-ye Ma'navi",
        titleFa: "ابیات معنوی: دفتر اول مثنوی",
        author: "Alan Williams",
        authorFa: "ترجمه آلن ویلیامز",
        note: "A modern annotated translation of Book One based on a Persian critical edition. Williams renders the verse in rhyming couplets close to the Persian meter, with notes aimed at readers who want scholarly grounding without a full commentary apparatus.",
        noteFa:
          "ترجمه جدید و توضیح‌دار دفتر اول بر پایه متن انتقادی فارسی. ویلیامز شعر را در قالب بیت‌های مقفا و نزدیک به وزن فارسی برمی‌گرداند، همراه با یادداشت‌هایی برای خوانندگانی که پشتوانه علمی می‌خواهند بی‌آنکه به دستگاه کامل شرح نیاز داشته باشند.",
      },
      {
        title: "The Masnavi, Book One",
        titleFa: "مثنوی، دفتر اول",
        author: "Jawid Mojaddedi",
        authorFa: "ترجمه جاوید مجددی",
        note: "Unabridged rhyming English translation in Oxford World's Classics. Mojaddedi set himself the difficult task of rendering the Masnavi's couplets in rhyming English verse rather than prose, aiming to preserve something of the original's music while staying close to its sense.",
        noteFa:
          "ترجمه کامل و موزون انگلیسی در مجموعه کلاسیک‌های آکسفورد. مجددی کار دشوار برگرداندن بیت‌های مثنوی را در قالب شعر مقفای انگلیسی، به‌جای نثر، بر عهده گرفت، با این هدف که چیزی از موسیقی متن اصلی را همراه با نزدیکی به معنای آن حفظ کند.",
      },
      {
        title: "The Masnavi, Book Two",
        titleFa: "مثنوی، دفتر دوم",
        author: "Jawid Mojaddedi",
        authorFa: "ترجمه جاوید مجددی",
        note: "Second volume of the complete Oxford translation project. It continues the rhyming-couplet approach of Book One, extending the project toward what would become, decades later, the first complete unabridged English verse translation of the Masnavi.",
        noteFa:
          "جلد دوم پروژه ترجمه کامل آکسفورد. این جلد رویکرد بیت‌های مقفای دفتر اول را ادامه می‌دهد و پروژه را به سوی چیزی پیش می‌برد که دهه‌ها بعد نخستین ترجمه منظوم و کامل انگلیسی مثنوی خواهد شد.",
      },
      {
        title: "The Masnavi, Book Three",
        titleFa: "مثنوی، دفتر سوم",
        author: "Jawid Mojaddedi",
        authorFa: "ترجمه جاوید مجددی",
        note: "Third volume of the complete Oxford translation project. Book Three is often singled out for its story of the mystical trader Bahlul and its lengthy meditations on reason versus intuitive knowledge.",
        noteFa:
          "جلد سوم پروژه ترجمه کامل آکسفورد. دفتر سوم اغلب به‌خاطر حکایت بهلول و تأملات طولانی‌اش درباره عقل در برابر شناخت شهودی برجسته می‌شود.",
      },
      {
        title: "The Masnavi, Book Four",
        titleFa: "مثنوی، دفتر چهارم",
        author: "Jawid Mojaddedi",
        authorFa: "ترجمه جاوید مجددی",
        note: "Fourth volume, emphasizing mature mystical teaching and spiritual guidance. By this point in the Masnavi, the balance shifts further from storytelling toward direct instruction, and Mojaddedi's translation keeps pace with that shift in register.",
        noteFa:
          "جلد چهارم با تمرکز بر تعالیم عرفانی پخته و جایگاه راهنمای معنوی. در این نقطه از مثنوی، توازن باز هم بیشتر از حکایت‌گویی به‌سوی آموزش مستقیم می‌رود، و ترجمه مجددی همراه با این تغییر لحن پیش می‌رود.",
      },
      {
        title: "The Masnavi, Book Five",
        titleFa: "مثنوی، دفتر پنجم",
        author: "Jawid Mojaddedi",
        authorFa: "ترجمه جاوید مجددی",
        note: "Fifth unabridged volume of the Oxford series. Book Five is the longest of the six and turns repeatedly to the discipline of self-restraint as a precondition for spiritual insight.",
        noteFa:
          "جلد پنجم ترجمه کامل مجموعه آکسفورد. دفتر پنجم بلندترین دفتر از میان شش دفتر است و بارها به ضبط نفس به‌عنوان پیش‌شرط بصیرت معنوی بازمی‌گردد.",
      },
      {
        title: "The Masnavi, Book Six",
        titleFa: "مثنوی، دفتر ششم",
        author: "Jawid Mojaddedi",
        authorFa: "ترجمه جاوید مجددی",
        note: "Published in 2025, completing the first full unabridged English verse translation of all six books. Mojaddedi's four-decade project closed with Book Six, which Rumi left without a formal conclusion at his death, ending the series on the same open note as the original.",
        noteFa:
          "منتشرشده در سال ۲۰۲۵ و تکمیل‌کننده نخستین ترجمه منظوم و کامل انگلیسی هر شش دفتر. پروژه چهار دهه‌ای مجددی با دفتر ششم به پایان رسید، دفتری که مولانا در زمان درگذشتش بی‌پایانی رسمی رها کرده بود؛ ترجمه نیز مجموعه را با همان لحن ناتمام متن اصلی به پایان می‌برد.",
      },
      {
        title: "Signs of the Unseen: The Discourses of Jalaluddin Rumi",
        titleFa: "نشانه‌های نادیدنی: گفتارهای مولانا",
        author: "Wheeler M. Thackston Jr.",
        authorFa: "ترجمه ویلر تکستون",
        note: "A modern English rendering of Rumi's prose teachings. Thackston's translation of Fihi Ma Fihi offers a more contemporary alternative to Arberry's earlier version, for readers who want the discourses in plainer modern English.",
        noteFa:
          "برگردان جدید انگلیسی از تعالیم و گفتارهای منثور مولانا. ترجمه تکستون از فیه ما فیه، جایگزینی معاصرتر برای نسخه پیشین آربری ارائه می‌دهد، برای خوانندگانی که گفتارها را به انگلیسی امروزی‌تر و ساده‌تر می‌خواهند.",
      },
      {
        title: "The Quatrains of Rumi",
        titleFa: "رباعیات مولانا",
        author: "Ibrahim W. Gamard and A. G. Rawan Farhadi",
        authorFa: "ابراهیم گامارد و عبدالحق روان فرهادی",
        note: "A comprehensive translation with Persian text, commentary, glossary, and concordance. This is one of the few English editions to treat the disputed rubaiyat with full scholarly apparatus, addressing questions of attribution directly rather than passing over them.",
        noteFa:
          "ترجمه جامع همراه با متن فارسی، شرح، واژه‌نامه و تطبیق نسخه‌ها. این یکی از معدود ویرایش‌های انگلیسی است که رباعیات محل مناقشه را با دستگاهی کاملاً علمی بررسی می‌کند و به‌جای گذر از کنار پرسش‌های انتساب، مستقیماً به آن‌ها می‌پردازد.",
      },
      {
        title: "The Stanzaic Poems of Rumi",
        titleFa: "ترجیعات مولانا",
        author: "Muhammad Isa Waley",
        authorFa: "محمد عیسی والی",
        note: "Critical edition, translation, and commentary on Rumi's tarjiyat. These stanzaic poems are a smaller, less-translated part of Rumi's output than the ghazals of the Divan, and Waley's scholarly edition is one of the only dedicated English treatments of the form.",
        noteFa:
          "تصحیح، ترجمه و شرح علمی ترجیعات مولانا. این ترجیعات بخشی کوچک‌تر و کمترترجمه‌شده از آثار مولانا در قیاس با غزل‌های دیوان‌اند، و ویرایش علمی والی از معدود پرداخت‌های انگلیسی اختصاصی به این قالب است.",
      },
    ],
  },
  {
    key: "modern",
    title: "Modern translations and popular selections",
    titleFa: "ترجمه‌های جدید و گزیده‌های پرخواننده",
    books: [
      {
        title: "Ruins of the Heart",
        titleFa: "ویرانه‌های دل",
        author: "Kabir Helminski",
        authorFa: "ترجمه کبیر هلمینسکی",
        note: "Selected lyric poetry emphasizing longing, transformation, and the heart. Helminski, a Mevlevi sheikh as well as a translator, brings a practitioner's ear to these renderings, favoring the emotional accessibility of the ghazals over strict literalism.",
        noteFa:
          "گزیده غزل‌ها با تأکید بر اشتیاق، دگرگونی و سیر دل. هلمینسکی که در کنار مترجمی، شیخ طریقت مولویه نیز هست، گوشی اهل عمل به این برگردان‌ها می‌آورد و دسترس‌پذیری عاطفی غزل‌ها را بر لفظ‌گرایی محض ترجیح می‌دهد.",
      },
      {
        title: "Love Is a Stranger",
        titleFa: "عشق غریبه‌ای است",
        author: "Kabir Helminski",
        authorFa: "ترجمه کبیر هلمینسکی",
        note: "Selected lyric poetry presenting love as the force of spiritual awakening. A shorter, thematically focused companion to Helminski's other Rumi collections, organized around the single idea that gives the book its title.",
        noteFa:
          "گزیده اشعار غنایی که عشق را نیروی بیداری معنوی معرفی می‌کند. همراهی کوتاه‌تر و موضوع‌محورتر برای دیگر مجموعه‌های هلمینسکی از مولانا، که حول همان ایده‌ای سامان یافته که عنوان کتاب را ساخته است.",
      },
      {
        title: "Rumi: Daylight",
        titleFa: "مولانا: روشنای روز",
        author: "Camille and Kabir Helminski",
        authorFa: "کامیل و کبیر هلمینسکی",
        note: "Accessible selections from poetry and prose arranged for contemporary readers. Organized as short daily readings rather than a cover-to-cover book, it mixes verse with passages from Fihi Ma Fihi and other prose sources.",
        noteFa:
          "گزیده‌ای روان از شعر و نثر مولانا برای خواننده امروز. این کتاب به‌جای خواندن پیوسته از ابتدا تا انتها، برای مطالعه روزانه و کوتاه سامان یافته و شعر را با بخش‌هایی از فیه ما فیه و دیگر منابع منثور درمی‌آمیزد.",
      },
      {
        title: "Jewels of Remembrance",
        titleFa: "گوهرهای یادآوری",
        author: "Camille and Kabir Helminski",
        authorFa: "کامیل و کبیر هلمینسکی",
        note: "A daily collection of 365 short selections from Rumi. Structured as a year-long devotional reader, one passage per day, drawing from across Rumi's poetry and prose.",
        noteFa:
          "مجموعه‌ای روزانه شامل ۳۶۵ گزیده کوتاه از مولانا. این کتاب همچون خوانشی تعبدی برای یک سال کامل، یک گزیده در روز، از سراسر شعر و نثر مولانا سامان یافته است.",
      },
      {
        title: "The Pocket Rumi",
        titleFa: "مولانای جیبی",
        author: "Edited and translated by Kabir Helminski",
        authorFa: "گردآوری و ترجمه کبیر هلمینسکی",
        note: "A compact introductory anthology of Rumi's poetry and teachings. Designed as a small-format, low-commitment starting point rather than a comprehensive collection, for readers who want a first taste before going further.",
        noteFa:
          "گزیده‌ای فشرده و مقدماتی از شعرها و تعالیم مولانا. این کتاب با قطعی کوچک و حجمی کم، بیش از آنکه مجموعه‌ای جامع باشد، نقطه شروعی است برای خوانندگانی که پیش از رفتن به عمق، می‌خواهند نخستین طعم را بچشند.",
      },
      {
        title: "Love's Ripening: Rumi on the Heart's Journey",
        titleFa: "رسیدن عشق: مولانا و سفر دل",
        author: "Kabir Helminski and Ahmad Rezwani",
        authorFa: "کبیر هلمینسکی و احمد رضوانی",
        note: "Translations centered on love, the heart, and spiritual maturation. A collaboration pairing Helminski's English with Rezwani's grounding in the Persian, focused specifically on Rumi's treatment of love as a developmental path rather than a single feeling.",
        noteFa:
          "ترجمه‌هایی درباره عشق، قلب و بلوغ معنوی. همکاری‌ای که انگلیسی هلمینسکی را با تسلط رضوانی بر متن فارسی پیوند می‌دهد، با تمرکز مشخص بر عشق نزد مولانا به‌عنوان مسیری در حال رشد، نه صرفاً یک احساس واحد.",
      },
      {
        title: "The Rumi Daybook",
        titleFa: "روزنامه مولانا",
        author: "Edited by Camille and Kabir Helminski",
        authorFa: "کامیل و کبیر هلمینسکی",
        note: "365 poems and teachings designed for daily reading. Similar in structure to Jewels of Remembrance, offering another year-long cycle of short daily passages for readers who prefer to return to Rumi in small doses.",
        noteFa:
          "۳۶۵ شعر و آموزه برای مطالعه روزانه. از نظر ساختار شبیه به گوهرهای یادآوری، چرخه‌ای دیگر از گزیده‌های کوتاه روزانه برای یک سال ارائه می‌دهد، برای خوانندگانی که ترجیح می‌دهند به مولانا در دوزهای کوچک بازگردند.",
      },
      {
        title: "The Rumi Collection",
        titleFa: "مجموعه مولانا",
        author: "Edited by Kabir Helminski",
        authorFa: "گردآوری کبیر هلمینسکی",
        note: "An anthology bringing together respected literary translations of Rumi. Rather than offering new translations, this volume gathers established renderings — including Helminski's own and others' — into a single accessible collection.",
        noteFa:
          "گلچینی از ترجمه‌های ادبی معتبر آثار مولانا. این جلد به‌جای ارائه ترجمه‌های تازه، برگردان‌های شناخته‌شده — از جمله کارهای خود هلمینسکی و دیگران — را در مجموعه‌ای واحد و در دسترس گرد می‌آورد.",
      },
      {
        title: "The Essential Rumi",
        titleFa: "مولانای ضروری",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "The most influential popular English adaptation, based on earlier literal translations. First published in 1995, this is by far the best-selling Rumi book in English and the volume most responsible for his modern popularity outside Persian- and Turkish-speaking readerships; Barks worked from Nicholson's and Arberry's literal translations rather than the Persian directly.",
        noteFa:
          "اثرگذارترین بازآفرینی عامه‌پسند انگلیسی که بر ترجمه‌های لفظی پیشین تکیه دارد. این کتاب که نخستین‌بار در سال ۱۹۹۵ منتشر شد، تا امروز پرفروش‌ترین کتاب مولانا به زبان انگلیسی است و بیشترین سهم را در محبوبیت امروزی او بیرون از خوانندگان فارسی‌زبان و ترک‌زبان داشته؛ بارکس بر پایه ترجمه‌های لفظی نیکلسون و آربری کار کرد، نه مستقیماً از فارسی.",
      },
      {
        title: "The Illuminated Rumi",
        titleFa: "مولانای مصور",
        author: "Coleman Barks; illustrations by Michael Green",
        authorFa: "کولمن بارکس؛ تصویرگری مایکل گرین",
        note: "Poetic adaptations paired with visual art and calligraphic design. A gift-book format pairing Barks's versions with Michael Green's illustration and design, aimed as much at the eye as at close reading.",
        noteFa:
          "بازآفرینی‌های شعری همراه با هنر تصویری و طراحی خوشنویسانه. کتابی در قالب هدیه که روایت‌های بارکس را با تصویرگری و طراحی مایکل گرین همراه می‌کند، به همان اندازه برای چشم ساخته شده که برای خواندن دقیق.",
      },
      {
        title: "The Soul of Rumi",
        titleFa: "روح مولانا",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "A large collection of ecstatic poems and teaching passages. One of Barks's bigger single volumes, gathering material from across his earlier smaller collections alongside new versions.",
        noteFa:
          "مجموعه‌ای گسترده از شعرهای شورمندانه و بخش‌های تعلیمی. یکی از حجیم‌ترین جلدهای منفرد بارکس، که موادی از مجموعه‌های کوچک‌تر پیشین او را در کنار روایت‌های تازه گرد می‌آورد.",
      },
      {
        title: "Rumi: The Book of Love",
        titleFa: "مولانا: کتاب عشق",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "A thematic collection focused on love, longing, and intimacy. Barks organizes selections from across his body of work around a single theme, aimed at readers approaching Rumi specifically through that lens.",
        noteFa:
          "گزیده‌ای موضوعی درباره عشق، اشتیاق و صمیمیت. بارکس در این کتاب گزیده‌هایی از سراسر آثار خود را حول یک موضوع واحد سامان می‌دهد، برای خوانندگانی که می‌خواهند مشخصاً از این زاویه به مولانا نزدیک شوند.",
      },
      {
        title: "Rumi: Bridge to the Soul",
        titleFa: "مولانا: پلی به سوی جان",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "Poems on music, silence, friendship, and inward journey. A quieter, more meditative selection than some of Barks's other volumes, organized loosely around interior rather than ecstatic experience.",
        noteFa:
          "شعرهایی درباره موسیقی، سکوت، دوستی و سفر درونی. گزیده‌ای آرام‌تر و تأملی‌تر از برخی دیگر مجلدات بارکس، که به‌طور غیررسمی حول تجربه درونی، نه شورمندانه، سامان یافته است.",
      },
      {
        title: "Rumi: The Big Red Book",
        titleFa: "مولانا: کتاب بزرگ سرخ",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "A broad anthology of adaptations from Rumi's lyric poetry. One of the largest single-volume collections of Barks's work, drawing together material from across his career into one book.",
        noteFa:
          "گلچینی گسترده از بازآفرینی‌های غزل‌های مولانا. یکی از بزرگ‌ترین مجموعه‌های تک‌جلدی از کار بارکس، که موادی از سراسر دوران کاری‌اش را در یک کتاب گرد می‌آورد.",
      },
      {
        title: "A Year with Rumi",
        titleFa: "یک سال با مولانا",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "A 365-day devotional and reflective reading collection. Barks's own version of the daily-reader format used by several other translators on this list, one short passage per day for a full year.",
        noteFa:
          "مجموعه‌ای ۳۶۵روزه برای تأمل و خواندن روزانه. نسخه بارکس از قالب کتاب روزانه‌خوانی که چند مترجم دیگر در این فهرست نیز به‌کار برده‌اند، یک گزیده کوتاه در روز برای یک سال کامل.",
      },
      {
        title: "Rumi: Soul Fury",
        titleFa: "مولانا: خروش جان",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "A collection emphasizing Rumi and Shams on friendship and transforming love. Focused specifically on the relationship between Rumi and Shams-e Tabrizi as the emotional center of the poetry.",
        noteFa:
          "مجموعه‌ای با تمرکز بر دوستی مولانا و شمس و عشق دگرگون‌کننده. این کتاب مشخصاً بر رابطه مولانا و شمس تبریزی به‌عنوان مرکز عاطفی شعر او متمرکز است.",
      },
      {
        title: "Open Secret: Versions of Rumi",
        titleFa: "راز آشکار: روایت‌هایی از مولانا",
        author: "Coleman Barks and John Moyne",
        authorFa: "کولمن بارکس و جان موین",
        note: "Early free-verse versions that helped establish Rumi's modern American readership. Published in 1984, this was Barks and Moyne's first Rumi collection and the starting point of the popular American reception that The Essential Rumi later expanded on.",
        noteFa:
          "از نخستین بازآفرینی‌های شعر آزاد که به گسترش خوانندگان آمریکایی مولانا کمک کرد. این کتاب که در سال ۱۹۸۴ منتشر شد، نخستین مجموعه بارکس و موین درباره مولانا و نقطه آغاز بازتاب عامه‌پسند مولانا در آمریکا بود که مولانای ضروری بعدها آن را گسترش داد.",
      },
      {
        title: "Like This: More Poems of Rumi",
        titleFa: "چنین است: شعرهای بیشتر از مولانا",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "Popular poetic versions of ghazals and teaching poems. A mid-career Barks collection continuing the same free-verse adaptation approach as his earlier books.",
        noteFa:
          "بازآفرینی‌های محبوب از غزل‌ها و اشعار تعلیمی. مجموعه‌ای از میانه دوران کاری بارکس که همان رویکرد بازآفرینی شعر آزاد کتاب‌های پیشین او را ادامه می‌دهد.",
      },
      {
        title: "Unseen Rain: Quatrains of Rumi",
        titleFa: "باران نادیدنی: رباعیات مولانا",
        author: "Coleman Barks and John Moyne",
        authorFa: "کولمن بارکس و جان موین",
        note: "Free-verse adaptations of Rumi's quatrains. Barks and Moyne turn their attention here to the shorter rubai form rather than the longer ghazals covered in most of their other books.",
        noteFa:
          "بازآفرینی آزاد رباعیات مولانا. بارکس و موین در این کتاب توجه خود را مشخصاً به قالب کوتاه‌تر رباعی معطوف می‌کنند، نه غزل‌های بلندتری که بیشتر کتاب‌های دیگرشان به آن پرداخته.",
      },
      {
        title: "Delicious Laughter",
        titleFa: "خنده شیرین",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "Short, playful, and ecstatic Rumi adaptations. A lighter-toned collection highlighting the humor and playfulness that appears throughout Rumi's work alongside its more solemn passages.",
        noteFa:
          "بازآفرینی‌های کوتاه، بازیگوشانه و شورمندانه از مولانا. مجموعه‌ای با لحنی سبک‌تر که طنز و بازیگوشی موجود در سراسر آثار مولانا را، در کنار بخش‌های جدی‌تر آن، برجسته می‌کند.",
      },
      {
        title: "The Glance",
        titleFa: "نگاه",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "Poems and stories about inner vision, love, and spiritual recognition. Organized around the recurring Sufi image of the glance as a moment of recognition between lover and Beloved.",
        noteFa:
          "شعرها و داستان‌هایی درباره دید باطنی، عشق و شناخت معنوی. حول تصویر تکرارشونده صوفیانه نگاه، به‌عنوان لحظه شناخت میان عاشق و معشوق، سامان یافته است.",
      },
      {
        title: "Birdsong",
        titleFa: "آواز پرندگان",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "A compact collection of short poems associated with longing and freedom. One of Barks's smallest volumes, a brief selection rather than a comprehensive anthology.",
        noteFa:
          "مجموعه‌ای فشرده از شعرهای کوتاه درباره اشتیاق و آزادی. یکی از کوچک‌ترین مجلدات بارکس، گزیده‌ای مختصر و نه گلچینی جامع.",
      },
      {
        title: "Feeling the Shoulder of the Lion",
        titleFa: "احساس شانه شیر",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "Poetry and teaching stories emphasizing courage and companionship. An earlier Barks collection, mixing verse with teaching anecdotes around the theme of friendship under difficulty.",
        noteFa:
          "شعر و حکایت با تأکید بر شجاعت و همراهی. از مجموعه‌های پیشین‌تر بارکس، که شعر را با حکایت‌های تعلیمی حول محور دوستی در دشواری درمی‌آمیزد.",
      },
      {
        title: "This Longing: Poetry, Teaching Stories, and Letters of Rumi",
        titleFa: "این اشتیاق: شعرها، حکایت‌های تعلیمی و نامه‌های مولانا",
        author: "Coleman Barks and John Moyne",
        authorFa: "کولمن بارکس و جان موین",
        note: "A mixed collection of poems, stories, and letters. One of the more varied Barks and Moyne volumes in form, moving between verse, narrative teaching stories, and prose.",
        noteFa:
          "مجموعه‌ای ترکیبی از شعر، داستان و نامه. یکی از متنوع‌ترین مجلدات بارکس و موین از نظر قالب، که میان شعر، حکایت‌های تعلیمی روایی و نثر در نوسان است.",
      },
      {
        title: "We Are Three",
        titleFa: "ما سه تنیم",
        author: "Coleman Barks",
        authorFa: "کولمن بارکس",
        note: "A concise collection of Rumi versions for general readers. A short, accessible sampler rather than a career-spanning anthology, aimed at first-time readers.",
        noteFa:
          "گزیده‌ای کوتاه و عمومی از بازآفرینی‌های مولانا. نمونه‌ای کوتاه و در دسترس، نه گلچینی فراگیر از کل دوران کاری، برای خوانندگانی که تازه با مولانا آشنا می‌شوند.",
      },
      {
        title: "Rending the Veil",
        titleFa: "دریدن پرده",
        author: "Shahram Shiva",
        authorFa: "شهرام شیوا",
        note: "Parallel literal and poetic renderings designed to show the movement from Persian to English. Shiva prints his literal translation alongside a freer poetic version of the same poem, letting readers see the distance between the two approaches directly.",
        noteFa:
          "ترجمه‌های لفظی و شاعرانه در کنار هم برای نشان‌دادن مسیر انتقال از فارسی به انگلیسی. شیوا ترجمه لفظی خود را در کنار روایتی شاعرانه‌تر از همان شعر چاپ می‌کند و به این ترتیب فاصله میان این دو رویکرد را مستقیماً پیش چشم خواننده می‌گذارد.",
      },
      {
        title: "Hush, Don't Say Anything to God",
        titleFa: "خاموش، چیزی به خدا مگو",
        author: "Shahram Shiva",
        authorFa: "شهرام شیوا",
        note: "Passionate poetic versions of selected Rumi poems. A companion volume to Rending the Veil, presenting Shiva's freer poetic adaptations on their own.",
        noteFa:
          "بازآفرینی‌های شاعرانه و پرشور از گزیده اشعار مولانا. جلدی همراه با دریدن پرده، که بازآفرینی‌های شاعرانه‌تر شیوا را به‌تنهایی ارائه می‌کند.",
      },
      {
        title: "Divan-i Shams-i Tabriz (multi-volume translation)",
        titleFa: "دیوان شمس تبریزی، ترجمه چندجلدی",
        author: "Nevit O. Ergin",
        authorFa: "نوید اوغوز ارگین",
        note: "A large-scale English translation project devoted to Rumi's Divan. Ergin's multi-volume project is one of the most extensive attempts to translate the Divan's several thousand poems into English, far beyond what any single-volume selection can cover.",
        noteFa:
          "پروژه‌ای گسترده برای ترجمه انگلیسی دیوان شمس. پروژه چندجلدی ارگین یکی از فراگیرترین تلاش‌ها برای ترجمه چند هزار شعر دیوان به انگلیسی است، فراتر از آنچه هر گزیده تک‌جلدی می‌تواند دربر بگیرد.",
      },
      {
        title: "The Forbidden Rumi",
        titleFa: "مولانای ممنوع",
        author: "Nevit O. Ergin and Will Johnson",
        authorFa: "نوید اوغوز ارگین و ویل جانسون",
        note: "A selection highlighting earthy, provocative, and less commonly translated poems. Draws out material from Ergin's larger Divan project that more cautious anthologies tend to leave out.",
        noteFa:
          "گزیده‌ای از شعرهای زمینی، جسورانه و کمتر ترجمه‌شده. این جلد موادی از پروژه بزرگ‌تر دیوان ارگین را بیرون می‌کشد که گلچین‌های محتاط‌تر معمولاً از آن‌ها صرف‌نظر می‌کنند.",
      },
      {
        title: "The Rubais of Rumi: Insane with Love",
        titleFa: "رباعیات مولانا: دیوانه عشق",
        author: "Nevit O. Ergin",
        authorFa: "نوید اوغوز ارگین",
        note: "English versions of selected quatrains centered on ecstatic love. Ergin's take on the rubaiyat, distinct from Arberry's more literal scholarly version and Barks's freer adaptations.",
        noteFa:
          "برگردان انگلیسی رباعیات منتخب با محور عشق شورمندانه. روایت ارگین از رباعیات، متمایز از نسخه لفظی و علمی‌تر آربری و بازآفرینی‌های آزادتر بارکس.",
      },
      {
        title: "Rumi: Fountain of Fire",
        titleFa: "مولانا: چشمه آتش",
        author: "Nader Khalili",
        authorFa: "نادر خلیلی",
        note: "Poetic English renderings by an Iranian-born architect and writer. Khalili, better known for his work in earth architecture, brings a native Persian speaker's perspective distinct from most of the other translators on this list.",
        noteFa:
          "برگردان‌های شاعرانه انگلیسی از نویسنده و معمار ایرانی‌تبار. خلیلی که بیشتر به‌خاطر کارش در معماری خشتی شناخته می‌شود، در این‌جا نگاهی به‌عنوان یک فارسی‌زبان بومی ارائه می‌دهد که با بیشتر مترجمان دیگر این فهرست متفاوت است.",
      },
      {
        title: "Rumi: Dancing the Flame",
        titleFa: "مولانا: رقص شعله",
        author: "Nader Khalili",
        authorFa: "نادر خلیلی",
        note: "A companion collection emphasizing movement, fire, and spiritual transformation. Continues the approach of Fountain of Fire with a further selection organized around related imagery.",
        noteFa:
          "مجموعه‌ای همراه با تأکید بر حرکت، آتش و دگرگونی معنوی. رویکرد چشمه آتش را با گزیده‌ای دیگر، حول تصاویری مرتبط، ادامه می‌دهد.",
      },
      {
        title: "Rumi: 53 Secrets from the Tavern of Love",
        titleFa: "مولانا: ۵۳ راز از میخانه عشق",
        author: "Amin Banani, translated with collaborators",
        authorFa: "امین بنانی و همکاران",
        note: "Poems from the Rubaiyat presented around the metaphor of the tavern of love. A collaborative translation organizing selected quatrains around the recurring image of the tavern (kharabat) as a place where rank and pretense dissolve.",
        noteFa:
          "گزیده‌هایی از رباعیات با محور استعاره میخانه عشق. ترجمه‌ای گروهی که رباعیات منتخب را حول تصویر تکرارشونده میخانه (خرابات) — جایی که رتبه و تظاهر از میان می‌رود — سامان می‌دهد.",
      },
      {
        title: "Rumi: Swallowing the Sun",
        titleFa: "مولانا: بلعیدن خورشید",
        author: "Franklin D. Lewis",
        authorFa: "فرانکلین لوئیس",
        note: "A carefully translated and contextualized selection of poems. Lewis, also the author of the standard modern biography Rumi: Past and Present, East and West, pairs his translations here with the same historical grounding.",
        noteFa:
          "گزیده‌ای دقیق و زمینه‌مند از اشعار مولانا. لوئیس که نویسنده زندگینامه استاندارد و معاصر مولانا: دیروز و امروز، شرق و غرب نیز هست، در این‌جا ترجمه‌های خود را با همان زمینه تاریخی همراه می‌کند.",
      },
      {
        title: "Rumi's Little Book of Life",
        titleFa: "کتاب کوچک زندگی مولانا",
        author: "Maryam Mafi and Azima Melita Kolin",
        authorFa: "مریم مافی و آزیمه ملیتا کولین",
        note: "Short poems and reflections arranged around daily life and inner change. Part of Mafi's series of small thematic Rumi books, aimed at general readers rather than students of Sufism specifically.",
        noteFa:
          "شعرها و تأملات کوتاه درباره زندگی روزمره و تغییر درونی. بخشی از مجموعه کتاب‌های موضوعی و کوچک مافی درباره مولانا، برای خواننده عمومی، نه لزوماً دانشجوی تصوف.",
      },
      {
        title: "Rumi's Little Book of Love",
        titleFa: "کتاب کوچک عشق مولانا",
        author: "Maryam Mafi",
        authorFa: "مریم مافی",
        note: "A compact thematic selection on love and relationship. The love-focused volume in Mafi's Little Book series.",
        noteFa:
          "گزیده‌ای کوتاه و موضوعی درباره عشق و رابطه. جلد با محور عشق در مجموعه کتاب‌های کوچک مافی.",
      },
      {
        title: "Rumi's Little Book of Wisdom",
        titleFa: "کتاب کوچک حکمت مولانا",
        author: "Maryam Mafi",
        authorFa: "مریم مافی",
        note: "Brief teachings and poems organized as practical wisdom. The wisdom-focused volume in the same series, organized as short, applicable teachings.",
        noteFa:
          "آموزه‌ها و شعرهای کوتاه در قالب حکمت عملی. جلد با محور حکمت در همان مجموعه، سامان‌یافته به‌صورت آموزه‌هایی کوتاه و کاربردی.",
      },
      {
        title: "The Book of Rumi: 105 Stories and Fables",
        titleFa: "کتاب مولانا: ۱۰۵ داستان و حکایت",
        author: "Maryam Mafi",
        authorFa: "مریم مافی",
        note: "Plain-language English retellings of selected Masnavi stories. Mafi's largest contribution to this list, retelling over a hundred of the Masnavi's parables in accessible modern prose rather than verse.",
        noteFa:
          "بازگویی ساده انگلیسی از داستان‌های منتخب مثنوی. بزرگ‌ترین سهم مافی در این فهرست، که بیش از صد تمثیل از مثنوی را به نثر ساده و امروزی، نه شعر، بازمی‌گوید.",
      },
      {
        title: "The Teachings of Rumi",
        titleFa: "تعالیم مولانا",
        author: "Andrew Harvey",
        authorFa: "اندرو هاروی",
        note: "A thematic spiritual anthology for contemporary seekers. Harvey, known for his work across several mystical traditions, frames Rumi's teachings for readers approaching Sufism from a broader interfaith spiritual perspective.",
        noteFa:
          "گلچینی معنوی و موضوعی برای جویندگان معاصر. هاروی که به کار در چند سنت عرفانی مختلف شناخته می‌شود، تعالیم مولانا را برای خوانندگانی که از منظری معنوی و میان‌دینی‌تر به تصوف نزدیک می‌شوند، قاب‌بندی می‌کند.",
      },
    ],
  },
  {
    key: "biography",
    title: "Biography, history, and scholarship",
    titleFa: "زندگینامه، تاریخ و پژوهش",
    books: [
      {
        title: "Rumi: Past and Present, East and West",
        titleFa: "مولانا: دیروز و امروز، شرق و غرب",
        author: "Franklin D. Lewis",
        authorFa: "فرانکلین لوئیس",
        note: "The most comprehensive modern English study of Rumi's life, works, reception, and legacy. Lewis combines close textual scholarship with a full account of how Rumi has been read — and sometimes misread — from thirteenth-century Konya to twenty-first-century America, and it is generally treated as the reference work for anyone doing serious research on Rumi in English.",
        noteFa:
          "جامع‌ترین پژوهش انگلیسی معاصر درباره زندگی، آثار، بازتاب و میراث مولانا. لوئیس پژوهش دقیق متنی را با روایتی کامل از نحوه خوانده‌شدن — و گاه بدخوانده‌شدن — مولانا، از قونیه سده سیزدهم تا آمریکای سده بیست‌ویکم، درمی‌آمیزد و این کتاب عموماً به‌عنوان اثر مرجع برای هر پژوهش جدی درباره مولانا به زبان انگلیسی شمرده می‌شود.",
      },
      {
        title: "Rumi's Secret: The Life of the Sufi Poet of Love",
        titleFa: "راز مولانا: زندگی شاعر صوفی عشق",
        author: "Brad Gooch",
        authorFa: "برد گوچ",
        note: "A popular narrative biography based on travel, history, and textual research. Gooch retraces Rumi's route from Balkh to Konya in person, blending on-the-ground travel writing with biography for a general rather than academic readership.",
        noteFa:
          "زندگینامه‌ای روایی و عمومی بر پایه سفر، تاریخ و پژوهش متنی. گوچ مسیر مولانا را از بلخ تا قونیه شخصاً بازمی‌پیماید و سفرنامه‌نویسی میدانی را با زندگینامه‌نویسی، برای خواننده عمومی نه لزوماً دانشگاهی، درمی‌آمیزد.",
      },
      {
        title: "Rumi's World: The Life and Work of the Great Sufi Poet",
        titleFa: "جهان مولانا: زندگی و آثار شاعر بزرگ صوفی",
        author: "Annemarie Schimmel",
        authorFa: "آنماری شیمل",
        note: "An accessible portrait of Rumi's life, cultural world, symbolism, and poetry. A more general-audience companion to Schimmel's denser academic studies, covering similar ground in a more approachable form.",
        noteFa:
          "تصویری خواندنی از زندگی، جهان فرهنگی، نمادها و شعر مولانا. همراهی برای مخاطب عمومی‌تر در کنار مطالعات دانشگاهی و فشرده‌تر شیمل، که همان زمینه را به شکلی در دسترس‌تر می‌پوشاند.",
      },
      {
        title: "I Am Wind, You Are Fire",
        titleFa: "من باد هستم، تو آتش",
        author: "Annemarie Schimmel",
        authorFa: "آنماری شیمل",
        note: "A classic introduction to Rumi's imagery, religious setting, and mystical language. First published in 1978, this remains one of the most widely assigned introductions to Rumi in university courses on Islamic mysticism.",
        noteFa:
          "مقدمه‌ای کلاسیک بر تصویرپردازی، زمینه دینی و زبان عرفانی مولانا. این کتاب که نخستین‌بار در سال ۱۹۷۸ منتشر شد، همچنان یکی از پرکاربردترین مقدمه‌ها بر مولانا در درس‌های دانشگاهی عرفان اسلامی است.",
      },
      {
        title: "The Triumphal Sun",
        titleFa: "خورشید پیروزمند",
        author: "Annemarie Schimmel",
        authorFa: "آنماری شیمل",
        note: "A detailed study of the themes, symbols, and structure of Rumi's writings. Schimmel's most technical Rumi book, organized thematically around recurring images — light, wine, the reed, the ocean — traced across his entire body of work.",
        noteFa:
          "پژوهشی تفصیلی درباره موضوعات، نمادها و ساختار آثار مولانا. فنی‌ترین کتاب شیمل درباره مولانا، که به‌صورت موضوعی حول تصاویر تکرارشونده — نور، می، نی، دریا — در سراسر آثار او سامان یافته است.",
      },
      {
        title: "Rumi (Makers of Islamic Civilization)",
        titleFa: "مولانا، از مجموعه سازندگان تمدن اسلامی",
        author: "Annemarie Schimmel; English version by Paul Bergne",
        authorFa: "آنماری شیمل؛ ترجمه انگلیسی پل برگنه",
        note: "A concise scholarly introduction placing Rumi in Islamic civilization. Part of a series profiling major figures across Islamic history, this short-format entry situates Rumi in a wider civilizational context rather than offering a full biography.",
        noteFa:
          "معرفی کوتاه و دانشگاهی مولانا در بستر تمدن اسلامی. بخشی از مجموعه‌ای که چهره‌های بزرگ تاریخ اسلام را معرفی می‌کند؛ کتابی کوتاه که مولانا را در زمینه‌ای تمدنی گسترده‌تر می‌نشاند، نه در قالب زندگینامه‌ای کامل.",
      },
      {
        title: "The Life and Work of Jalal-ud-din Rumi",
        titleFa: "زندگی و آثار جلال‌الدین رومی",
        author: "Afzal Iqbal",
        authorFa: "افضل اقبال",
        note: "A long-standing biography and survey of Rumi's thought and writings. First published in the 1950s and revised over subsequent editions, it was for a long time one of the few full-length English biographies available before Lewis's and Gooch's later books.",
        noteFa:
          "زندگینامه و بررسی دیرپای اندیشه و نوشته‌های مولانا. این کتاب که نخستین‌بار در دهه ۱۹۵۰ منتشر و در چاپ‌های بعدی بازبینی شد، تا مدت‌ها یکی از معدود زندگینامه‌های کامل انگلیسی پیش از کتاب‌های بعدی لوئیس و گوچ بود.",
      },
      {
        title: "Rumi: A Spiritual Biography",
        titleFa: "مولانا: یک زندگینامه معنوی",
        author: "Leslie Wines",
        authorFa: "لزلی واینز",
        note: "A concise biography for general readers emphasizing Rumi's spiritual development. A shorter, more introductory alternative to the longer academic biographies elsewhere on this list.",
        noteFa:
          "زندگینامه‌ای فشرده برای عموم با تأکید بر رشد معنوی مولانا. جایگزینی کوتاه‌تر و مقدماتی‌تر برای زندگینامه‌های دانشگاهی و مفصل‌تر این فهرست.",
      },
      {
        title: "Rumi the Persian, the Sufi",
        titleFa: "مولانای ایرانی، صوفی",
        author: "Abdol Reza Arasteh",
        authorFa: "عبدالرضا آراسته",
        note: "A psychological and humanistic interpretation of Rumi's creativity and transformation. Arasteh, a psychologist rather than a literary scholar, reads Rumi's account of spiritual transformation as an early case study in what later psychology would call self-actualization.",
        noteFa:
          "تفسیری روان‌شناختی و انسان‌گرایانه از خلاقیت و دگرگونی مولانا. آراسته که روان‌شناس است، نه پژوهشگر ادبی، روایت مولانا از دگرگونی معنوی را همچون مطالعه موردی زودهنگامی از آنچه روان‌شناسی بعدی «خودشکوفایی» خواهد نامید می‌خواند.",
      },
      {
        title: "Rumi: The Hidden Treasure",
        titleFa: "مولانا: گنج پنهان",
        author: "Shems Friedlander",
        authorFa: "شمس فریدلندر",
        note: "An illustrated introduction to Rumi, Mevlevi culture, music, and spiritual symbolism. A visually driven overview aimed at readers new to the Mevlevi tradition rather than specialists.",
        noteFa:
          "معرفی مصور مولانا، فرهنگ مولویه، موسیقی و نمادهای معنوی. مروری تصویرمحور برای خوانندگانی که تازه با سنت مولویه آشنا می‌شوند، نه لزوماً متخصصان.",
      },
      {
        title: "The Whirling Dervishes",
        titleFa: "درویشان چرخان",
        author: "Shems Friedlander",
        authorFa: "شمس فریدلندر",
        note: "A classic illustrated account of the Mevlevi order and its founder. Focused specifically on the Mevlevi order that grew out of Rumi's teaching after his death, rather than on his poetry directly.",
        noteFa:
          "شرح کلاسیک و مصور طریقت مولویه و بنیان‌گذار معنوی آن. تمرکز مشخص این کتاب بر طریقت مولویه است که پس از درگذشت مولانا از تعالیم او سربرآورد، نه مستقیماً بر شعر او.",
      },
      {
        title: "Mevlana Celaleddin Rumi and the Whirling Dervishes",
        titleFa: "مولانا جلال‌الدین رومی و درویشان چرخان",
        author: "Talat Sait Halman and Metin And",
        authorFa: "طلعت سعید هالمان و متین آند",
        note: "A cultural and visual study of Rumi and the Mevlevi ceremony. Turkish scholarship on the sema ceremony as it developed institutionally in Konya after Rumi's death.",
        noteFa:
          "پژوهشی فرهنگی و تصویری درباره مولانا و آیین سماع مولوی. پژوهشی ترکی درباره آیین سماع، آن‌گونه که پس از درگذشت مولانا در قونیه شکلی نهادین یافت.",
      },
      {
        title: "Fundamentals of Rumi's Thought",
        titleFa: "مبانی اندیشه مولانا",
        author: "Sefik Can",
        authorFa: "شفیق جان",
        note: "A Mevlevi Sufi presentation of Rumi's major teachings. Written from inside the Mevlevi tradition rather than from an outside academic vantage point, giving a practitioner's rather than scholar's framing of the same material covered by Chittick and Schimmel.",
        noteFa:
          "بیانی از مهم‌ترین آموزه‌های مولانا از دیدگاه سنت مولویه. این کتاب از درون سنت مولویه نوشته شده، نه از جایگاهی دانشگاهی بیرونی، و همان مطالبی را که چیتیک و شیمل پوشش داده‌اند از چشم‌انداز یک اهل طریقت، نه پژوهشگر، بازمی‌گوید.",
      },
      {
        title: "The Metaphysics of Rumi",
        titleFa: "مابعدالطبیعه مولانا",
        author: "Khalifa Abdul Hakim",
        authorFa: "خلیفه عبدالحکیم",
        note: "A critical philosophical study of Rumi's metaphysical ideas. An early attempt, from within the tradition of Islamic philosophy, to treat Rumi as a systematic metaphysical thinker rather than only a poet.",
        noteFa:
          "پژوهشی فلسفی و انتقادی درباره اندیشه‌های مابعدالطبیعی مولانا. تلاشی زودهنگام، از درون سنت فلسفه اسلامی، برای بررسی مولانا به‌عنوان اندیشمندی نظام‌مند در مابعدالطبیعه، نه صرفاً شاعر.",
      },
      {
        title: "The Sufi Doctrine of Rumi",
        titleFa: "آموزه صوفیانه مولانا",
        author: "William C. Chittick",
        authorFa: "ویلیام چیتیک",
        note: "A systematic explanation of Rumi's teachings using translated passages from his works. Chittick's earlier and shorter Rumi book, laying groundwork for the fuller treatment in The Sufi Path of Love.",
        noteFa:
          "شرح نظام‌مند تعالیم مولانا با استفاده از بخش‌های ترجمه‌شده آثار او. کتاب پیشین و کوتاه‌تر چیتیک درباره مولانا، که زمینه را برای بررسی کامل‌تر در طریق صوفیانه عشق فراهم آورد.",
      },
      {
        title: "The Sufi Path of Love",
        titleFa: "طریق صوفیانه عشق",
        author: "William C. Chittick",
        authorFa: "ویلیام چیتیک",
        note: "A large thematic study and anthology of Rumi's spiritual teachings. Chittick's fuller treatment, organizing hundreds of translated passages by theme rather than by source, to build a coherent picture of Rumi's doctrine.",
        noteFa: "پژوهش و گلچینی گسترده و موضوعی از تعالیم معنوی مولانا. بررسی کامل‌تر چیتیک، که صدها گزیده ترجمه‌شده را نه بر اساس منبع بلکه بر اساس موضوع سامان می‌دهد تا تصویری منسجم از آموزه مولانا بسازد.",
      },
      {
        title: "Reading Mystical Lyric: The Case of Jalal al-Din Rumi",
        titleFa: "خواندن غزل عرفانی: مورد جلال‌الدین رومی",
        author: "Fatemeh Keshavarz",
        authorFa: "فاطمه کشاورز",
        note: "A literary study of voice, ambiguity, performance, and meaning in Rumi's lyric poetry. Keshavarz pushes back against readings that treat Rumi's ghazals mainly as doctrine in verse, arguing for close attention to how the poems work as poems.",
        noteFa: "پژوهشی ادبی درباره صدا، ابهام، اجرا و معنا در غزل‌های مولانا. کشاورز در برابر خوانش‌هایی می‌ایستد که غزل‌های مولانا را عمدتاً آموزه‌ای در قالب شعر می‌بینند و بر توجه دقیق به چگونگی کارکرد این شعرها به‌عنوان شعر تأکید می‌کند.",
      },
      {
        title: "Beyond Dogma",
        titleFa: "فراتر از جزم‌اندیشی",
        author: "Jawid Mojaddedi",
        authorFa: "جاوید مجددی",
        note: "A study of Rumi's teachings on friendship with God and early Sufi theories. Mojaddedi, also known for his Oxford Masnavi translations, here turns to the doctrinal history behind one specific idea in Rumi's thought.",
        noteFa:
          "پژوهشی درباره دوستی با خدا در اندیشه مولانا و نظریه‌های نخستین تصوف. مجددی که به ترجمه‌های آکسفوردی مثنوی نیز شناخته می‌شود، در این‌جا به تاریخ آموزه‌ای پشت یک ایده مشخص در اندیشه مولانا می‌پردازد.",
      },
      {
        title: "Rumi's Mystical Design",
        titleFa: "طرح عرفانی مولانا",
        author: "Seyed Ghahreman Safavi and Simon Weightman",
        authorFa: "سید قهرمان صفوی و سایمون ویتمن",
        note: "A structural reading of Book One of the Masnavi. Rather than reading it as a loose sequence of digressions, the authors argue for a deliberate ring structure organizing Book One's stories.",
        noteFa: "خوانشی ساختاری از دفتر اول مثنوی. نویسندگان به‌جای خواندن مثنوی همچون توالی سست از انحراف‌ها، از ساختاری حلقوی و عامدانه در سازمان‌دهی داستان‌های دفتر اول دفاع می‌کنند.",
      },
      {
        title: "Rumi and the Hermeneutics of Eroticism",
        titleFa: "مولانا و هرمنوتیک اروتیسم",
        author: "Mahdi Tourage",
        authorFa: "مهدی توراج",
        note: "An academic analysis of erotic language, embodiment, and interpretation in Rumi. A specialized scholarly study addressing a specific, often-avoided aspect of Rumi's imagery, aimed at an academic rather than general readership.",
        noteFa: "تحلیل دانشگاهی زبان اروتیک، بدن و تفسیر در آثار مولانا. پژوهشی تخصصی و دانشگاهی که به جنبه‌ای مشخص و اغلب کنارگذاشته‌شده از تصویرپردازی مولانا می‌پردازد، برای مخاطب دانشگاهی نه عمومی.",
      },
      {
        title: "Poetry and Mysticism in Islam: The Heritage of Rumi",
        titleFa: "شعر و عرفان در اسلام: میراث مولانا",
        author: "Edited by Amin Banani, Richard Hovannisian, and Georges Sabagh",
        authorFa: "به کوشش امین بنانی، ریچارد هوانیسیان و ژرژ صباغ",
        note: "Essays on Rumi's literary, religious, and historical legacy. A multi-author academic volume bringing together specialists from different disciplines to mark the 700th anniversary of Rumi's death.",
        noteFa: "مجموعه مقالات درباره میراث ادبی، دینی و تاریخی مولانا. مجلدی دانشگاهی و چندنویسنده که متخصصانی از رشته‌های گوناگون را، به مناسبت هفتصدمین سال درگذشت مولانا، گرد هم می‌آورد.",
      },
      {
        title: "The Philosophy of Ecstasy: Rumi and the Sufi Tradition",
        titleFa: "فلسفه وجد: مولانا و سنت صوفیانه",
        author: "Edited by Leonard Lewisohn",
        authorFa: "به کوشش لئونارد لویسون",
        note: "Scholarly essays placing Rumi's poetics and mystical thought within the Sufi tradition. Another multi-author academic collection, focused on situating Rumi's ecstatic verse within the wider history of Sufi poetics.",
        noteFa:
          "مقالات پژوهشی درباره جایگاه شعر و اندیشه عرفانی مولانا در سنت تصوف. مجموعه‌ای دانشگاهی و چندنویسنده دیگر، با تمرکز مشخص بر جای‌دادن شعر شورمندانه مولانا در تاریخ گسترده‌تر شعر صوفیانه.",
      },
      {
        title: "Rumi and Islam",
        titleFa: "مولانا و اسلام",
        author: "Ibrahim W. Gamard",
        authorFa: "ابراهیم گامارد",
        note: "Selections and commentary emphasizing the Quranic and Islamic foundations of Rumi's work. Gamard makes the case, against readings that treat Rumi as loosely spiritual rather than specifically Islamic, that his poetry is saturated with direct Quranic and hadith reference.",
        noteFa:
          "گزیده و شرحی با تأکید بر بنیادهای قرآنی و اسلامی آثار مولانا. گامارد در برابر خوانش‌هایی که مولانا را عرفانی به‌طور کلی می‌بینند نه اسلامی به‌طور مشخص، استدلال می‌کند که شعر او آکنده از ارجاع مستقیم به قرآن و حدیث است.",
      },
      {
        title: "All the King's Falcons: Rumi on Prophets and Revelation",
        titleFa: "همه شاهین‌های پادشاه: مولانا درباره پیامبران و وحی",
        author: "John Renard",
        authorFa: "جان رنارد",
        note: "A study of Rumi's treatment of prophets, revelation, and sacred history. Traces how figures like Moses, Solomon, and other Quranic prophets recur throughout the Masnavi as vehicles for Rumi's teaching.",
        noteFa: "پژوهشی درباره نگاه مولانا به پیامبران، وحی و تاریخ مقدس. این کتاب نشان می‌دهد چهره‌هایی چون موسی، سلیمان و دیگر پیامبران قرآنی چگونه در سراسر مثنوی به‌عنوان وسیله‌ای برای آموزش مولانا بازمی‌گردند.",
      },
      {
        title:
          "The Mysteries of the Universe and Rumi's Discoveries on the Majestic Path of Love",
        titleFa: "رازهای جهان و کشفیات مولانا در راه باشکوه عشق",
        author: "Majid M. Naini",
        authorFa: "مجید نائینی",
        note: "A wide-ranging interpretive study linking Rumi's ideas with spiritual and cosmological questions. A more speculative, less narrowly philological approach than most of the academic works on this list, for readers interested in Rumi's cosmology specifically.",
        noteFa:
          "پژوهشی تفسیری و گسترده که اندیشه مولانا را با پرسش‌های معنوی و کیهان‌شناختی پیوند می‌دهد. رویکردی گمانه‌زنانه‌تر و کمتر زبان‌شناسانه در قیاس با بیشتر آثار دانشگاهی این فهرست، برای خوانندگانی که مشخصاً به کیهان‌شناسی مولانا علاقه‌مندند.",
      },
      {
        title: "Rumi's Thoughts",
        titleFa: "اندیشه‌های مولانا",
        author: "Edited by Seyed G. Safavi",
        authorFa: "به کوشش سید قهرمان صفوی",
        note: "A collection of studies on Rumi's philosophy, spirituality, and contemporary relevance. An edited academic volume gathering shorter essays rather than a single sustained argument.",
        noteFa: "مجموعه پژوهش‌ها درباره فلسفه، معنویت و اهمیت معاصر مولانا. مجلدی دانشگاهی و ویراسته که مقالاتی کوتاه‌تر را گرد می‌آورد، نه یک استدلال واحد و پیوسته.",
      },
      {
        title: "Wondrous Words: The Poetic Mastery of Jalal al-Din Rumi",
        titleFa: "سخنان شگفت: استادی شاعرانه جلال‌الدین رومی",
        author: "Leonard Lewisohn and Leili Anvar",
        authorFa: "لئونارد لویسون و لیلی انور",
        note: "Studies of Rumi's poetic craft, language, imagery, and reception. A collection focused, like Keshavarz's book, on Rumi as a poet in the technical sense — meter, rhetoric, imagery — rather than only as a religious teacher.",
        noteFa:
          "پژوهش‌هایی درباره صنعت شعری، زبان، تصویرپردازی و بازتاب آثار مولانا. مجموعه‌ای که، همچون کتاب کشاورز، بر مولانا به‌عنوان شاعر به معنای فنی کلمه — وزن، بلاغت، تصویرپردازی — متمرکز است، نه صرفاً به‌عنوان آموزگار دینی.",
      },
      {
        title: "The Mysterion: Rumi and the Secret of Becoming Fully Human",
        titleFa: "میستریون: مولانا و راز انسان کامل شدن",
        author: "Kabir Helminski",
        authorFa: "کبیر هلمینسکی",
        note: "A contemporary Mevlevi interpretation of Rumi's vision of human transformation. Helminski's most philosophically ambitious book, extending his practitioner's reading of Rumi into a broader argument about human potential.",
        noteFa: "تفسیری معاصر از سنت مولویه درباره نگاه مولانا به دگرگونی انسان. جاه‌طلبانه‌ترین کتاب فلسفی هلمینسکی، که خوانش او از مولانا به‌عنوان یک اهل طریقت را به استدلالی گسترده‌تر درباره ظرفیت انسانی بسط می‌دهد.",
      },
      {
        title: "Rumi's Sun: The Teachings of Shams of Tabriz",
        titleFa: "خورشید مولانا: تعالیم شمس تبریزی",
        author: "Translated and edited by Refik Algan and Camille Helminski",
        authorFa: "ترجمه و تدوین رفیق آلگان و کامیل هلمینسکی",
        note: "Selections from the Maqalat of Shams, essential for understanding Rumi's transformation. This is one of the few English translations of Shams-e Tabrizi's own recorded sayings, the counterpart text to Rumi's own writing about him.",
        noteFa:
          "گزیده‌هایی از مقالات شمس که برای فهم دگرگونی مولانا اهمیت بنیادی دارد. این یکی از معدود ترجمه‌های انگلیسی سخنان ثبت‌شده خود شمس تبریزی است، متنی همتا برای آنچه مولانا درباره او نوشته.",
      },
      {
        title: "Me and Rumi: The Autobiography of Shams-i Tabrizi",
        titleFa: "من و مولانا: زندگینامه خودگفته شمس تبریزی",
        author: "Translated by William C. Chittick",
        authorFa: "ترجمه ویلیام چیتیک",
        note: "A major English translation of Shams's conversations and recollections. Chittick's translation of the same Maqalat material as Rumi's Sun, offering a different translator's approach to this foundational but lesser-known source.",
        noteFa: "ترجمه‌ای مهم از گفتارها و یادکردهای شمس تبریزی. ترجمه چیتیک از همان متن مقالات که در خورشید مولانا نیز آمده، با رویکردی متفاوت به این منبع بنیادی اما کمترشناخته‌شده.",
      },
      {
        title: "The Feats of the Knowers of God",
        titleFa: "مناقب‌العارفین / کرامات عارفان خدا",
        author: "Shams al-Din Ahmad Aflaki; translated by John O'Kane",
        authorFa: "شمس‌الدین احمد افلاکی؛ ترجمه جان اوکین",
        note: "The principal medieval hagiographic source on Rumi and the early Mevlevi community. Written a few decades after Rumi's death, Aflaki's collection of anecdotes and miracle stories is the source most later biographers, including Lewis and Gooch, have had to weigh for historical reliability against devotional embellishment.",
        noteFa:
          "مهم‌ترین منبع مناقبی قرون وسطی درباره مولانا و جامعه نخستین مولویه. مجموعه حکایات و کرامات افلاکی که چند دهه پس از درگذشت مولانا نوشته شد، منبعی است که بیشتر زندگینامه‌نویسان بعدی، از جمله لوئیس و گوچ، ناچار بوده‌اند اعتبار تاریخی آن را در برابر آرایه‌های تعبدی‌اش بسنجند.",
      },
      {
        title: "Rumi and His Friends: Stories of the Lovers of God",
        titleFa: "مولانا و دوستانش: داستان‌های عاشقان خدا",
        author: "Camille Helminski",
        authorFa: "کامیل هلمینسکی",
        note: "Anecdotes about Rumi, Shams, family members, disciples, and companions. A more accessible retelling of material similar to Aflaki's, aimed at general readers rather than historians weighing sources.",
        noteFa: "حکایت‌هایی درباره مولانا، شمس، خانواده، شاگردان و یاران او. بازگویی‌ای در دسترس‌تر از موادی مشابه آنچه افلاکی گرد آورده، برای خواننده عمومی، نه مورخانی که در پی سنجش اعتبار منابع‌اند.",
      },
      {
        title: "Listen: A Commentary on Book One of Rumi's Mesnevi",
        titleFa: "بشنو: شرح دفتر اول مثنوی مولانا",
        author: "Kenan Rifai",
        authorFa: "کنعان رفایی",
        note: "A Mevlevi commentary on the first book of the Masnavi. Rifai, a twentieth-century Sufi teacher, delivers his commentary as it might have been given orally to students within the living tradition, rather than as academic annotation.",
        noteFa: "شرحی از سنت مولویه بر دفتر نخست مثنوی. رفایی، آموزگار صوفی سده بیستمی، شرح خود را آن‌گونه ارائه می‌دهد که گویی شفاهاً به شاگردان درون سنتی زنده گفته شده، نه به‌صورت یادداشت‌نویسی دانشگاهی.",
      },
      {
        title: "Sultan Walad: In the Footsteps of Rumi and Shams",
        titleFa: "سلطان ولد: در پی گام‌های مولانا و شمس",
        author: "Research biography in the Fons Vitae Rumi series",
        authorFa: "زندگینامه پژوهشی از مجموعه مولانا در نشر فونس ویتائه",
        note: "A study of Rumi's son, successor, and interpreter within the early Mevlevi tradition. Sultan Walad organized Rumi's followers into a formal order after his father's death and wrote his own works interpreting Rumi's teaching; this study covers a figure central to Rumi's legacy but far less translated than Rumi himself.",
        noteFa:
          "پژوهشی درباره پسر، جانشین و مفسر مولانا در سنت آغازین مولویه. سلطان ولد پس از درگذشت پدرش، پیروان مولانا را در طریقتی رسمی سامان داد و آثار خود را در تفسیر تعالیم او نوشت؛ این پژوهش به چهره‌ای می‌پردازد که در میراث مولانا محوری است اما بسیار کمتر از خود او ترجمه شده.",
      },
    ],
  },
  {
    key: "fiction",
    title: "Fiction and books for younger readers",
    titleFa: "رمان و کتاب‌های کودکان و نوجوانان",
    books: [
      {
        title: "The Forty Rules of Love",
        titleFa: "ملت عشق / چهل قانون عشق",
        author: "Elif Shafak",
        authorFa: "الیف شافاک",
        note: "A bestselling novel linking a modern woman's life with the story of Rumi and Shams. Shafak interweaves a contemporary American storyline with a fictionalized account of Rumi and Shams's meeting, and for many readers worldwide the book has become their first introduction to Rumi's biography at all.",
        noteFa:
          "رمانی پرفروش که زندگی زنی معاصر را با داستان مولانا و شمس پیوند می‌دهد. شافاک خط داستانی معاصر آمریکایی را با روایتی داستانی از دیدار مولانا و شمس درهم می‌تند، و این کتاب برای بسیاری از خوانندگان در سراسر جهان، اساساً نخستین آشنایی‌شان با زندگی مولانا بوده است.",
      },
      {
        title: "Rumi's Daughter",
        titleFa: "دختر مولانا",
        author: "Muriel Maufroy",
        authorFa: "موریل موفروی",
        note: "A historical novel imagining the world of Rumi through a young woman in his household. Told from the point of view of Kimya, a young woman who historically lived in Rumi's household and was later married to Shams, filling in a life the historical record leaves largely blank.",
        noteFa:
          "رمانی تاریخی که جهان مولانا را از نگاه دختری جوان در خانه او بازآفرینی می‌کند. این رمان از دید کیمیا روایت می‌شود، دختری که به‌واقع در خانه مولانا زندگی می‌کرد و بعدها به همسری شمس درآمد؛ زندگی‌ای که در اسناد تاریخی تقریباً ناگفته مانده است.",
      },
      {
        title: "Ink of Light",
        titleFa: "مرکب نور",
        author: "Biographical novel associated with Eva de Vitray-Meyerovitch and Rumi",
        authorFa: "رمانی زندگی‌نامه‌ای درباره مولانا و اوا دو ویتری مایروویچ",
        note: "A literary work linking Rumi's legacy with the life of one of his important modern interpreters. Connects Rumi's story to that of Eva de Vitray-Meyerovitch, the French scholar and translator whose work brought Rumi to a generation of French readers.",
        noteFa:
          "اثری ادبی که میراث مولانا را با زندگی یکی از مفسران مهم معاصر او پیوند می‌دهد. این اثر داستان مولانا را به زندگی اوا دو ویتری مایروویچ پیوند می‌زند، پژوهشگر و مترجم فرانسوی که کارش مولانا را به نسلی از خوانندگان فرانسوی‌زبان شناساند.",
      },
      {
        title: "The One and Only Rumi",
        titleFa: "مولانای یگانه",
        author: "Rabiah York Lumbard; illustrated by Manal Mirza",
        authorFa: "رابعه یورک لامبارد؛ تصویرگری منال میرزا",
        note: "A children's biography presenting Rumi as a young refugee who became a celebrated poet. Frames Rumi's family's flight from Balkh ahead of the Mongol invasions in terms a young reader today, including child refugees, can recognize directly.",
        noteFa:
          "زندگینامه کودکانه‌ای که مولانا را نوجوانی مهاجر نشان می‌دهد که بعدها شاعری بزرگ شد. این کتاب گریز خانواده مولانا از بلخ در برابر حمله مغولان را به زبانی روایت می‌کند که خواننده خردسال امروز، از جمله کودکان پناهنده، می‌تواند مستقیماً با آن همذات‌پنداری کند.",
      },
      {
        title: "Rumi: Poet of Joy and Love",
        titleFa: "مولانا: شاعر شادی و عشق",
        author: "Rashin Kheiriyeh",
        authorFa: "راشین خیریه",
        note: "A picture-book biography introducing children to Rumi's life and message. Aimed at younger children than Lumbard's book, told primarily through Kheiriyeh's illustration.",
        noteFa: "زندگینامه تصویری برای آشنایی کودکان با زندگی و پیام مولانا. این کتاب برای کودکانی خردسال‌تر از مخاطب کتاب لامبارد ساخته شده و عمدتاً از طریق تصویرگری خیریه روایت می‌شود.",
      },
      {
        title: "You Are Everything",
        titleFa: "تو همه‌چیزی",
        author: "Omid Arabian; illustrated by Shilla Shakoori",
        authorFa: "امید عربیان؛ تصویرگری شیلا شکوری",
        note: "A picture book inspired by a Rumi poem about connection, belonging, and wholeness. Rather than a biography, this adapts a single Rumi poem into picture-book form for young readers.",
        noteFa:
          "کتاب تصویری الهام‌گرفته از شعری از مولانا درباره پیوند، تعلق و تمامیت. این کتاب به‌جای زندگینامه، یک شعر واحد از مولانا را به قالب کتاب تصویری برای خوانندگان خردسال درمی‌آورد.",
      },
      {
        title: "Rumi: Whirling Dervish",
        titleFa: "مولانا: درویش چرخان",
        author: "Demi",
        authorFa: "دمی",
        note: "An illustrated biography for young readers. Demi, known for a long series of illustrated biographies of historical and religious figures, applies the same format here to Rumi's life.",
        noteFa: "زندگینامه‌ای مصور برای کودکان و نوجوانان. دمی که به مجموعه‌ای بلند از زندگینامه‌های مصور چهره‌های تاریخی و دینی شناخته می‌شود، همان قالب را در این‌جا برای زندگی مولانا به‌کار می‌گیرد.",
      },
    ],
  },
];

export const filmsSectionTitle = "Films, documentaries, and television";
export const filmsSectionTitleFa = "فیلم، مستند و مجموعه تلویزیونی";

export const films: FilmEntry[] = [
  {
    year: "1973",
    title: "Gonuller Sultani Mevlana",
    titleFa: "سلطان دل‌ها مولانا",
    director: "Atif Yilmaz",
    directorFa: "آتیف ییلماز",
    note: "Turkish historical feature portraying Rumi's life and spiritual development. One of the earliest feature-length dramatizations of Rumi's life made in Turkey, released the same year as several other tributes marking the 700th anniversary of his death.",
    noteFa: "فیلم تاریخی ترکی درباره زندگی و رشد معنوی مولانا. یکی از نخستین درام‌های بلند سینمایی درباره زندگی مولانا که در ترکیه ساخته شد، همان سالی که چند بزرگداشت دیگر به مناسبت هفتصدمین سالگرد درگذشت او منتشر شدند.",
  },
  {
    year: "1973",
    title: "Turning",
    titleFa: "چرخش",
    director: "Diane Cilento",
    directorFa: "دایان سیلنتو",
    note: "Experimental documentary made for the 700th anniversary of Rumi's death. Cilento, an actress and filmmaker, approaches Rumi's central image of turning through experimental, non-narrative documentary form rather than conventional biography.",
    noteFa:
      "مستند تجربی ساخته‌شده به مناسبت هفتصدمین سال درگذشت مولانا با تمرکز بر طبیعت و حرکت معنوی. سیلنتو، بازیگر و فیلم‌ساز، به تصویر محوری چرخش نزد مولانا از دریچه‌ای تجربی و غیرروایی، نه زندگینامه‌ای متعارف، نزدیک می‌شود.",
  },
  {
    year: "1998",
    title: "Rumi: Poet of the Heart",
    titleFa: "مولانا: شاعر دل",
    director: "Haydn Reiss",
    directorFa: "هیدن ریس",
    note: "Documentary introducing Rumi's life, Shams, poetry, and modern influence. An American public-television-style documentary aimed at introducing Rumi to a general Western audience largely unfamiliar with his biography.",
    noteFa: "مستندی درباره زندگی مولانا، شمس، شعرها و تأثیر معاصر او. مستندی به سبک تلویزیون عمومی آمریکا که برای معرفی مولانا به مخاطب غربی عمومی و عمدتاً ناآشنا با زندگی او ساخته شده است.",
  },
  {
    year: "2001",
    title: "Rumi in the Land of Khusrau",
    titleFa: "مولانا در سرزمین خسرو",
    director: "Muzaffar Ali",
    directorFa: "مظفر علی",
    note: "Indian documentary connecting Rumi and Amir Khusrau through music and performance. Traces the shared Persian-influenced poetic and musical tradition linking Rumi to Amir Khusrau, the Delhi-based poet and musician working a few decades later.",
    noteFa:
      "مستندی هندی که با موسیقی، شعر و اجرا میان مولانا و امیرخسرو پیوند برقرار می‌کند. این مستند سنت مشترک شعری و موسیقایی متأثر از فارسی را که مولانا را به امیرخسرو، شاعر و موسیقی‌دان دهلی چند دهه بعد، پیوند می‌دهد پی می‌گیرد.",
  },
  {
    year: "2002",
    title: "The World of Rumi, Part 1: The Wings of Love",
    titleFa: "جهان مولانا، بخش اول: بال‌های عشق",
    director: "Shems Friedlander",
    directorFa: "شمس فریدلندر",
    note: "A visual introduction to Rumi, the Mevlevi tradition, and the whirling ceremony. First installment of Friedlander's documentary trilogy, focused on introducing the sema ceremony visually to viewers unfamiliar with it.",
    noteFa: "معرفی تصویری مولانا، سنت مولویه و آیین سماع. نخستین بخش از سه‌گانه مستند فریدلندر، با تمرکز بر معرفی تصویری آیین سماع به بینندگانی که با آن آشنا نیستند.",
  },
  {
    year: "2002",
    title: "The World of Rumi, Part 2: Come to Life – Al-Mahya",
    titleFa: "جهان مولانا، بخش دوم: زنده شو - المحیا",
    director: "Shems Friedlander",
    directorFa: "شمس فریدلندر",
    note: "A companion documentary exploring Sufi spiritual life and remembrance. Continues the trilogy by turning from the ceremony itself to the broader spiritual life — dhikr and remembrance practices — that surrounds it.",
    noteFa: "مستندی همراه درباره زندگی معنوی صوفیانه و یاد خدا. این سه‌گانه را با گذر از خودِ آیین به زندگی معنوی گسترده‌تر — ذکر و یادکرد — که آن را دربر می‌گیرد ادامه می‌دهد.",
  },
  {
    year: "2005",
    title: "Rumi: Turning Ecstatic",
    titleFa: "مولانا: چرخش شورمندانه",
    director: "Tina Petrova",
    directorFa: "تینا پتروووا",
    note: "Docudrama following a personal search for Rumi and the contemporary meaning of his poetry. Structured around the filmmaker's own first-person search, blending documentary interviews with a more personal narrative frame than most other entries on this list.",
    noteFa:
      "مستند-داستانی درباره جست‌وجوی شخصی برای شناخت مولانا و معنای امروزین شعر او. حول جست‌وجوی اول‌شخص خود فیلم‌ساز سامان یافته و مصاحبه‌های مستند را با قابی شخصی‌تر از بیشتر آثار دیگر این فهرست درمی‌آمیزد.",
  },
  {
    year: "2005",
    title: "The World of Rumi, Part 3: The Circles of Remembrance",
    titleFa: "جهان مولانا، بخش سوم: حلقه‌های ذکر",
    director: "Shems Friedlander",
    directorFa: "شمس فریدلندر",
    note: "Documentary on dhikr traditions, Sufi communities, scholars, and musicians. The final installment of Friedlander's trilogy, widening the focus from the Mevlevi order specifically to Sufi remembrance practices more broadly.",
    noteFa: "مستندی درباره آیین‌های ذکر، جوامع صوفی، پژوهشگران و موسیقی‌دانان. آخرین بخش از سه‌گانه فریدلندر، که کانون توجه را از طریقت مولویه به‌طور خاص به آیین‌های ذکر صوفیانه به‌طور گسترده‌تر می‌گشاید.",
  },
  {
    year: "2007",
    title: "Rumi Returning: The Triumph of Divine Passion",
    titleFa: "بازگشت مولانا: پیروزی شور الهی",
    director: "Kell Kearns and Cynthia Lukas",
    directorFa: "کل کرنز و سینتیا لوکاس",
    note: "PBS-style biography filmed in Konya, focused on Rumi's life and poetry. A documentary made specifically for American public television, filmed on location in Konya with scholarly interviews woven through a biographical narrative.",
    noteFa:
      "زندگینامه‌ای مستند، فیلم‌برداری‌شده در قونیه، با تمرکز بر زندگی و شعر مولانا. مستندی که مشخصاً برای تلویزیون عمومی آمریکا ساخته شد، با فیلم‌برداری در محل در قونیه و مصاحبه‌های دانشگاهی در بطن روایتی زندگینامه‌ای.",
  },
  {
    year: "2008",
    title: "Rumi: The Dance of Love",
    titleFa: "مولانا جلال‌الدین رومی: رقص عشق",
    director: "Kursat Kizbaz",
    directorFa: "کورشات کیزباز",
    note: "Dramatized documentary tracing Rumi from childhood to Shams and spiritual maturity. A Turkish dramatized documentary covering similar biographical ground to the 1973 Yilmaz feature, updated for a contemporary audience.",
    noteFa: "مستند داستانی از کودکی مولانا تا دیدار شمس و بلوغ معنوی او. مستندی داستانی و ترکی که زمینه زندگینامه‌ای مشابهی با فیلم ییلماز در سال ۱۹۷۳ را می‌پوشاند، اما برای مخاطب امروزی به‌روزشده.",
  },
  {
    year: "2020",
    title: "Longing for the Soul: A Quest for Rumi",
    titleFa: "اشتیاق جان: جست‌وجویی برای مولانا",
    director: "Various international contributors",
    directorFa: "با مشارکت عوامل بین‌المللی",
    note: "A journey through Persia, Turkey, Afghanistan, and the US exploring Rumi's continuing message. A more recent, internationally produced documentary tracing Rumi's geography and legacy across the modern nations that overlap with the medieval world he moved through.",
    noteFa:
      "سفری در ایران فرهنگی، ترکیه، افغانستان و آمریکا برای بررسی پیام ماندگار مولانا. مستندی جدیدتر و با تولیدی بین‌المللی که جغرافیا و میراث مولانا را در سراسر کشورهای امروزی که با جهان قرون‌وسطایی‌ای که او در آن سفر کرد هم‌پوشانی دارند، پی می‌گیرد.",
  },
  {
    year: "2022",
    title: "Sculpture",
    titleFa: "مجسمه",
    director: "Ramin Hosseinpour",
    directorFa: "رامین حسین‌پور",
    note: "Award-winning experimental short combining documentary, animation, music, and story. A short-form, formally experimental piece rather than a conventional feature-length documentary, mixing animation with live material.",
    noteFa:
      "فیلم کوتاه تجربی برنده جایزه که مستند، پویانمایی، موسیقی و داستان مولانا و شمس را ترکیب می‌کند. اثری کوتاه و از نظر فرم تجربی، نه یک مستند بلند متعارف، که پویانمایی را با مواد زنده درمی‌آمیزد.",
  },
  {
    year: "2023–2025",
    title: "Mevlana Rumi / Rumi (TV series)",
    titleFa: "مولانا رومی / سریال مولانا",
    director: "TRT / tabii; directed by Can Ulkay and others",
    directorFa: "تولید تی‌آرتی و پلتفرم تابی؛ با کارگردانی جان اولکای و دیگران",
    note: "Multi-season Turkish historical drama set in thirteenth-century Anatolia. The most recent and by far the longest screen treatment of Rumi's life on this list, a multi-season prestige television production rather than a single film.",
    noteFa: "مجموعه تاریخی چندفصلی ترکیه در فضای آناتولی قرن سیزدهم. تازه‌ترین و به‌مراتب طولانی‌ترین پرداخت تصویری زندگی مولانا در این فهرست، تولیدی تلویزیونی معتبر و چندفصلی، نه یک فیلم واحد.",
  },
  {
    year: "2024",
    title: "Intoxicated by Love / Mast-e Eshgh",
    titleFa: "مست عشق",
    director: "Hassan Fathi",
    directorFa: "حسن فتحی",
    note: "Iranian-Turkish feature drama centered on Rumi, Shams, and Shams's disappearance. A recent co-production between Iran and Turkey, focusing specifically on the unresolved mystery of what happened to Shams after he vanished from Konya.",
    noteFa: "فیلم مشترک ایران و ترکیه درباره مولانا، شمس و راز ناپدیدشدن شمس. تولیدی مشترک و اخیر میان ایران و ترکیه، با تمرکز مشخص بر رازِ حل‌نشده سرنوشت شمس پس از ناپدید شدنش از قونیه.",
  },
];
