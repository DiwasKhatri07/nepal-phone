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
  formatNepalPhone,
  getNepalPhoneParts
} from "@diwaskhatri/nepal-phone";

isNepalPhone("984-123-4567");
// true

normalizeNepalPhone("+977 9841234567");
// "9841234567"

formatNepalPhone("9841234567");
// "+977 9841234567"

getNepalPhoneParts("+977 9841234567");
// {
//   countryCode: "+977",
//   nationalNumber: "9841234567",
//   internationalNumber: "+9779841234567"
// }
```

## API

### `isNepalPhone(value)`

Returns `true` for a valid Nepali mobile number and `false` otherwise. The current release supports the `97` and `98` mobile prefixes.

### `normalizeNepalPhone(value)`

Removes common formatting characters and an optional `+977` or `977` country code. Invalid values are returned as normalized strings so that you can decide how to handle them.

### `formatNepalPhone(value)`

Returns a valid number in the canonical `+977 98XXXXXXXX` format. Throws a `TypeError` when the value is invalid.

### `getNepalPhoneParts(value)`

Returns the country code, normalized national number, and international number for a valid Nepali mobile number. Throws a `TypeError` for invalid input.

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
npm run test:jest
npm run check
```

The project includes both Node's built-in test runner and Jest. Run `npm run test:jest` to execute the Jest examples in `test/index.jest.test.js`. Please add or update tests when changing behavior.

## Release 1.1.0

Version 1.1.0 adds `getNepalPhoneParts(value)`, which is useful when an application needs separate country-code, national-number, and international-number fields without repeating parsing logic.

## Automatic publishing

The workflow in [`.github/workflows/publish.yml`](./.github/workflows/publish.yml) runs when a GitHub Release is published or when manually started. It tests the package and can publish to npm and GitHub Packages.

To enable npm publishing, add a repository secret named `NPM_TOKEN` containing an npm granular access token with package publishing permission and two-factor-authentication bypass enabled.

To enable GitHub Packages publishing, add a repository secret named `GH_PACKAGES_TOKEN` containing a GitHub classic personal access token with `read:packages` and `write:packages`, then add the repository variable `ENABLE_GITHUB_PACKAGES` with the value `true`. The separate variable keeps npm publishing from failing when GitHub Packages has not been configured yet.

After configuring the secrets, publish a GitHub Release or run the **Publish package** workflow manually from the Actions tab.

For a local release, update the version, run both test suites, and create a tag:

```bash
npm version minor
npm test
npm run test:jest
git push origin main --follow-tags
```

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
