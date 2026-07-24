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
  /** Original-language lines, when we have high confidence in the text. */
  originalText?: string[];
  note: string;
}
