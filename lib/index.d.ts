import { LoadContext, Plugin } from '@docusaurus/types';
export type SentryPluginOpts = {
    DSN: string;
};
export default function pluginSentry(_: LoadContext, opts: SentryPluginOpts): Plugin<unknown>;
