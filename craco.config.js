const CracoAlias = require("craco-alias");
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "options",
                baseUrl: "./",
                aliases: {
                    "@commons": "./src/components/commons/",
                    "@modules": "./src/components/modules/",
                    "@utils": "./src/util/",

                }
            }
        },
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true
                    }
                }
            }
        }

    ]
};
