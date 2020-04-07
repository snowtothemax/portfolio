const withOptimizedImages = require('next-optimized-images');
const withImages = require('next-images');

module.exports = withOptimizedImages(withImages({
    esModule: true,
    webpack(config, options){
        return config;
    }
}));