import { expect, test } from 'vitest'
import { preventSingleLetterOrphans } from '../../src/main'

test('should add non-breaking space after "a"', () => {
  const text = preventSingleLetterOrphans("Ahoj a nashledanou!")
  expect(text).not.toBe("Ahoj a nashledanou!")
  expect(text).toBe("Ahoj a\u00A0nashledanou!")
})

test('should keep text intact', () => {
  const text = preventSingleLetterOrphans("Ahoj b nashledanou!")
  expect(text).toBe("Ahoj b nashledanou!")
  expect(text).not.toBe("Ahoj b\u00A0nashledanou!")
})

test('should add non-breaking space after all "s"', () => {
  const text = preventSingleLetterOrphans("Pštros s pštrosicí s pštorsáčaty")
  expect(text).not.toBe("Pštros s\u00A0pštrosicí s pštorsáčaty")
  expect(text).toBe("Pštros s\u00A0pštrosicí s\u00A0pštorsáčaty")
})

test('should add non-breaking space after capital "K"', () => {
  const text = preventSingleLetterOrphans("Ulice jménem K Novým dvorům")
  expect(text).not.toBe("Ulice jménem K Novým dvorům")
  expect(text).toBe("Ulice jménem K\u00A0Novým dvorům")
})

test('should add non-breaking space after "a", "s" and "i"', () => {
  const text = preventSingleLetterOrphans("Jan a s ním i Jana")
  expect(text).not.toBe("Jan a\u00A0s ním i Jana")
  expect(text).not.toBe("Jan a\u00A0s ním i\u00A0Jana")
  expect(text).toBe("Jan a\u00A0s\u00A0ním i\u00A0Jana")
})

test('should add non-breaking space after capital "A" at the begining', () => {
  const text = preventSingleLetterOrphans("A to je vše")
  expect(text).not.toBe("A to je vše")
  expect(text).toBe("A\u00A0to je vše")
})
