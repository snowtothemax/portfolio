const withImages = require('next-images')
const withFonts = require("next-fonts")

module.exports = withImages(withFonts({
    enableSvg: true,
    webpack: (config,options) => {
        return config
    }
}))