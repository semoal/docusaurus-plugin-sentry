# Docusaurus-plugin-sentry

Lazy initializes Sentry without performance impact in your Docusaurus website.

## Installation

If you're looking for a solution for your **Docusaurus v3** website, please install `latest` version:
```bash
npm install docusaurus-plugin-sentry@latest
yarn add docusaurus-plugin-sentry@latest
pnpm add docusaurus-plugin-sentry@latest
```

But, if you're looking for a solution for your **Docusaurus v2** website, please install `v1` version:
```bash
npm install docusaurus-plugin-sentry@1.1.0
yarn add docusaurus-plugin-sentry@1.1.0
pnpm add docusaurus-plugin-sentry@1.1.0
```

## Configuration

docusaurus.config.js:
```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-sentry',
      {
        DSN: 'YOUR_SENTRY_DSN',
      },
    ],
  ],
};
```

Read more about how Sentry uses lazy loading to don't impact the performance [https://docs.sentry.io/platforms/javascript/install/lazy-load-sentry/](https://docs.sentry.io/platforms/javascript/install/lazy-load-sentry/)
