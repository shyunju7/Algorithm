/*
[BOJ] 1931_회의실 배정_실버1
https://www.acmicpc.net/problem/1931
*/
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const rooms = [];

for (let idx = 1; idx <= N; idx++) {
  rooms.push(input[idx].split(" ").map(Number));
}

rooms.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let start = rooms[0][0];
let end = rooms[0][1];
let answer = 1;
for (let idx = 1; idx < N; idx++) {
  if (end <= rooms[idx][0]) {
    start = rooms[idx][0];
    end = rooms[idx][1];
    answer++;
  }
}
console.log(answer);
