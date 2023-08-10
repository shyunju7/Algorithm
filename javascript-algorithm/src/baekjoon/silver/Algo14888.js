/*
[BOJ]14888_연산자 끼워넣기_실버1
https://www.acmicpc.net/problem/14888
*/

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let minValue = 1000000000;
let maxValue = -1000000000;

const dfs = (result, idx, plus, minus, multiply, divide) => {
  // 종료 조건
  if (idx === N) {
    maxValue = Math.max(maxValue, result);
    minValue = Math.min(minValue, result);
    return;
  }

  if (plus !== 0) {
    dfs(result + numbers[idx], idx + 1, plus - 1, minus, multiply, divide);
  }

  if (minus !== 0) {
    dfs(result - numbers[idx], idx + 1, plus, minus - 1, multiply, divide);
  }

  if (multiply !== 0) {
    dfs(result * numbers[idx], idx + 1, plus, minus, multiply - 1, divide);
  }

  if (divide !== 0) {
    dfs(~~(result / numbers[idx]), idx + 1, plus, minus, multiply, divide - 1);
  }
};
const N = +input[0];
const numbers = input[1].split(" ").map(Number);
const [plus, minus, multiply, divide] = input[2].split(" ").map(Number); // + - * /

dfs(numbers[0], 1, plus, minus, multiply, divide);
console.log(maxValue);
console.log(minValue);
