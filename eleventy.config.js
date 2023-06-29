const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {
  // passthrough must be relative values from the root.
  // there's no relationship with input
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
        output: "_site",          // this is optional since the default is _site
        includes: "_includes",
        // data: "../_data"
      }
    }
  };