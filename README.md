# Nepal Phone

<div align="center">
  <img src="./assets/nepal-phone-banner.svg" alt="Nepal Phone banner" width="900" />
  <p><strong>Simple, dependable Nepali mobile-number utilities for JavaScript.</strong></p>
  <p>
    <a href="https://www.npmjs.com/package/@diwaskhatri/nepal-phone"><img src="https://img.shields.io/npm/v/@diwaskhatri/nepal-phone?style=flat-square&color=dc143c&label=npm" alt="npm version" /></a>
    <a href="https://github.com/DiwasKhatri07/nepal-phone/actions"><img src="https://img.shields.io/github/actions/workflow/status/DiwasKhatri07/nepal-phone/test.yml?style=flat-square&label=tests" alt="tests" /></a>
    <a href="https://github.com/DiwasKhatri07/nepal-phone/blob/main/LICENSE"><img src="https://img.shields.io/github/license/DiwasKhatri07/nepal-phone?style=flat-square" alt="MIT license" /></a>
  </p>
</div>

## Why Nepal Phone?

Nepali numbers are commonly written in local, international, and human-friendly formats. **Nepal Phone** gives your forms and applications one tiny, dependency-free toolkit for normalizing, validating, and formatting Nepali mobile numbers.

Built with care in Nepal by [Diwas Khatri](https://github.com/DiwasKhatri07).

## Highlights

- Zero runtime dependencies
- Works with Node.js 18+
- ESM-first and TypeScript declaration included
- Accepts `98XXXXXXXX`, `97XXXXXXXX`, `+97798XXXXXXXX`, and `97798XXXXXXXX`
- Removes spaces, hyphens, parentheses, and dots
- Small, readable, and easy to audit

## Install

```bash
npm install @diwaskhatri/nepal-phone
```

## Quick start

```js
import {
  isNepalPhone,
  normalizeNepalPhone,
  formatNepalPhone
} from "@diwaskhatri/nepal-phone";

isNepalPhone("984-123-4567");
// true

normalizeNepalPhone("+977 9841234567");
// "9841234567"

formatNepalPhone("9841234567");
// "+977 9841234567"
```

## API

### `isNepalPhone(value)`

Returns `true` for a valid Nepali mobile number and `false` otherwise. The current release supports the `97` and `98` mobile prefixes.

### `normalizeNepalPhone(value)`

Removes common formatting characters and an optional `+977` or `977` country code. Invalid values are returned as normalized strings so that you can decide how to handle them.

### `formatNepalPhone(value)`

Returns a valid number in the canonical `+977 98XXXXXXXX` format. Throws a `TypeError` when the value is invalid.

### `NEPAL_COUNTRY_CODE_PREFIX`

The exported constant `"+977"`.

## TypeScript

Type declarations are included:

```ts
import { isNepalPhone } from "@diwaskhatri/nepal-phone";

const valid: boolean = isNepalPhone("9812345678");
```

## Development

```bash
git clone https://github.com/DiwasKhatri07/nepal-phone.git
cd nepal-phone
npm install
npm test
npm run check
```

Please add or update tests when changing behavior. The project uses Node's built-in test runner to keep the package lightweight.

## Roadmap

- [ ] Add configurable mobile-prefix metadata
- [ ] Add optional Nepali numeral conversion
- [ ] Add CommonJS compatibility without increasing runtime dependencies
- [ ] Add broader regional and landline validation after the rules are verified

## Contributing

Issues, ideas, documentation improvements, and pull requests are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request and follow the project's [Code of Conduct](./CODE_OF_CONDUCT.md).

## Support the project

If Nepal Phone saves you time, you can support continued open-source work with a coffee:

<a href="https://ko-fi.com/diwaskhatri"><img src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Diwas Khatri a coffee" height="36" /></a>

## License

Released under the [MIT License](./LICENSE). Copyright © 2026 Diwas Khatri.
