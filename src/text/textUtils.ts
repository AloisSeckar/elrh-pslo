// VERSION: 1.3
// LAST UPDATE: 2024-01-08
// DESCRIPTION:
// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered
// a typography error
export function preventSingleLetterOrphans (input: string): string {
    if (input) {
      // single-letter words (CS language)
      // lower case - possible combinations
      input = input.replace(/([,;]?\s)([ai]) ([ikosuvz]) /g, '$1$2\u00A0$3\u00A0')
      // lower case
      input = input.replace(/([,;]?\s)([aikosuvz]) /g, '$1$2\u00A0')
      // upper case- possible combinations
      input = input.replace(/([\.?!:]?\s?)([AI]) ([ikosuvz]) /g, '$1$2\u00A0$3\u00A0')
      // upper case
      input = input.replace(/([\.?!:]?\s?)([AIKOSUVZ]) /g, '$1$2\u00A0')
      // other special symbols
      input = input.replace(' - ', ' -\u00A0')
      input = input.replace(' č. ', ' č.\u00A0')
      input = input.replace(' %', '\u00A0%')
      input = input.replace(' Sb.', '\u00A0Sb.')
    }
    return input
  }
