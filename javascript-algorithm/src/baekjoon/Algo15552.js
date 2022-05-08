/**
 * 백준 알고리즘 15552 빠른 A+B
 * 브론즈 2
 * 수학 구현 사칙연산
 * **/
const readline = require("readline");
const solution = (input) => {
  let answer = "";
  input.shift();

  let nums = [];
  for (let i = 0; i < input.length; i++) {
    nums = input[i].split(" ");
    answer += parseInt(nums[0]) + parseInt(nums[1]) + "\n";
  }
  return answer;
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) + 1 == input.length) {
    console.log(solution(input));
  }
});
