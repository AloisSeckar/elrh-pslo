// VERSION: 1.5.1
// LAST UPDATE: 2024-01-14
// DESCRIPTION:
// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered a typography error
// TESTS: /test/text/preventSingleLetterOrphans.test.ts

export function preventSingleLetterOrphans (input: string): string {
  if (input) {
    // single-letter words (CS language)
    // dual occurences
    input = input.replace(/(\s\(?)([AIai])\s([ikosuvz])\s/g, '$1$2\xa0$3\xa0')
    // single occurences
    input = input.replace(/(\s\(?)([AIKOSUVZaikosuvz])\s/g, '$1$2\xa0')

    // other special symbols
    input = input.replace(' - ', ' -\xa0')
    input = input.replace(' – ', ' –\xa0')
    input = input.replace(' %', '\xa0%')
    input = input.replace(' ‰', '\xa0‰')
    // other special symbols (CS language)
    input = input.replace(' č. ', ' č.\xa0') // abbreviation for "number"
    input = input.replace(' Sb.', '\xa0Sb.') // abbreviation for "Collection of Laws" (common in legal texts)
    
    // currency
    input = input.replace(' Kč', '\xa0Kč')
    input = input.replace(' €', '\xa0€')
    // $ should be right before number - $50
    
    // splitted numbers
    input = input.replace(/(\\xa0)?(\d) (\d)/g, '$2\xa0$3')
  }
  return input
}
