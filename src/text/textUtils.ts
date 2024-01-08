// VERSION: 1.0
// LAST UPDATE: 2023-12-30
// DESCRIPTION:
// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered
// a typography error
export function preventSingleLetterOrphans (input: string): string {
    if (input) {
      // single-letter words (CS language)
      // lower case - possible combinations
      input = input.replaceAll(' a i ', ' a\u00A0i\u00A0')
      input = input.replaceAll(' a k ', ' a\u00A0k\u00A0')
      input = input.replaceAll(' a o ', ' a\u00A0o\u00A0')
      input = input.replaceAll(' a s ', ' a\u00A0s\u00A0')
      input = input.replaceAll(' a u ', ' a\u00A0u\u00A0')
      input = input.replaceAll(' a v ', ' a\u00A0v\u00A0')
      input = input.replaceAll(' a z ', ' a\u00A0z\u00A0')
      input = input.replaceAll(' i k ', ' i\u00A0k\u00A0')
      input = input.replaceAll(' i o ', ' i\u00A0o\u00A0')
      input = input.replaceAll(' i s ', ' i\u00A0s\u00A0')
      input = input.replaceAll(' i u ', ' i\u00A0u\u00A0')
      input = input.replaceAll(' i v ', ' i\u00A0v\u00A0')
      input = input.replaceAll(' i z ', ' i\u00A0z\u00A0')
      // lower case
      input = input.replaceAll(' a ', ' a\u00A0')
      input = input.replaceAll(' i ', ' i\u00A0')
      input = input.replaceAll(' k ', ' k\u00A0')
      input = input.replaceAll(' o ', ' o\u00A0')
      input = input.replaceAll(' s ', ' s\u00A0')
      input = input.replaceAll(' u ', ' u\u00A0')
      input = input.replaceAll(' v ', ' v\u00A0')
      input = input.replaceAll(' z ', ' z\u00A0')
      // upper case- possible combinations
      input = input.replaceAll('A i ', 'A\u00A0i\u00A0')
      input = input.replaceAll('A k ', 'A\u00A0k\u00A0')
      input = input.replaceAll('A o ', 'A\u00A0o\u00A0')
      input = input.replaceAll('A s ', 'A\u00A0s\u00A0')
      input = input.replaceAll('A u ', 'A\u00A0u\u00A0')
      input = input.replaceAll('A v ', 'A\u00A0v\u00A0')
      input = input.replaceAll('A z ', 'A\u00A0z\u00A0')
      input = input.replaceAll('I k ', 'I\u00A0k\u00A0')
      input = input.replaceAll('I o ', 'I\u00A0o\u00A0')
      input = input.replaceAll('I s ', 'I\u00A0s\u00A0')
      input = input.replaceAll('I u ', 'I\u00A0u\u00A0')
      input = input.replaceAll('I v ', 'I\u00A0v\u00A0')
      input = input.replaceAll('I z ', 'I\u00A0z\u00A0')
      // upper case
      input = input.replaceAll('A ', 'A\u00A0')
      input = input.replaceAll('I ', 'I\u00A0')
      input = input.replaceAll('K ', 'K\u00A0')
      input = input.replaceAll('O ', 'O\u00A0')
      input = input.replaceAll('S ', 'S\u00A0')
      input = input.replaceAll('U ', 'U\u00A0')
      input = input.replaceAll('V ', 'V\u00A0')
      input = input.replaceAll('Z ', 'Z\u00A0')
      // other special symbols
      input = input.replace(' - ', ' -\u00A0')
      input = input.replace(' č. ', ' č.\u00A0')
      input = input.replace(' %', '\u00A0%')
      input = input.replace(' Sb.', '\u00A0Sb.')
    }
    return input
  }
