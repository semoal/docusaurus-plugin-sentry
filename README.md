# Docusaurus-plugin-sentry

Lazy initializes Sentry without performance impact in your Docusaurus website.

## Installation

```bash
yarn add docusaurus-plugin-sentry
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
