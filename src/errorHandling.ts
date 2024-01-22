import { SentryPluginOpts } from "./types/SentryPluginOpts";

const checks = [
    {
        condition: (opts: SentryPluginOpts) =>  !opts,
        error: "You need to specify an object with a key 'DSN' to use docusaurus-plugin-sentry."
    },
    {
        condition: (opts: SentryPluginOpts) =>  !opts.DSN,
        error: "You specified docusaurs-plugin-sentry options but the 'DSN' field was missing."
    },
    {
        condition: (opts: SentryPluginOpts) =>  opts.DSN.includes("http"),
        error: "Your 'DSN' property is not valid, should be without http|s URL Read more about the correct 'DSN' here: https://docs.sentry.io/platforms/javascript/install/loader/'"
    },

]

export const handleConfigurationErrors = (opts: SentryPluginOpts)=> {
    checks.forEach((check) => { if (check.condition(opts)) throw new Error(check.error)})  
}