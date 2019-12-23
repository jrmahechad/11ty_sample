/**
 * Creates a h1 tag with the class 'is-heading-1'.
 * @param {string} title Text to be place as h1.
 * @return {string} h1 tag as a string.
 * @private
 */
const createHeading1_ = (title) => {
  return `<h1 class="is-heading-1">${title}</h1>`;
}

/**
 * Creates a h2 tag with the class 'is-heading-2'.
 * @param {string} title Text to be place as h2.
 * @return {string} h2 tag as a string.
 * @private
 */
const createHeading2_ = (title) => {
  return `<h2 class="is-heading-2">${title}</h2>`;
}

/**
 * Creates a h3 tag with the class 'is-heading-3'.
 * @param {string} title Text to be place as h3.
 * @return {string} h3 tag as a string.
 * @private
 */
const createHeading3_ = (title) => {
  return `<h3 class="is-heading-3">${title}</h3>`;
}

module.exports = {
  createH1: createHeading1_,
  createH2: createHeading2_,
  createH3: createHeading3_,
}