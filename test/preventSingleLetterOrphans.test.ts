import { expect, test } from 'vitest'
import { preventSingleLetterOrphans } from '../src/main'

test('should add non-breaking space after "a"', () => {
  const text = preventSingleLetterOrphans("Ahoj a nashledanou!")
  expect(text).not.toBe("Ahoj a nashledanou!")
  expect(text).toBe("Ahoj a\xa0nashledanou!")
})

test('should keep text intact', () => {
  const text = preventSingleLetterOrphans("Ahoj b nashledanou!")
  expect(text).toBe("Ahoj b nashledanou!")
  expect(text).not.toBe("Ahoj b\xa0nashledanou!")
})

test('should add non-breaking space after all "s"', () => {
  const text = preventSingleLetterOrphans("Pštros s pštrosicí s pštorsáčaty")
  expect(text).not.toBe("Pštros s\xa0pštrosicí s pštorsáčaty")
  expect(text).toBe("Pštros s\xa0pštrosicí s\xa0pštorsáčaty")
})

test('should add non-breaking space after "a", "s" and "i"', () => {
  const text = preventSingleLetterOrphans("Jan a s ním i Jana")
  expect(text).not.toBe("Jan a\xa0s ním i Jana")
  expect(text).not.toBe("Jan a\xa0s ním i\xa0Jana")
  expect(text).toBe("Jan a\xa0s\xa0ním i\xa0Jana")
})

test('should add non-breaking space to appropriate places', () => {
  let text = preventSingleLetterOrphans("Hle, a to je vše.")
  expect(text).toBe("Hle, a\xa0to je vše.")
  text = preventSingleLetterOrphans("Hle: a s tím je to vše.")
  expect(text).toBe("Hle: a\xa0s\xa0tím je to vše.")
  text = preventSingleLetterOrphans("Hle. A to je vše.")
  expect(text).toBe("Hle. A\xa0to je vše.")
  text = preventSingleLetterOrphans("Hle: A s tím je to vše.")
  expect(text).toBe("Hle: A\xa0s\xa0tím je to vše.")
  text= preventSingleLetterOrphans("(něco v závorce) a s tím je to vše.")
  expect(text).toBe("(něco v\xa0závorce) a\xa0s\xa0tím je to vše.")
  text = preventSingleLetterOrphans("něco před závorkou (a s tím je to vše).")
  expect(text).toBe("něco před závorkou (a\xa0s\xa0tím je to vše).")
})

test('should add non-breaking space after capital "K"', () => {
  const text = preventSingleLetterOrphans("Ulice jménem K Novým dvorům")
  expect(text).not.toBe("Ulice jménem K Novým dvorům")
  expect(text).toBe("Ulice jménem K\xa0Novým dvorům")
})

test('should NOT add non-breaking space after capital "A"', () => {
  const text = preventSingleLetterOrphans("případy B i A jsou stejné")
  expect(text).not.toBe("případy B i\xa0A\xa0jsou stejné")
  expect(text).toBe("případy B i\xa0A jsou stejné")
})

test('should add non-breaking space after capital "A" at the begining of sentences', () => {
  let text = preventSingleLetterOrphans("První věta. A druhá věta")
  expect(text).toBe("První věta. A\xa0druhá věta")
  text = preventSingleLetterOrphans("První věta? A druhá věta")
  expect(text).toBe("První věta? A\xa0druhá věta")
  text = preventSingleLetterOrphans("První věta! A druhá věta")
  expect(text).toBe("První věta! A\xa0druhá věta")
  text = preventSingleLetterOrphans("První věta: A druhá věta")
  expect(text).toBe("První věta: A\xa0druhá věta")
  text = preventSingleLetterOrphans("První věta; A druhá věta")
  expect(text).toBe("První věta; A\xa0druhá věta")
})

test('should add non-breaking space inside brackets', () => {
  let text = preventSingleLetterOrphans("Tada (a to je vše)")
  expect(text).toBe("Tada (a\xa0to je vše)")
  text = preventSingleLetterOrphans("Tada (A to je vše)")
  expect(text).toBe("Tada (A\xa0to je vše)")
})

test('should treat special symbols', () => {
  const text = preventSingleLetterOrphans("Je 50 % šance, že bude pršet - vezměte si deštník")
  expect(text).toBe("Je 50\xa0% šance, že bude pršet -\xa0vezměte si deštník")
})

test('should treat legal text', () => {
  const text = preventSingleLetterOrphans("zákon č. 1/2024 Sb.")
  expect(text).not.toBe("zákon č. 1/2024 Sb.")
  expect(text).toBe("zákon č.\xa01/2024\xa0Sb.")
})

test('should treat currency', () => {
  const text = preventSingleLetterOrphans("1 € = 25 Kč")
  expect(text).toBe("1\xa0€ = 25\xa0Kč")
})

test('should treat numbers', () => {
  let text = preventSingleLetterOrphans("1 000 000")
  expect(text).toBe("1\xa0000\xa0000")
  text = preventSingleLetterOrphans("+420 111 222 333")
  expect(text).toBe("+420\xa0111\xa0222\xa0333")
})
