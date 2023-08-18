/*
[BOJ] 18310_안테나_실버3
https://www.acmicpc.net/problem/18310
*/
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const houses = input[1].split(" ").map(Number);
houses.sort((a, b) => a - b);

let midIdx = Math.floor((N - 1) / 2);
console.log(houses[midIdx]);
