/*
[BOJ] 7795_먹을 것인가 먹힐 것인가_실버3
https://www.acmicpc.net/problem/7795
*/
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const T = +input[idx++];

for (let tc = 1; tc <= T; tc++) {
  const [sizeOfA, sizeOfB] = input[idx++].split(" ").map(Number);
  const groupA = input[idx++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const groupB = input[idx++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let left = 0;
  let right = sizeOfA - 1;
  let answer = 0;

  for (let i = 0; i < sizeOfB; i++) {
    while (left <= right) {
      if (groupA[left] <= groupB[i]) {
        left += 1;
        continue;
      }
      answer += right - left + 1;
      break;
    }
  }

  console.log(answer);
}
