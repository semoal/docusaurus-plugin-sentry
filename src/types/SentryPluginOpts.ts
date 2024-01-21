import { Configuration } from "./Configuration";


export type SentryPluginOpts = {
    DSN: string;
    onlyProduction?: boolean;
    configuration?: Configuration;
};
