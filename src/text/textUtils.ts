// VERSION: 1.3.2
// LAST UPDATE: 2024-01-13
// DESCRIPTION:
// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered
// a typography error
export function preventSingleLetterOrphans (input: string): string {
    if (input) {
      // single-letter words (CS language)
      // lower case - possible combinations
      input = input.replace(/([,;\)]?\s\(?)([ai]) ([ikosuvz]) /g, '$1$2\xa0$3\xa0')
      // lower case
      input = input.replace(/([,;\)]?\s\(?)([aikosuvz]) /g, '$1$2\xa0')
      // upper case- possible combinations
      input = input.replace(/([\.?!:\)]?\s?\(?)([AI]) ([ikosuvz]) /g, '$1$2\xa0$3\xa0')
      // upper case
      input = input.replace(/([\.?!:\)]?\s?\(?)([AIKOSUVZ]) /g, '$1$2\xa0')
      // other special symbols
      input = input.replace(' - ', ' -\xa0')
      input = input.replace(' č. ', ' č.\xa0')
      input = input.replace(' %', '\xa0%')
      input = input.replace(' Sb.', '\xa0Sb.')
    }
    return input
  }
