module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/css/");
    eleventyConfig.addPassthroughCopy("./src/assets/img/");
    eleventyConfig.addWatchTarget("./src/assets/css/");

    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: "src",
        output: "public"
      }
    }
  };