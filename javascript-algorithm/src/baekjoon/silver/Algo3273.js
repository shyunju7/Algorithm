/*
[BOJ] 3273_두 수의 합_실버3
https://www.acmicpc.net/problem/3273
*/

let [N, numbers, X] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

N = +N;
X = +X;
const arr = numbers.split(" ").map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let answer = 0;
while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === X) {
    answer++;
    left++;
    right--;
    continue;
  }

  if (sum < X) left++;
  else right--;
}

console.log(answer);
