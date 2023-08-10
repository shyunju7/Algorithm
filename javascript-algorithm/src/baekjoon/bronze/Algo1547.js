/*
[BOJ] 1547_공_브론즈3
https://www.acmicpc.net/problem/1547
*/

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
let currentBallIdx = 1;

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (currentBallIdx !== x && currentBallIdx !== y) continue;
  if (currentBallIdx === x) currentBallIdx = y;
  else currentBallIdx = x;
}

console.log(currentBallIdx);
