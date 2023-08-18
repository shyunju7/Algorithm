/*
[BOJ] 1541_잃어버린 괄호_실버2
https://www.acmicpc.net/problem/1541
*/
const input = require("fs").readFileSync("./input.txt").toString().trim();
const expressions = input.split(/\-/);
const result = [];

for (let expression of expressions) {
  if (expression.charAt("+") !== -1) {
    let nums = expression.split("+").map(Number);
    let sum = nums[0];
    for (let idx = 1; idx < nums.length; idx++) {
      sum += nums[idx];
    }
    result.push(sum);
  } else {
    result.push(+expression);
  }
}

let answer = result[0];
for (let i = 1; i < result.length; i++) {
  answer -= result[i];
}
console.log(answer);
