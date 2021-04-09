/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrLength = arr.length;
  const indexes = [];
  const values = [];
  const result = [];
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === -1) {
      indexes.push(i);
    } else {
      values.push(arr[i]);
    }
  }
  const sorted = values.sort((a, b) => a - b);
  for (let j = 0; j < arrLength; j++) {
    if (indexes.includes(j)) {
      result.push(-1);
    } else {
      result.push(sorted.shift());
    }
  }
  return result;
}

module.exports = sortByHeight;
