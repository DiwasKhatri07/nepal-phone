import {
  formatNepalPhone,
  getNepalPhoneParts,
  isNepalPhone,
  normalizeNepalPhone
} from "../src/index.js";

describe("Nepal Phone", () => {
  test("normalizes a formatted number", () => {
    expect(normalizeNepalPhone("+977 984-123-4567")).toBe("9841234567");
  });

  test.each(["9841234567", "9712345678", "+9779812345678"])(
    "accepts %s",
    (value) => {
      expect(isNepalPhone(value)).toBe(true);
    }
  );

  test("rejects an invalid number", () => {
    expect(isNepalPhone("8841234567")).toBe(false);
  });

  test("formats a number", () => {
    expect(formatNepalPhone("9841234567")).toBe("+977 9841234567");
  });

  test("returns normalized phone parts", () => {
    expect(getNepalPhoneParts("+977 9841234567")).toEqual({
      countryCode: "+977",
      nationalNumber: "9841234567",
      internationalNumber: "+9779841234567"
    });
  });

  test("throws for invalid phone parts input", () => {
    expect(() => getNepalPhoneParts("12345")).toThrow(
      "Invalid Nepali mobile number"
    );
  });
});
