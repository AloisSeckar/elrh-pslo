// VERSION: 1.4
// LAST UPDATE: 2024-01-13
// DESCRIPTION:
// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered a typography error
// TESTS: /test/text/preventSingleLetterOrphans.test.ts

export function preventSingleLetterOrphans (input: string): string {
  if (input) {
    // single-letter words (CS language)
    // lower case - dual occurences
    input = input.replace(/( \(?)([ai]) ([ikosuvz]) /g, '$1$2\xa0$3\xa0')
    // lower case - single occurences
    input = input.replace(/( \(?)([aikosuvz]) /g, '$1$2\xa0')
    // upper case - dual occurences
    input = input.replace(/( \(?)([AI]) ([ikosuvz]) /g, '$1$2\xa0$3\xa0')
    // upper case - single occurences
    input = input.replace(/( \(?)([AIKOSUVZ]) /g, '$1$2\xa0')
    // other special symbols
    input = input.replace(' - ', ' -\xa0')
    input = input.replace(' č. ', ' č.\xa0')
    input = input.replace(' %', '\xa0%')
    input = input.replace(' Sb.', '\xa0Sb.')
  }
  return input
}
