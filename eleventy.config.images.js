
/** 
 * path comes from Nodejs
 * It provides utilities for working 
 * with files and directory paths
 **/
const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
  
  function relativeToInputPath(inputPath, relativeFilePath) {
    let split = inputPath.split("/");
    split.pop();

    return path.resolve(split.join(path.sep), relativeFilePath);
  }

  eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes) {
    let formats = ["webp", "jpeg", "auto"];

    let file = relativeToInputPath(this.page.inputPath, src);
    
    let metadata = await eleventyImage(file, {
      widths: widths || ["auto"],
      formats,
      urlPath: "/assets/img"
      //outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async"
    }

    return eleventyImage.generateHTML(metadata, imageAttributes)
  })
}

