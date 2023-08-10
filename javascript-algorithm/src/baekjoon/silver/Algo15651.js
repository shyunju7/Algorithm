/*
[BOJ] 15650_N과 M(3)_실버3
https://www.acmicpc.net/problem/15650
*/
const [N, M] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const numbers = Array(M).fill(false);
const answer = [];
const perm = (cnt) => {
  if (cnt === M) {
    answer.push(numbers.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    numbers[cnt] = i;
    perm(cnt + 1);
  }
};

perm(0);
console.log(answer.join("\n"));
