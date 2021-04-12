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
  let first = 0;
  let last = array.length - 1;
  let find = 0;

  while (first <= last) {
    find = Math.floor((first + last) / 2);

    if (array[find] === value) return find;

    if (array[find] < value) {
      first = find + 1;
    } else last = find - 1;
  }

  return -1;
}

module.exports = findIndex;
