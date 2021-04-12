const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.oldest = null;
    this.newest = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);

    if (!this.length) {
      this.oldest = newNode;
      this.newest = newNode;
    } else {
      this.newest.next = newNode;
      this.newest = newNode;
    }

    this.length++;
  }

  dequeue() {
    this.length--;

    const deleted = this.oldest.value;

    if (!this.length) {
      this.oldest = null;
      this.newest = null;
    } else {
      this.oldest = this.oldest.next;
    }

    return deleted;
  }
}

module.exports = Queue;
