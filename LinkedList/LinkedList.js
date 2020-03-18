class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined; // 私有变量
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node; // 保存第一个元素
    } else {
      current = this.head;
      while (current.next != null) {
        // 找到最后一个节点
        current = current.next;
      }
      // 连接上
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;

      // 移除第一项
      if (index === 0) {
        this.head = current.next; // 将head指向next
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        // 将previous与current的下一项链接起来。跳过current，从而移除他
        previous.next = current.next; // 2的next 指向 4 ，cuurent3就会被跳过
      }
      this.count--;
      return current.element;
    }

    return undefined; // 如果越界了，返回undefined
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }
  toString() {
    if (this.head == null) {
      // {1}
      return "";
    }
    let objString = `${this.head.element}`; // {2}
    let current = this.head.next; // {3}
    for (let i = 1; i < this.size() && current != null; i++) {
      // {4}
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString; // {5}
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

function defaultEquals(a, b) {
  return a === b; // 自定义判断条件
}

const list = new LinkedList();
list.push(15);
list.push(10);

module.exports = {
  Node,
  LinkedList
};
