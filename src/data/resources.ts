export interface BookEntry {
  title: string;
  author: string;
  note: string;
}

export interface FilmEntry {
  year: string;
  title: string;
  director: string;
  note: string;
}

export interface ResourceSection {
  key: string;
  title: string;
  books: BookEntry[];
}

export const bookSections: ResourceSection[] = [
  {
    key: "core",
    title: "Core works and critical editions",
    books: [
      {
        title: "Masnavi-ye Ma'navi (The Spiritual Couplets)",
        author: "Jalal al-Din Rumi",
        note: "Rumi's six-book narrative and teaching masterpiece; the central text of the Mevlevi tradition.",
      },
      {
        title: "Divan-e Shams-e Tabrizi / Kulliyat-e Shams",
        author: "Jalal al-Din Rumi",
        note: "Rumi's vast collection of ghazals, lyric poems, and ecstatic verse associated with Shams of Tabriz.",
      },
      {
        title: "Fihi Ma Fihi (Discourses)",
        author: "Jalal al-Din Rumi",
        note: "Prose conversations and teachings recorded by Rumi's circle.",
      },
      {
        title: "Majalis-e Sab'a (The Seven Sermons)",
        author: "Jalal al-Din Rumi",
        note: "Seven sermons from Rumi's earlier public teaching career.",
      },
      {
        title: "Makatib (The Letters)",
        author: "Jalal al-Din Rumi",
        note: "Letters showing Rumi as teacher, community leader, intercessor, and family figure.",
      },
      {
        title: "Rubaiyat (Quatrains)",
        author: "Attributed to Jalal al-Din Rumi",
        note: "The quatrains traditionally transmitted under Rumi's name; attribution varies among manuscripts.",
      },
      {
        title: "Kulliyat-e Shams-e Tabrizi, critical edition",
        author: "Edited by Badiozzaman Foruzanfar",
        note: "The standard monumental Persian critical edition of Rumi's lyric corpus.",
      },
      {
        title: "Masnavi-ye Ma'navi, Persian critical text",
        author: "Edited by R. A. Nicholson",
        note: "A foundational modern critical text used by generations of scholars and translators.",
      },
      {
        title: "Masnavi-ye Ma'navi, annotated Persian edition",
        author: "Edited and explained by Mohammad Estelami",
        note: "A widely used Persian edition with extensive explanations and notes.",
      },
      {
        title: "Masnavi-ye Ma'navi, critical Persian edition",
        author: "Edited by Mohammad Ali Movahed",
        note: "A major recent Persian critical edition based on extensive manuscript comparison.",
      },
      {
        title: "Fihi Ma Fihi, critical Persian edition",
        author: "Edited by Badiozzaman Foruzanfar",
        note: "An authoritative modern Persian edition of Rumi's prose discourses.",
      },
      {
        title: "Ahadith-e Masnavi and Sources of the Tales and Parables",
        author: "Badiozzaman Foruzanfar",
        note: "Reference works tracing hadith, narrative, and literary sources used in the Masnavi.",
      },
    ],
  },
  {
    key: "early",
    title: "Early and scholarly translations",
    books: [
      {
        title: "The Mesnevi of Mevlana Jelalu'd-din er-Rumi, Book the First",
        author: "James W. Redhouse",
        note: "An important nineteenth-century English translation of Book One.",
      },
      {
        title: "Masnavi-i Ma'navi: The Spiritual Couplets",
        author: "E. H. Whinfield",
        note: "An influential abridged Victorian translation of the Masnavi.",
      },
      {
        title: "The Masnavi by Jalalu'd-din Rumi, Book II",
        author: "C. E. Wilson",
        note: "A detailed prose translation of the second book with commentary.",
      },
      {
        title: "The Mathnawi of Jalalu'ddin Rumi (8 volumes)",
        author: "Reynold A. Nicholson",
        note: "Complete English translation, Persian text, commentary, and indexes; a landmark scholarly edition.",
      },
      {
        title: "Tales from the Masnavi",
        author: "A. J. Arberry",
        note: "Readable English retellings and translations of selected Masnavi stories.",
      },
      {
        title: "Discourses of Rumi",
        author: "A. J. Arberry",
        note: "Classic English translation of Fihi Ma Fihi.",
      },
      {
        title: "Mystical Poems of Rumi: First Selection",
        author: "A. J. Arberry",
        note: "A major scholarly selection from Rumi's lyric poetry.",
      },
      {
        title: "Mystical Poems of Rumi: Second Selection",
        author: "A. J. Arberry",
        note: "A companion volume expanding Arberry's translations from the Divan.",
      },
      {
        title: "The Rubai'yat of Jalal al-Din Rumi",
        author: "A. J. Arberry",
        note: "Selected quatrains translated into English verse.",
      },
      {
        title: "Spiritual Verses: The First Book of the Masnavi-ye Ma'navi",
        author: "Alan Williams",
        note: "A modern annotated translation of Book One based on a Persian critical edition.",
      },
      {
        title: "The Masnavi, Book One",
        author: "Jawid Mojaddedi",
        note: "Unabridged rhyming English translation in Oxford World's Classics.",
      },
      {
        title: "The Masnavi, Book Two",
        author: "Jawid Mojaddedi",
        note: "Second volume of the complete Oxford translation project.",
      },
      {
        title: "The Masnavi, Book Three",
        author: "Jawid Mojaddedi",
        note: "Third volume of the complete Oxford translation project.",
      },
      {
        title: "The Masnavi, Book Four",
        author: "Jawid Mojaddedi",
        note: "Fourth volume, emphasizing mature mystical teaching and spiritual guidance.",
      },
      {
        title: "The Masnavi, Book Five",
        author: "Jawid Mojaddedi",
        note: "Fifth unabridged volume of the Oxford series.",
      },
      {
        title: "The Masnavi, Book Six",
        author: "Jawid Mojaddedi",
        note: "Published in 2025, completing the first full unabridged English verse translation of all six books.",
      },
      {
        title: "Signs of the Unseen: The Discourses of Jalaluddin Rumi",
        author: "Wheeler M. Thackston Jr.",
        note: "A modern English rendering of Rumi's prose teachings.",
      },
      {
        title: "The Quatrains of Rumi",
        author: "Ibrahim W. Gamard and A. G. Rawan Farhadi",
        note: "A comprehensive translation with Persian text, commentary, glossary, and concordance.",
      },
      {
        title: "The Stanzaic Poems of Rumi",
        author: "Muhammad Isa Waley",
        note: "Critical edition, translation, and commentary on Rumi's tarjiyat.",
      },
    ],
  },
  {
    key: "modern",
    title: "Modern translations and popular selections",
    books: [
      {
        title: "Ruins of the Heart",
        author: "Kabir Helminski",
        note: "Selected lyric poetry emphasizing longing, transformation, and the heart.",
      },
      {
        title: "Love Is a Stranger",
        author: "Kabir Helminski",
        note: "Selected lyric poetry presenting love as the force of spiritual awakening.",
      },
      {
        title: "Rumi: Daylight",
        author: "Camille and Kabir Helminski",
        note: "Accessible selections from poetry and prose arranged for contemporary readers.",
      },
      {
        title: "Jewels of Remembrance",
        author: "Camille and Kabir Helminski",
        note: "A daily collection of 365 short selections from Rumi.",
      },
      {
        title: "The Pocket Rumi",
        author: "Edited and translated by Kabir Helminski",
        note: "A compact introductory anthology of Rumi's poetry and teachings.",
      },
      {
        title: "Love's Ripening: Rumi on the Heart's Journey",
        author: "Kabir Helminski and Ahmad Rezwani",
        note: "Translations centered on love, the heart, and spiritual maturation.",
      },
      {
        title: "The Rumi Daybook",
        author: "Edited by Camille and Kabir Helminski",
        note: "365 poems and teachings designed for daily reading.",
      },
      {
        title: "The Rumi Collection",
        author: "Edited by Kabir Helminski",
        note: "An anthology bringing together respected literary translations of Rumi.",
      },
      {
        title: "The Essential Rumi",
        author: "Coleman Barks",
        note: "The most influential popular English adaptation, based on earlier literal translations.",
      },
      {
        title: "The Illuminated Rumi",
        author: "Coleman Barks; illustrations by Michael Green",
        note: "Poetic adaptations paired with visual art and calligraphic design.",
      },
      {
        title: "The Soul of Rumi",
        author: "Coleman Barks",
        note: "A large collection of ecstatic poems and teaching passages.",
      },
      {
        title: "Rumi: The Book of Love",
        author: "Coleman Barks",
        note: "A thematic collection focused on love, longing, and intimacy.",
      },
      {
        title: "Rumi: Bridge to the Soul",
        author: "Coleman Barks",
        note: "Poems on music, silence, friendship, and inward journey.",
      },
      {
        title: "Rumi: The Big Red Book",
        author: "Coleman Barks",
        note: "A broad anthology of adaptations from Rumi's lyric poetry.",
      },
      {
        title: "A Year with Rumi",
        author: "Coleman Barks",
        note: "A 365-day devotional and reflective reading collection.",
      },
      {
        title: "Rumi: Soul Fury",
        author: "Coleman Barks",
        note: "A collection emphasizing Rumi and Shams on friendship and transforming love.",
      },
      {
        title: "Open Secret: Versions of Rumi",
        author: "Coleman Barks and John Moyne",
        note: "Early free-verse versions that helped establish Rumi's modern American readership.",
      },
      {
        title: "Like This: More Poems of Rumi",
        author: "Coleman Barks",
        note: "Popular poetic versions of ghazals and teaching poems.",
      },
      {
        title: "Unseen Rain: Quatrains of Rumi",
        author: "Coleman Barks and John Moyne",
        note: "Free-verse adaptations of Rumi's quatrains.",
      },
      {
        title: "Delicious Laughter",
        author: "Coleman Barks",
        note: "Short, playful, and ecstatic Rumi adaptations.",
      },
      {
        title: "The Glance",
        author: "Coleman Barks",
        note: "Poems and stories about inner vision, love, and spiritual recognition.",
      },
      {
        title: "Birdsong",
        author: "Coleman Barks",
        note: "A compact collection of short poems associated with longing and freedom.",
      },
      {
        title: "Feeling the Shoulder of the Lion",
        author: "Coleman Barks",
        note: "Poetry and teaching stories emphasizing courage and companionship.",
      },
      {
        title: "This Longing: Poetry, Teaching Stories, and Letters of Rumi",
        author: "Coleman Barks and John Moyne",
        note: "A mixed collection of poems, stories, and letters.",
      },
      {
        title: "We Are Three",
        author: "Coleman Barks",
        note: "A concise collection of Rumi versions for general readers.",
      },
      {
        title: "Rending the Veil",
        author: "Shahram Shiva",
        note: "Parallel literal and poetic renderings designed to show the movement from Persian to English.",
      },
      {
        title: "Hush, Don't Say Anything to God",
        author: "Shahram Shiva",
        note: "Passionate poetic versions of selected Rumi poems.",
      },
      {
        title: "Divan-i Shams-i Tabriz (multi-volume translation)",
        author: "Nevit O. Ergin",
        note: "A large-scale English translation project devoted to Rumi's Divan.",
      },
      {
        title: "The Forbidden Rumi",
        author: "Nevit O. Ergin and Will Johnson",
        note: "A selection highlighting earthy, provocative, and less commonly translated poems.",
      },
      {
        title: "The Rubais of Rumi: Insane with Love",
        author: "Nevit O. Ergin",
        note: "English versions of selected quatrains centered on ecstatic love.",
      },
      {
        title: "Rumi: Fountain of Fire",
        author: "Nader Khalili",
        note: "Poetic English renderings by an Iranian-born architect and writer.",
      },
      {
        title: "Rumi: Dancing the Flame",
        author: "Nader Khalili",
        note: "A companion collection emphasizing movement, fire, and spiritual transformation.",
      },
      {
        title: "Rumi: 53 Secrets from the Tavern of Love",
        author: "Amin Banani, translated with collaborators",
        note: "Poems from the Rubaiyat presented around the metaphor of the tavern of love.",
      },
      {
        title: "Rumi: Swallowing the Sun",
        author: "Franklin D. Lewis",
        note: "A carefully translated and contextualized selection of poems.",
      },
      {
        title: "Rumi's Little Book of Life",
        author: "Maryam Mafi and Azima Melita Kolin",
        note: "Short poems and reflections arranged around daily life and inner change.",
      },
      {
        title: "Rumi's Little Book of Love",
        author: "Maryam Mafi",
        note: "A compact thematic selection on love and relationship.",
      },
      {
        title: "Rumi's Little Book of Wisdom",
        author: "Maryam Mafi",
        note: "Brief teachings and poems organized as practical wisdom.",
      },
      {
        title: "The Book of Rumi: 105 Stories and Fables",
        author: "Maryam Mafi",
        note: "Plain-language English retellings of selected Masnavi stories.",
      },
      {
        title: "The Teachings of Rumi",
        author: "Andrew Harvey",
        note: "A thematic spiritual anthology for contemporary seekers.",
      },
    ],
  },
  {
    key: "biography",
    title: "Biography, history, and scholarship",
    books: [
      {
        title: "Rumi: Past and Present, East and West",
        author: "Franklin D. Lewis",
        note: "The most comprehensive modern English study of Rumi's life, works, reception, and legacy.",
      },
      {
        title: "Rumi's Secret: The Life of the Sufi Poet of Love",
        author: "Brad Gooch",
        note: "A popular narrative biography based on travel, history, and textual research.",
      },
      {
        title: "Rumi's World: The Life and Work of the Great Sufi Poet",
        author: "Annemarie Schimmel",
        note: "An accessible portrait of Rumi's life, cultural world, symbolism, and poetry.",
      },
      {
        title: "I Am Wind, You Are Fire",
        author: "Annemarie Schimmel",
        note: "A classic introduction to Rumi's imagery, religious setting, and mystical language.",
      },
      {
        title: "The Triumphal Sun",
        author: "Annemarie Schimmel",
        note: "A detailed study of the themes, symbols, and structure of Rumi's writings.",
      },
      {
        title: "Rumi (Makers of Islamic Civilization)",
        author: "Annemarie Schimmel; English version by Paul Bergne",
        note: "A concise scholarly introduction placing Rumi in Islamic civilization.",
      },
      {
        title: "The Life and Work of Jalal-ud-din Rumi",
        author: "Afzal Iqbal",
        note: "A long-standing biography and survey of Rumi's thought and writings.",
      },
      {
        title: "Rumi: A Spiritual Biography",
        author: "Leslie Wines",
        note: "A concise biography for general readers emphasizing Rumi's spiritual development.",
      },
      {
        title: "Rumi the Persian, the Sufi",
        author: "Abdol Reza Arasteh",
        note: "A psychological and humanistic interpretation of Rumi's creativity and transformation.",
      },
      {
        title: "Rumi: The Hidden Treasure",
        author: "Shems Friedlander",
        note: "An illustrated introduction to Rumi, Mevlevi culture, music, and spiritual symbolism.",
      },
      {
        title: "The Whirling Dervishes",
        author: "Shems Friedlander",
        note: "A classic illustrated account of the Mevlevi order and its founder.",
      },
      {
        title: "Mevlana Celaleddin Rumi and the Whirling Dervishes",
        author: "Talat Sait Halman and Metin And",
        note: "A cultural and visual study of Rumi and the Mevlevi ceremony.",
      },
      {
        title: "Fundamentals of Rumi's Thought",
        author: "Sefik Can",
        note: "A Mevlevi Sufi presentation of Rumi's major teachings.",
      },
      {
        title: "The Metaphysics of Rumi",
        author: "Khalifa Abdul Hakim",
        note: "A critical philosophical study of Rumi's metaphysical ideas.",
      },
      {
        title: "The Sufi Doctrine of Rumi",
        author: "William C. Chittick",
        note: "A systematic explanation of Rumi's teachings using translated passages from his works.",
      },
      {
        title: "The Sufi Path of Love",
        author: "William C. Chittick",
        note: "A large thematic study and anthology of Rumi's spiritual teachings.",
      },
      {
        title: "Reading Mystical Lyric: The Case of Jalal al-Din Rumi",
        author: "Fatemeh Keshavarz",
        note: "A literary study of voice, ambiguity, performance, and meaning in Rumi's lyric poetry.",
      },
      {
        title: "Beyond Dogma",
        author: "Jawid Mojaddedi",
        note: "A study of Rumi's teachings on friendship with God and early Sufi theories.",
      },
      {
        title: "Rumi's Mystical Design",
        author: "Seyed Ghahreman Safavi and Simon Weightman",
        note: "A structural reading of Book One of the Masnavi.",
      },
      {
        title: "Rumi and the Hermeneutics of Eroticism",
        author: "Mahdi Tourage",
        note: "An academic analysis of erotic language, embodiment, and interpretation in Rumi.",
      },
      {
        title: "Poetry and Mysticism in Islam: The Heritage of Rumi",
        author: "Edited by Amin Banani, Richard Hovannisian, and Georges Sabagh",
        note: "Essays on Rumi's literary, religious, and historical legacy.",
      },
      {
        title: "The Philosophy of Ecstasy: Rumi and the Sufi Tradition",
        author: "Edited by Leonard Lewisohn",
        note: "Scholarly essays placing Rumi's poetics and mystical thought within the Sufi tradition.",
      },
      {
        title: "Rumi and Islam",
        author: "Ibrahim W. Gamard",
        note: "Selections and commentary emphasizing the Quranic and Islamic foundations of Rumi's work.",
      },
      {
        title: "All the King's Falcons: Rumi on Prophets and Revelation",
        author: "John Renard",
        note: "A study of Rumi's treatment of prophets, revelation, and sacred history.",
      },
      {
        title:
          "The Mysteries of the Universe and Rumi's Discoveries on the Majestic Path of Love",
        author: "Majid M. Naini",
        note: "A wide-ranging interpretive study linking Rumi's ideas with spiritual and cosmological questions.",
      },
      {
        title: "Rumi's Thoughts",
        author: "Edited by Seyed G. Safavi",
        note: "A collection of studies on Rumi's philosophy, spirituality, and contemporary relevance.",
      },
      {
        title: "Wondrous Words: The Poetic Mastery of Jalal al-Din Rumi",
        author: "Leonard Lewisohn and Leili Anvar",
        note: "Studies of Rumi's poetic craft, language, imagery, and reception.",
      },
      {
        title: "The Mysterion: Rumi and the Secret of Becoming Fully Human",
        author: "Kabir Helminski",
        note: "A contemporary Mevlevi interpretation of Rumi's vision of human transformation.",
      },
      {
        title: "Rumi's Sun: The Teachings of Shams of Tabriz",
        author: "Translated and edited by Refik Algan and Camille Helminski",
        note: "Selections from the Maqalat of Shams, essential for understanding Rumi's transformation.",
      },
      {
        title: "Me and Rumi: The Autobiography of Shams-i Tabrizi",
        author: "Translated by William C. Chittick",
        note: "A major English translation of Shams's conversations and recollections.",
      },
      {
        title: "The Feats of the Knowers of God",
        author: "Shams al-Din Ahmad Aflaki; translated by John O'Kane",
        note: "The principal medieval hagiographic source on Rumi and the early Mevlevi community.",
      },
      {
        title: "Rumi and His Friends: Stories of the Lovers of God",
        author: "Camille Helminski",
        note: "Anecdotes about Rumi, Shams, family members, disciples, and companions.",
      },
      {
        title: "Listen: A Commentary on Book One of Rumi's Mesnevi",
        author: "Kenan Rifai",
        note: "A Mevlevi commentary on the first book of the Masnavi.",
      },
      {
        title: "Sultan Walad: In the Footsteps of Rumi and Shams",
        author: "Research biography in the Fons Vitae Rumi series",
        note: "A study of Rumi's son, successor, and interpreter within the early Mevlevi tradition.",
      },
    ],
  },
  {
    key: "fiction",
    title: "Fiction and books for younger readers",
    books: [
      {
        title: "The Forty Rules of Love",
        author: "Elif Shafak",
        note: "A bestselling novel linking a modern woman's life with the story of Rumi and Shams.",
      },
      {
        title: "Rumi's Daughter",
        author: "Muriel Maufroy",
        note: "A historical novel imagining the world of Rumi through a young woman in his household.",
      },
      {
        title: "Ink of Light",
        author: "Biographical novel associated with Eva de Vitray-Meyerovitch and Rumi",
        note: "A literary work linking Rumi's legacy with the life of one of his important modern interpreters.",
      },
      {
        title: "The One and Only Rumi",
        author: "Rabiah York Lumbard; illustrated by Manal Mirza",
        note: "A children's biography presenting Rumi as a young refugee who became a celebrated poet.",
      },
      {
        title: "Rumi: Poet of Joy and Love",
        author: "Rashin Kheiriyeh",
        note: "A picture-book biography introducing children to Rumi's life and message.",
      },
      {
        title: "You Are Everything",
        author: "Omid Arabian; illustrated by Shilla Shakoori",
        note: "A picture book inspired by a Rumi poem about connection, belonging, and wholeness.",
      },
      {
        title: "Rumi: Whirling Dervish",
        author: "Demi",
        note: "An illustrated biography for young readers.",
      },
    ],
  },
];

export const films: FilmEntry[] = [
  {
    year: "1973",
    title: "Gonuller Sultani Mevlana",
    director: "Atif Yilmaz",
    note: "Turkish historical feature portraying Rumi's life and spiritual development.",
  },
  {
    year: "1973",
    title: "Turning",
    director: "Diane Cilento",
    note: "Experimental documentary made for the 700th anniversary of Rumi's death.",
  },
  {
    year: "1998",
    title: "Rumi: Poet of the Heart",
    director: "Haydn Reiss",
    note: "Documentary introducing Rumi's life, Shams, poetry, and modern influence.",
  },
  {
    year: "2001",
    title: "Rumi in the Land of Khusrau",
    director: "Muzaffar Ali",
    note: "Indian documentary connecting Rumi and Amir Khusrau through music and performance.",
  },
  {
    year: "2002",
    title: "The World of Rumi, Part 1: The Wings of Love",
    director: "Shems Friedlander",
    note: "A visual introduction to Rumi, the Mevlevi tradition, and the whirling ceremony.",
  },
  {
    year: "2002",
    title: "The World of Rumi, Part 2: Come to Life – Al-Mahya",
    director: "Shems Friedlander",
    note: "A companion documentary exploring Sufi spiritual life and remembrance.",
  },
  {
    year: "2005",
    title: "Rumi: Turning Ecstatic",
    director: "Tina Petrova",
    note: "Docudrama following a personal search for Rumi and the contemporary meaning of his poetry.",
  },
  {
    year: "2005",
    title: "The World of Rumi, Part 3: The Circles of Remembrance",
    director: "Shems Friedlander",
    note: "Documentary on dhikr traditions, Sufi communities, scholars, and musicians.",
  },
  {
    year: "2007",
    title: "Rumi Returning: The Triumph of Divine Passion",
    director: "Kell Kearns and Cynthia Lukas",
    note: "PBS-style biography filmed in Konya, focused on Rumi's life and poetry.",
  },
  {
    year: "2008",
    title: "Rumi: The Dance of Love",
    director: "Kursat Kizbaz",
    note: "Dramatized documentary tracing Rumi from childhood to Shams and spiritual maturity.",
  },
  {
    year: "2020",
    title: "Longing for the Soul: A Quest for Rumi",
    director: "Various international contributors",
    note: "A journey through Persia, Turkey, Afghanistan, and the US exploring Rumi's continuing message.",
  },
  {
    year: "2022",
    title: "Sculpture",
    director: "Ramin Hosseinpour",
    note: "Award-winning experimental short combining documentary, animation, music, and story.",
  },
  {
    year: "2023–2025",
    title: "Mevlana Rumi / Rumi (TV series)",
    director: "TRT / tabii; directed by Can Ulkay and others",
    note: "Multi-season Turkish historical drama set in thirteenth-century Anatolia.",
  },
  {
    year: "2024",
    title: "Intoxicated by Love / Mast-e Eshgh",
    director: "Hassan Fathi",
    note: "Iranian-Turkish feature drama centered on Rumi, Shams, and Shams's disappearance.",
  },
];
