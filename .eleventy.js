const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const shortcodes = require('./eleventy-tools/shortcodes/shortcodes');
const filters = require('./eleventy-tools/filters/filters');

module.exports = (function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["njk", "md"]
  });

  eleventyConfig.addNunjucksFilter("getDataI18n", filters.getDataFromLocale);
  eleventyConfig.addNunjucksFilter("loadSnippet", filters.loadSnippet);
  eleventyConfig.addNunjucksFilter("json", filters.toJson);

  eleventyConfig.addNunjucksShortcode("heading1", shortcodes.createH1);
  eleventyConfig.addNunjucksShortcode("heading2", shortcodes.createH2);
  eleventyConfig.addNunjucksShortcode("heading3", shortcodes.createH3);

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
});
