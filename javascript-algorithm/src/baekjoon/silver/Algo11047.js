/*
[BOJ] 11047_동전0_실버4
https://acmicpc.net/problem/11047
*/
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let cnt = 0;
let [_, K] = input.shift().split(" ").map(Number);
const coins = [...input].map(Number);
coins.sort((a, b) => b - a);

for (let coin of coins) {
  if (coin <= K) {
    cnt += Math.floor(K / coin);
    K = K % coin;
  }
}
console.log(cnt);
