// VERSION: 1.5
// LAST UPDATE: 2024-01-14
// DESCRIPTION:
// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered a typography error
// TESTS: /test/text/preventSingleLetterOrphans.test.ts

export function preventSingleLetterOrphans (input: string): string {
  if (input) {
    // single-letter words (CS language)
    // dual occurences
    input = input.replace(/( \(?)([AIai]) ([ikosuvz]) /g, '$1$2\xa0$3\xa0')
    // single occurences
    input = input.replace(/( \(?)([AIKOSUVZaikosuvz]) /g, '$1$2\xa0')
    // other special symbols
    input = input.replace(' - ', ' -\xa0')
    input = input.replace(' č. ', ' č.\xa0')
    input = input.replace(' %', '\xa0%')
    input = input.replace(' Sb.', '\xa0Sb.')
  }
  return input
}
