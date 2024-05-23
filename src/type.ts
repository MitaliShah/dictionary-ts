export interface DictionaryProps {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: any[];
}

export interface Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
}

export interface ExtractedData {
  word: string;
  phonetics: Phonetic[];
  firstMeaning: {
    partOfSpeech: string;
    definitions: Definition[];
  };
  secondMeaning?: {
    partOfSpeech: string;
    definitions: Definition[];
    example?: string;
  };
  synonyms: string[];
  sourceUrls: string[];
}
