import test from "node:test";
import assert from "node:assert/strict";
import {
  NEPAL_COUNTRY_CODE_PREFIX,
  formatNepalPhone,
  isNepalPhone,
  normalizeNepalPhone
} from "../src/index.js";

test("exports the Nepal country code", () => {
  assert.equal(NEPAL_COUNTRY_CODE_PREFIX, "+977");
});

test("normalizes local, international, and formatted numbers", () => {
  assert.equal(normalizeNepalPhone("984-123-4567"), "9841234567");
  assert.equal(normalizeNepalPhone("+977 9841234567"), "9841234567");
  assert.equal(normalizeNepalPhone(9779812345678), "9812345678");
});

test("accepts common 97 and 98 Nepali mobile prefixes", () => {
  assert.equal(isNepalPhone("9841234567"), true);
  assert.equal(isNepalPhone("9712345678"), true);
  assert.equal(isNepalPhone("+977 9812345678"), true);
});

test("rejects invalid numbers", () => {
  for (const value of ["984123456", "8841234567", "98412345678", "hello", ""]) {
    assert.equal(isNepalPhone(value), false, `expected ${value} to be invalid`);
  }
});

test("formats a valid number consistently", () => {
  assert.equal(formatNepalPhone("984-123-4567"), "+977 9841234567");
  assert.equal(formatNepalPhone("+9779841234567"), "+977 9841234567");
});

test("formatNepalPhone throws a useful error for invalid input", () => {
  assert.throws(() => formatNepalPhone("12345"), {
    name: "TypeError",
    message: "Invalid Nepali mobile number"
  });
});
