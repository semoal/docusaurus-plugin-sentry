import { Configuration } from "./Configuration";
export type SentryPluginOpts = {
    DSN: string;
    allEnvironments?: boolean;
    configuration?: Configuration;
};
