/**
 * Transforms an object or array to a string.
 * @param {*} data Data to be transform.
 * @return {string}
 * @private
 */
const toJson_ = (data) => JSON.stringify(data);

/**
 * Searches within the eleventy collections data for a component, given the
 * locale and the filename to be search for.
 * @param {!Array<!Object>} array Collections from eleventy.
 * @param {string} lang String representing the language.
 * @param {string} dataName Filename to search for the data.
 * @return {string}
 * @private
 */
const getDataFromLocale_ = (array, lang, dataName) => {
  const defaultLang = 'en';
  const langData = array[lang] || array [defaultLang] || [];
  const dataByName =  langData.filter((item) => {
    return item.filePathStem === `/i18n/${lang}/content/${dataName}`;
  }).map((item) => item.data);

  return dataByName[0];
}

/**
 * Searches within the eleventy snippets collection given the filename.
 * @param {!Array<!Object>} array Snippets collection from eleventy.
 * @param {string} dataName Filename to search for the data.
 * @return {string}
 * @private
 */
const loadSnippet_ = (array, dataName) => {
  const dataByName =  array.filter((item) => {
    return item.filePathStem === `/i18n/snippets/${dataName}`;
  }).map((item) => item.templateContent);

  return dataByName[0].replace('<pre><code>','').replace('</code></pre>','');
}

module.exports = {
  toJson: toJson_,
  getDataFromLocale: getDataFromLocale_,
  loadSnippet: loadSnippet_,
}