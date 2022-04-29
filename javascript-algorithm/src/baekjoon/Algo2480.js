/**
 * 백준 알고리즘 2480 주사위 3개
 * 브론즈 4
 * 수학 사칙연산
 * **/
const readline = require("readline");
const solution = (input) => {
  let answer = 0;
  let nums = input.split(" ").map((num) => Number(num));
  let second = nums.sort((a, b) => a - b)[1];
  nums = new Set(nums);
  if (nums.size === 1) {
    answer = 10000 + nums.values().next().value * 1000;
  } else if (nums.size === 2) {
    answer = 1000 + second * 100;
  } else {
    answer = Math.max(...nums) * 100;
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
