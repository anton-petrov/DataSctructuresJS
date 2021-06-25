const util = require("util");

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Добавление элемента в конец списка
   * @param {*} data
   */
  append(data) {
    const node = new Node(data);
    // если список не пустой, то добавляем в конец новый элемент
    if (this.tail) {
      this.tail.next = node;
    }
    // если список пустой, то добавляем 1-й элемент, голова указывает на него
    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
    this.length++;
  }

  /**
   * Добавление элемента в начало списка
   * @param {*} data
   */
  prepend(data) {
    const node = new Node(data, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = head;
    }
    this.length++;
  }

  remove(data) {
    let deletedNode = null;

    if (!this.head) {
      return null;
    }

    while (this.head && this.head.data === data) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        if (current.next.data === data) {
          deletedNode = current.next;
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    if (this.tail.data === data) {
      this.tail = current;
    }

    this.length--;

    return deletedNode;
  }

  find({ value = undefined, comparator = undefined }) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      if (value !== undefined && current.data === value) {
        return current;
      }
      if (comparator && comparator(current.data)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  contains(data) {
    const result = this.find(data);
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  insert(after, data) {
    const found = this.find(after); // Node(data, next) -> ...
    if (!found) {
      return false;
    }
    found.next = new Node(data, found.next);
    this.length++;
    return true;
  }

  toArray(reverse = false) {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(current.data);
      current = current.next;
    }

    if (reverse) output.reverse();

    return output;
  }

  /**
   * @param {*[]} values
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }
}
