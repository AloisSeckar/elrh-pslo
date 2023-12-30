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
