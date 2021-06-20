const util = require("util");

// Array [1, 2, 3.1, "text", {}]
// Object { name: "Vasya", age: 13  }
// Set - содержит только уникальные значения (А, Б, В) ((А, 0.8), (Б, 0.3), (В, 1))
// Map
// WeakMap, WeakSet

// Проблема! В массиве вставка и удаление элемента - весьма дорогие по времени операции.

// let arr = [1, 2, 3] // ?

// arr.unshift(0)

// arr.push(4) // ?

// arr

// arr.length // ?

// [data, next] -> [data, next] -> null

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  append2(data) {
    const node = new Node(data);
    
    if (!this.head)
    {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  insertAfter(after, data) {
    const found = this.find(after);

    if (!found) {
      return;
    }

    found.next = new Node(data, found.next);
  }

  find(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  toArray() {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(current);
      current = current.next;
    }

    return output;
  }

  remove(data) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.data === data) {
      this.tail = current;
    }
  }
}

const list = new LinkedList(); // ?


list.append("1"); // ?
list.append("2");
list.append("3");
list.append("4");
list.prepend(0);
list.prepend(-1);
list.append2("5");
list.append2("6");


// console.log(list);

console.log(util.inspect(list, { showHidden: false, depth: null }));

console.log(list.toArray())
