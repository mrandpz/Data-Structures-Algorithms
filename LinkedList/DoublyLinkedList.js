// 双向链表
const { Node, LinkedList } = require("./LinkedList");

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev; // 新增prev指向
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn) {
    super(equalsFn);
    this.tail = undefined; // 新增尾部
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      if (index === 0) {
        // 插入到第一项
        if (this.head == null) {
          // 如果一个元素都没有
          this.head = node;
          this.tail = node;
        } else {
          // 如果有一个以上元素
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        // 最后一项
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        // 插入到中间
        const previous = this.getElementAt(index - 1);
        current = previous.next; // 1 2 3 4 5 6 获取到前一个为 4
        node.next = current; // current 就是5  当前node（7）的next就是5
        previous.next = node; // 4 的下一个就是 7
        current.prev = node; // 5的上一个就是7
        node.prev = previous; // 7的上一个就是4
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          // 如果只有一项
          this.tail = undefined;
        } else {
          // 多项
          this.head.prev = undefined;
        }
      } else if (index == this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
  }
}
