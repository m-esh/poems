export type Theme =
  | "love"
  | "longing"
  | "the-divine"
  | "nature"
  | "wine-and-ecstasy"
  | "impermanence"
  | "unity"
  | "wisdom";

export interface Poet {
  slug: string;
  name: string;
  nameOriginal: string;
  years: string;
  era: string;
  bio: string;
  /** Farsi translation of `bio`, same "\n\n" paragraph convention. */
  bioFa: string;
}

export interface Poem {
  slug: string;
  title: string;
  titleOriginal?: string;
  poetSlug: string;
  collection: string;
  century: string;
  themes: Theme[];
  /** Lines of the English text. A blank string marks a stanza break. */
  translation: string[];
  translator: string;
  /** Farsi translation of `translator`. */
  translatorFa: string;
  /** Original-language lines, when we have high confidence in the text. */
  originalText?: string[];
  note: string;
  /** Farsi translation of `note`. */
  noteFa: string;
}
