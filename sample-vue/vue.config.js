module.exports = {
    chainWebpack: config => {
        config.devServer.set('inline', false)
        config.devServer.set('hot', false)
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