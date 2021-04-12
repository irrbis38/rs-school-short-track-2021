/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let finish = array.length - 1;
  let requiredIndex;
  while (start <= finish) {
    requiredIndex = Math.floor((finish - start) / 2);
    if (array[requiredIndex] === value) {
      return requiredIndex;
    }
    if (array[requiredIndex] < value) {
      start = requiredIndex + 1;
    } else {
      finish = requiredIndex - 1;
    }
  }
  return -1;
}

module.exports = findIndex;
