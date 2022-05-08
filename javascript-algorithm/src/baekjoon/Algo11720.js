/**
 * 백준 알고리즘 11720 숫자의 합
 * 브론즈 2
 * 수학 문자열 사칙연산
 * **/
const readline = require("readline");
const solution = (input) => {
  input.shift();
  let answer = 0;
  let strArr = input[0].split("");
  answer = strArr.reduce((prev, cur) => Number(prev) + Number(cur));
  return answer;
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
