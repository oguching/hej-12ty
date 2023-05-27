module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./public/css/style.css/");
    eleventyConfig.addPassthroughCopy("./public/img/");
    eleventyConfig.addWatchTarget("./public/css/style.css/");

    return {
      dir: {
        //input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    }
  };