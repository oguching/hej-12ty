const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/css/");
    eleventyConfig.addPassthroughCopy("./src/assets/img/")
    eleventyConfig.addWatchTarget("assets");

    // plugins
    eleventyConfig.addPlugin(pluginImages);

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: "src",
        // output: "_site",
        includes: "_includes",
        // data: "../_data"
      }
    }
  };