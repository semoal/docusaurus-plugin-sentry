import { LoadContext, Plugin } from '@docusaurus/types';
import { SentryPluginOpts } from './types/SentryPluginOpts';
import { handleConfigurationErrors } from './errorHandling';
import { constructHeadTags } from './tagsGenerator';


export default function pluginSentry(
  _: LoadContext,
  opts: SentryPluginOpts,
): Plugin<unknown> {
  handleConfigurationErrors(opts)
  const headTags = constructHeadTags(opts)
  return {
    name: 'docusaurus-plugin-sentry',
    injectHtmlTags() {
      return !headTags 
        ? {} 
        : { headTags }
    }
  }
}
