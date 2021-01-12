module.exports = {
    chainWebpack: config => {
        config.devServer.set('inline', false)
        config.devServer.set('hot', false)
        // config.externals(['vue', 'vue-router', 'axios'])
    },
    filenameHashing: false,
    configureWebpack: {
        module: {
            rules: [
                { parser: { system: false } }
            ]
        }
    }
}