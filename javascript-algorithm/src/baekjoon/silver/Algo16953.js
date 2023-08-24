/*
[BOJ] 16953_A → B_실버4
https://www.acmicpc.net/problem/16953
*/
const [num, target] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = Number.MAX_SAFE_INTEGER;
const dfs = (result, depth) => {
  if (result >= target) {
    if (result === target) {
      answer = Math.min(answer, depth);
    }
    return;
  }

  dfs(result * 2, depth + 1);
  dfs(+(result + "1"), depth + 1);
};

dfs(num, 1);

console.log(answer === Number.MAX_SAFE_INTEGER ? -1 : answer);
