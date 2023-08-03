/*
[BOJ] 17202_핸드폰 번호 궁합_브론즈1
https://www.acmicpc.net/problem/17202
*/

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const phoneNumbers = input.map((line) => line.split(""));

// 2. dp 120ms
const dp = Array(16);
for (let idx = 0; idx < 8; idx++) {
  dp[idx * 2] = +phoneNumbers[0][idx];
  dp[idx * 2 + 1] = +phoneNumbers[1][idx];
}

let length = 16;
while (length !== 2) {
  for (let k = 0; k < length - 1; k++) {
    dp[k] = (dp[k] + dp[k + 1]) % 10;
  }
  length--;
}
console.log(dp[0] + "" + dp[1]);

// 1. 156ms
// let comb = [];
// for (let i = 0; i < 8; i++) {
//   comb.push(+phoneNumbers[0][i]);
//   comb.push(+phoneNumbers[1][i]);
// }

// while (comb.length !== 2) {
//   const tmp = [];
//   for (let i = 1; i < comb.length; i++) {
//     tmp.push((comb[i] + comb[i - 1]) % 10);
//   }
//   comb = tmp;
// }

// console.log(comb.join(""));
