// VERSION: 1.0
// LAST UPDATE: 2023-12-30
// DESCRIPTION:
// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered
// a typography error
export function preventSingleLetterOrphans (input: string): string {
    if (input) {
      // single-letter words (CS language)
      // lower case
      input = input.replaceAll(' a ', ' a\u00A0')
      input = input.replaceAll(' i ', ' i\u00A0')
      input = input.replaceAll(' k ', ' k\u00A0')
      input = input.replaceAll(' o ', ' o\u00A0')
      input = input.replaceAll(' s ', ' s\u00A0')
      input = input.replaceAll(' u ', ' u\u00A0')
      input = input.replaceAll(' v ', ' v\u00A0')
      input = input.replaceAll(' z ', ' z\u00A0')
      // upper case
      input = input.replaceAll(' A ', ' A\u00A0')
      input = input.replaceAll(' I ', ' I\u00A0')
      input = input.replaceAll(' K ', ' K\u00A0')
      input = input.replaceAll(' O ', ' O\u00A0')
      input = input.replaceAll(' S ', ' S\u00A0')
      input = input.replaceAll(' U', '  U\u00A0')
      input = input.replaceAll(' V ', ' V\u00A0')
      input = input.replaceAll(' Z ', ' Z\u00A0')
      // other special symbols
      input = input.replace(' - ', ' -\u00A0')
      input = input.replace(' č. ', ' č.\u00A0')
      input = input.replace(' %', '\u00A0%')
      input = input.replace(' Sb.', '\u00A0Sb.')
    }
    return input
  }
