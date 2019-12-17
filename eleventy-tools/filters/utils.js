/**
 * Transforms an object or array to a string.
 * @param {*} data Data to be transform.
 * @return {string}
 * @private
 */
const toJson_ = (data) => JSON.stringify(data);

/**
 * Searches within the eleventy collections data for a component, providing the
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

module.exports = {
  toJson: toJson_,
  getDataFromLocale: getDataFromLocale_,
}