/*
[BOJ] 15652_N과 M(4)_실버3
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
const perm = (idx, cnt) => {
  if (cnt === M) {
    answer.push(numbers.join(" "));
    return;
  }

  for (let i = idx; i <= N; i++) {
    numbers[cnt] = i;
    perm(i, cnt + 1);
  }
};

perm(1, 0);
console.log(answer.join("\n"));
