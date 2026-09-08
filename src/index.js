/**
 * Nepal phone utilities.
 * @module nepal-phone
 */

const NEPAL_COUNTRY_CODE = "977";
const NEPAL_MOBILE_PATTERN = /^(?:97|98)\d{8}$/;

/**
 * Remove formatting and the optional Nepal country code from a number.
 * @param {string|number} value
 * @returns {string}
 */
export function normalizeNepalPhone(value) {
  if (value === null || value === undefined) return "";

  let number = String(value).trim().replace(/[\s().-]/g, "");
  if (number.startsWith("+")) number = number.slice(1);
  if (number.startsWith(NEPAL_COUNTRY_CODE)) number = number.slice(3);

  return number;
}

/**
 * Check whether a value is a valid Nepali mobile number.
 * @param {string|number} value
 * @returns {boolean}
 */
export function isNepalPhone(value) {
  return NEPAL_MOBILE_PATTERN.test(normalizeNepalPhone(value));
}

/**
 * Format a valid Nepali mobile number as +977 98XXXXXXXX.
 * @param {string|number} value
 * @returns {string}
 */
export function formatNepalPhone(value) {
  const number = normalizeNepalPhone(value);
  if (!isNepalPhone(number)) {
    throw new TypeError("Invalid Nepali mobile number");
  }
  return `+${NEPAL_COUNTRY_CODE} ${number}`;
}

/**
 * Return useful, normalized parts of a valid Nepali mobile number.
 * @param {string|number} value
 * @returns {{countryCode: string, nationalNumber: string, internationalNumber: string}}
 * @throws {TypeError} when the value is invalid
 */
export function getNepalPhoneParts(value) {
  const nationalNumber = normalizeNepalPhone(value);
  if (!isNepalPhone(nationalNumber)) {
    throw new TypeError("Invalid Nepali mobile number");
  }

  return {
    countryCode: `+${NEPAL_COUNTRY_CODE}`,
    nationalNumber,
    internationalNumber: `+${NEPAL_COUNTRY_CODE}${nationalNumber}`
  };
}

export const NEPAL_COUNTRY_CODE_PREFIX = `+${NEPAL_COUNTRY_CODE}`;
