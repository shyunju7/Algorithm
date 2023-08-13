/*
[BOJ] 2304_창고 다각형_실버2
https://www.acmicpc.net/problem/2304
*/

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const bars = [];
let maxHeight = 0;
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ");
  if (maxHeight < +y) {
    maxHeight = +y;
  }
  bars.push([+x, +y]);
}

bars.sort((a, b) => a[0] - b[0]);

let maxIdx = bars.findIndex((v) => v[1] === maxHeight);
let currentWidth = bars[0][0];
let currentHeight = bars[0][1];
let answer = 0;

// 왼쪽 기준
for (let i = 1; i <= maxIdx; i++) {
  const next = bars[i];

  if (currentHeight < next[1]) {
    answer += (next[0] - currentWidth) * currentHeight;
    currentHeight = next[1];
    currentWidth = next[0];
  }
}

// 가장 높은 지점 넓이 추가
answer += currentHeight;

// 오른쪽 기준
currentWidth = bars[N - 1][0];
currentHeight = bars[N - 1][1];
for (let i = N - 2; i >= maxIdx; i--) {
  const next = bars[i];

  if (currentHeight <= next[1]) {
    answer += (currentWidth - next[0]) * currentHeight;
    currentHeight = next[1];
    currentWidth = next[0];
  }
}

console.log(answer);
