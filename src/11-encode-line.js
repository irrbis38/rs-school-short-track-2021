/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    let counter = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        counter += 1;
      } else {
        break;
      }
    }
    if (counter > 1) {
      result.push(counter + str[i]);
    } else {
      result.push(str[i]);
    }
    i = i + counter - 1;
  }
  return result.join('');
}

module.exports = encodeLine;
