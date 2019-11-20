module.exports = {
    chainWebpack: config => {
        config.devServer.set('inline', false)
        config.devServer.set('hot', false),
        config.externals(['vue'])
    },
    filenameHashing: false
}