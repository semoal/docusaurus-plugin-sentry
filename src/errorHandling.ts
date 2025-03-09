import { SentryPluginOpts } from "./types/SentryPluginOpts";

const checks = [
    {
        condition: (opts: SentryPluginOpts) =>  !opts,
        error: "You need to specify an object with a key 'DSN' to use docusaurus-plugin-sentry."
    },
    {
        condition: (opts: SentryPluginOpts) =>  !opts.DSN,
        error: "You specified docusaurs-plugin-sentry options but the 'DSN' field was missing."
    }
]

export const handleConfigurationErrors = (opts: SentryPluginOpts)=> {
    checks.forEach((check) => { if (check.condition(opts)) throw new Error(check.error)})  
}