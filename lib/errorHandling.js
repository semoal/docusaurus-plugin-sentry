"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleConfigurationErrors = void 0;
const checks = [
    {
        condition: (opts) => !opts,
        error: "You need to specify an object with a key 'DSN' to use docusaurus-plugin-sentry."
    },
    {
        condition: (opts) => !opts.DSN,
        error: "You specified docusaurs-plugin-sentry options but the 'DSN' field was missing."
    },
    {
        condition: (opts) => opts.DSN.includes("http"),
        error: "Your 'DSN' property is not valid, should be without http|s URL Read more about the correct 'DSN' here: https://docs.sentry.io/platforms/javascript/install/loader/'"
    },
];
const handleConfigurationErrors = (opts) => {
    checks.forEach((check) => { if (check.condition(opts))
        throw new Error(check.error); });
};
exports.handleConfigurationErrors = handleConfigurationErrors;
