const esbuild = require('esbuild');
const extensibilityMap = require("@neos-project/neos-ui-extensibility/extensibilityMap.json");
const {cssModules} = require('esbuild-plugin-lightningcss-modules');
const isWatch = process.argv.includes('--watch');

/** @type {import("esbuild").BuildOptions} */
const options = {
    logLevel: "info",
    bundle: true,
    target: "es2020",
    entryPoints: {"Plugin": "src/index.js"},
    loader: {".js": "jsx"},
    outdir: "../../../Public/PublishingHistoryEditor",
    alias: extensibilityMap,
    plugins: [
        cssModules({})
    ]
}

if (isWatch) {
    esbuild.context(options).then((ctx) => ctx.watch())
} else {
    esbuild.build(options)
}
