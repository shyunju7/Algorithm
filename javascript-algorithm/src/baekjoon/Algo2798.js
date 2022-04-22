/**
 * 백준 알고리즘 2798 블랙잭
 * 브론즈 2
 * 브루트포스 알고리즘
 * **/

const readline = require("readline");
const solution = (input) => {
  let M = Number(input.shift().split(" ")[1]); // 딜러가 외친 숫자 M
  let arr = input[0].split(" ").map((num) => Number(num));
  let length = arr.length; // 주어진 N장의 카드
  let sum = 0; // 임시 저장을 위한 공간
  let maxSum = 0; // 최대합을 저장할 공간

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        sum = arr[i] + arr[j] + arr[k];
        if (sum <= M && sum >= maxSum) {
          maxSum = sum;
        }
      }
    }
  }

  return maxSum;
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input));
  }
});
