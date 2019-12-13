module.exports = (function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("i18n", (array, lang) => array[lang][0].data);

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
});
