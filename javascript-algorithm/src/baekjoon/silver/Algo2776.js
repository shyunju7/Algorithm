/*
[BOJ] 2776_암기왕_실버4
https://www.acmicpc.net/problem/2776
*/
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
let result = [];
for (let tc = 0; tc < T; tc++) {
  const N = +input.shift();
  const origin = new Set(input.shift().split(" ").map(Number));
  const M = +input.shift();
  const answer = input.shift().split(" ").map(Number);

  for (let v of answer) {
    if (origin.has(v)) result.push(1);
    else result.push(0);
  }
}
console.log(result.join("\n"));
