// 击鼓传花游戏
const Queue = require("./1.js");
const Deque = require("./2.js");

function hotPotato(elementsList, num) {
  const queue = new Queue(); // {1}
  const elimitatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]); // {2}
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // {3}
    }
    elimitatedList.push(queue.dequeue()); // {4}
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue() // {5}
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
console.log(result);

result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中被淘汰。`);
});
console.log(`胜利者： ${result.winner}`);

// 是否为回文
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    // {1}
    return false;
  }
  const deque = new Deque(); // {2}
  const lowerString = aString
    .toLocaleLowerCase()
    .split(" ")
    .join(""); // {3}
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    // {4}
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    // {5}
    firstChar = deque.removeFront(); // {6}
    lastChar = deque.removeBack(); // {7}
    if (firstChar !== lastChar) {
      isEqual = false; // {8}
    }
  }
  return isEqual;
}

console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log(
  "Was it a car or a cat I saw",
  palindromeChecker("Was it a car or a cat I saw")
);
console.log("Step on no pets", palindromeChecker("Step on no pets"));

// 这个其实可以用reserver
"123"
  .toLocaleLowerCase()
  .split(" ")
  .join("")
  .split("")
  .reverse()
  .join("");
