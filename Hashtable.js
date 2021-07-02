import LinkedList from "./LinkedList";

const defaultHashTableSize = 32;
const PRIME = 31;

export default class Hashtable {
  /**
   * @param {number} hashTableSize - размер хеш-таблицы
   */
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  /**
   *
   *
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    const keyCharacters = Array.from(key);
    const hash = keyCharacters.reduce(
      (hashAccumulator, keyChar, index, keyCharacters) =>
        (hashAccumulator + keyChar.charCodeAt(0) * (PRIME ** keyCharacters.length - index - 1) % 101),
      0
    );
    return hash % this.buckets.length;
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      comparator: (data) => data.key === key,
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.data.value = value;
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      comparator: (data) => data.key === key,
    });
    if (node) {
      return bucketLinkedList.remove(node.data);
    }
    return null;
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      comparator: (data) => data.key === key,
    });

    return node ? node.data.value : undefined;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }

  /**
   *
   * @return {*[]}
   */
  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.toArray().map((data) => data.value);
      return values.concat(bucketValues);
    }, []);
  }

  toString() {
    return this.buckets[0].toArray();
  }
}