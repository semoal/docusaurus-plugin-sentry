import { ScriptConfiguration } from "./ScriptConfiguration";
import { SentryConfiguration } from "./SentryConfiguration";
export type Configuration = {
    script: ScriptConfiguration;
    sentry?: SentryConfiguration;
};
