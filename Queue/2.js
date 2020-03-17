const Queue = require("./1.js");
// 双端队列 允许从前后端删除和添加的特殊队列
class DoubleQueue extends Queue {
  addFront(element) {
    if (this.isEmpty) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    return this.enqueue(element);
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
    // 或者直接 return  this.dequeue()
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }
  // ...
}

const queue = new DoubleQueue();
queue.addFront(2);
console.log(queue);

module.exports = DoubleQueue;
