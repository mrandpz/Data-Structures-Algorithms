// 没有TS的情况下实现私有属性，在提案中 #items 可以当做私有属性
const items = new WeakMap(); // {1}
class Stack {
  constructor() {
    items.set(this, []); // {2}
  }
  push(element) {
    const s = items.get(this); // {3}
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  // 其他方法
}

const a = new Stack();
a.push(1);
console.log(a);
