module.exports = (function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("i18n", (array, lang, dataName) => {
    const defaultLang = 'en';
    const langData = array[lang] || array [defaultLang] || [];
    const dataByName =  langData.filter((item) => {
      return item.filePathStem === `/i18n/${lang}/content/${dataName}`;
    }).map((item) => item.data);

    return dataByName[0];
  });

  eleventyConfig.addNunjucksFilter("json", (data) => JSON.stringify(data));

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
});
