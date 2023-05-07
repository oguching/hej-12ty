module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./assets/css/style.css/");
    eleventyConfig.addWatchTarget("./assets/css/style.css/");
  };