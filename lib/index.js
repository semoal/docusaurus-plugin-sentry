"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandling_1 = require("./errorHandling");
const tagsGenerator_1 = require("./tagsGenerator");
function pluginSentry(_, opts) {
    (0, errorHandling_1.handleConfigurationErrors)(opts);
    const headTags = (0, tagsGenerator_1.constructHeadTags)(opts);
    return {
        name: 'docusaurus-plugin-sentry',
        injectHtmlTags() {
            return !headTags
                ? {}
                : { headTags };
        }
    };
}
exports.default = pluginSentry;
