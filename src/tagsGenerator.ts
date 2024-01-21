import { SentryPluginOpts } from "./types/SentryPluginOpts";

const enrichers = [
    {
        condition: (opts: SentryPluginOpts) => opts.configuration?.sentry,
        generate: (opts: SentryPluginOpts) : any => ({
            tagName: 'script',
            innerHTML: `
            window.sentryOnLoad = function () {
              ${opts.configuration.sentry.init ?? `Sentry.init(${opts.configuration.sentry.init});`}
            }`,
            attributes: {
              defer: opts.configuration.script?.defer
            },
          })
    },
    {
        condition: (_: SentryPluginOpts) => true,
        generate: (opts: SentryPluginOpts) : any => ({
            tagName: 'script',
                attributes: {
                  crossorigin: "anonymous",
                  src: `https://js.sentry-cdn.com/${opts.DSN}.min.js`,
                  defer: opts.configuration?.script?.defer,
                  "data-lazy": opts.configuration?.script?.dataLazy ? "no" : undefined,
                },
        })
    }
]

export const constructHeadTags = (opts: SentryPluginOpts): any[] => process.env.NODE_ENV !== 'production' && opts.onlyProduction
    ? undefined
    : enrichers.map(enricher => enricher.condition(opts)? enricher.generate(opts) : undefined).filter(value => value)