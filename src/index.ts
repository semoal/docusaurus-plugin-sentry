import { LoadContext, Plugin } from '@docusaurus/types';

export type SentryPluginOpts = {
  DSN: string
}

export default function pluginSentry(
  _: LoadContext,
  opts: SentryPluginOpts,
): Plugin<unknown> {

  if (!opts) {
    throw new Error(
      `You need to specify an object with a key 'DSN' to use docusaurus-plugin-sentry.`,
    );
  }

  const { DSN } = opts;

  if (!DSN) {
    throw new Error(
      'You specified docusaurs-plugin-sentry options but the "DSN" field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  if (DSN.includes("http")) {
    throw new Error(
      'Your "DSN" property is not valid, should be without http|s URL' +
      'Read more about the correct "DSN" here: https://docs.sentry.io/platforms/javascript/install/lazy-load-sentry/'
    )
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-sentry',
    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://js.sentry-cdn.com',
              defer: true
            },
          },
          {
            tagName: 'script',
            attributes: {
              crossorigin: "anonymous",
              src: `https://js.sentry-cdn.com/${DSN}.min.js`,
              defer: true
            },
          },
          {
            tagName: 'script',
            innerHTML: `
            Sentry.onLoad(function() {
              Sentry.init();
            });
            `,
            attributes: {
              defer: true
            },
          },
        ],
      };
    }
  }
}
