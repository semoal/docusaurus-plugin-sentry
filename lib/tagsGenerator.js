"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructHeadTags = void 0;
const enrichers = [
    {
        condition: (opts) => { var _a; return (_a = opts.configuration) === null || _a === void 0 ? void 0 : _a.sentry; },
        generate: (opts) => {
            var _a, _b;
            return ({
                tagName: 'script',
                innerHTML: `
            window.sentryOnLoad = function () {
              ${(_a = opts.configuration.sentry.init) !== null && _a !== void 0 ? _a : `Sentry.init(${opts.configuration.sentry.init});`}
            }`,
                attributes: {
                    defer: (_b = opts.configuration.script) === null || _b === void 0 ? void 0 : _b.defer
                },
            });
        }
    },
    {
        condition: (_) => true,
        generate: (opts) => {
            var _a, _b, _c, _d;
            return ({
                tagName: 'script',
                attributes: {
                    crossorigin: "anonymous",
                    src: `https://js.sentry-cdn.com/${opts.DSN}.min.js`,
                    defer: (_b = (_a = opts.configuration) === null || _a === void 0 ? void 0 : _a.script) === null || _b === void 0 ? void 0 : _b.defer,
                    "data-lazy": ((_d = (_c = opts.configuration) === null || _c === void 0 ? void 0 : _c.script) === null || _d === void 0 ? void 0 : _d.dataLazy) ? "no" : undefined,
                },
            });
        }
    }
];
const constructHeadTags = (opts) => process.env.NODE_ENV !== 'production' && !opts.allEnvironments
    ? undefined
    : JSON.parse(JSON.stringify(enrichers.map(enricher => enricher.condition(opts) ? enricher.generate(opts) : undefined).filter(value => value)));
exports.constructHeadTags = constructHeadTags;
