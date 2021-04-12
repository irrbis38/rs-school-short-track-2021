/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let tmp = l;
  const numbersList = [];
  while (tmp) {
    if (tmp.value !== k) {
      numbersList.push(tmp.value);
    }
    tmp = tmp.next;
  }
  numbersList.reverse();
  let output = null;
  const ListNode = function ListNode(x) {
    this.value = x;
    this.next = null;
  };
  for (let i = 0; i < numbersList.length; i++) {
    const linkedList = new ListNode();
    linkedList.value = numbersList[i];
    linkedList.next = output;
    output = linkedList;
  }
  return output;
}

module.exports = removeKFromList;
