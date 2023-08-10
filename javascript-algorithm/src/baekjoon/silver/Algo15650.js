/*
[BOJ] 15650_N과 M(2)_실버3
https://www.acmicpc.net/problem/15650
*/
const [N, M] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isSelected = Array(N + 1).fill(false);
const numbers = Array(M).fill(false);
const answer = [];
const perm = (idx, cnt) => {
  if (cnt === M) {
    answer.push(numbers.join(" "));
    return;
  }

  for (let i = idx + 1; i <= N; i++) {
    if (isSelected[i]) continue;
    isSelected[i] = true;
    numbers[cnt] = i;
    perm(i, cnt + 1);
    isSelected[i] = false;
  }
};

perm(0, 0);
console.log(answer.join("\n"));
