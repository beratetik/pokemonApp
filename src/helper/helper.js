/**
 * @param {String} text
 * @returns {String} capitalize the first letter of given string
 */
export const firstLetterUpperCase = text =>
  text.replace(/^\w/, first => first.toUpperCase());

/**
 * @param {String} url
 * @returns - Parsing the id of the pokemon with the given url
 */
export const getPokemonID = url => {
  const splittedURL = url.slice(0, -1).split("/");
  return splittedURL[splittedURL.length - 1];
};
