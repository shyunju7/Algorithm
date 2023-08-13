/*
[BOJ] 14465_소가 길을 건너간 이유 5_실버
https://www.acmicpc.net/problem/14465
*/

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K, B] = input[0].split(" ").map(Number);
const trafficLight = Array(N + 1).fill(1);
for (let i = 1; i <= B; i++) {
  trafficLight[+input[i]] = 0;
}

let left = 1;
let right = K;
let sum = 0;
let answer = N;

for (let i = 1; i <= K; i++) {
  sum += trafficLight[i];
}

while (right !== N + 1) {
  answer = Math.min(answer, K - sum);

  // 범위 설정
  sum -= trafficLight[left];
  left += 1;
  right += 1;
  sum += trafficLight[right];
}
console.log(answer);
