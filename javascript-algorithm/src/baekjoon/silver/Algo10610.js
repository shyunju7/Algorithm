/*
[BOJ] 10610_30_실버4
https://www.acmicpc.net/problem/10610
*/
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const number = input[0].split("");
if (!number.includes("0")) {
  console.log("-1");
} else {
  const sum = number.reduce((prev, cur) => prev + +cur, 0);
  if (sum % 3 !== 0) console.log("-1");
  else {
    const answer = number.sort((a, b) => b - a).join("");
    console.log(answer);
  }
}
