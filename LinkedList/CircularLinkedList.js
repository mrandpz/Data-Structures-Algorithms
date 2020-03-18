const { Node, LinkedList } = require("./LinkedList");

class CircularLinkedList extends LinkedList {
  constructor(equalsFn) {
    super(equalsFn);
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node; // {1}
          node.next = this.head; // {2} 新增的 // 只有单个元素的时候next指向自己
        } else {
          node.next = current; // {3}
          current = this.getElementAt(this.size()); // {4}
          // 更新最后一个元素
          this.head = node; // {5}
          current.next = this.head; // {6} 新增的
        }
      } else {
        // 这种场景没有变化
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
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
        if (this.size() === 1) {
          // 只有一个的情况
          this.head = undefined;
        } else {
          const removed = this.head; // {1}
          current = this.getElementAt(this.size()); // {2} 新增的
          this.head = this.head.next; // {3}
          current.next = this.head; // {4}
          current = removed; // {5}
        }
      } else {
        // 不需要修改循环链表最后一个元素
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element; // {6}
    }
    return undefined;
  }
}
