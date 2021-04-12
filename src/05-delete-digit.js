/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strLen = String(n).length;
  const output = [];
  for (let i = 0; i < strLen; i++) {
    const arr = String(n).split('');
    arr.splice(i, 1);
    output.push(Number(arr.join('')));
  }
  return Math.max(...output);
}

module.exports = deleteDigit;
