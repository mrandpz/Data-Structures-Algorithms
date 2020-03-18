const { Node, LinkedList } = require("./LinkedList");

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

function defaultCompare(a, b) {
  if (a === b) {
    // {1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}
// 有序链表
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn; // {3}
  }
  // 有序的插入
  insert(element, index = 0) {
    // {1}
    if (this.isEmpty()) {
      return super.insert(element, 0); // {2}
    }
    const pos = this.getIndexNextSortedElement(element); // {3}
    return super.insert(element, pos); // {4}
  }
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element); // {5}
      if (comp === Compare.LESS_THAN) {
        // {6}
        return i;
      }
      current = current.next;
    }
    return i; // {7}
  }
}
