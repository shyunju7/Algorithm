/*
[BOJ] 15649_N과 M(1)_실버3
https://www.acmicpc.net/problem/15649
*/

const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isSelected = Array(N + 1).fill(false);
const numbers = Array(M).fill(false);
const answer = [];
const perm = (cnt) => {
  if (cnt === M) {
    answer.push(numbers.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (isSelected[i]) continue;
    isSelected[i] = true;
    numbers[cnt] = i;
    perm(cnt + 1);
    isSelected[i] = false;
  }
};

perm(0);
console.log(answer.join("\n"));
