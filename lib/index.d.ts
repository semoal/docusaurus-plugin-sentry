import { LoadContext, Plugin } from '@docusaurus/types';
import { SentryPluginOpts } from './types/SentryPluginOpts';
export default function pluginSentry(_: LoadContext, opts: SentryPluginOpts): Plugin<unknown>;
