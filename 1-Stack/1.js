class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 查看栈顶的值
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = ``;
    for (let i = 0; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
  }
}

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack)); // {1}
console.log(Object.keys(stack)); // {2}
console.log(stack.items); // {3}
// 行{1}和行{2}的输出结果是["count", "items"]。这表示 count 和 items 属性是公开
// 的，我们可以像行{3}那样直接访问它们。根据这种行为，我们可以对这两个属性赋新的值。

module.exports = Stack;
