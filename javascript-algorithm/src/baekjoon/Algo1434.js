/**
 * 백준 알고리즘 1434 책정리
 * 브론즈 2
 * 수학 사칙연산
 * **/

const readline = require("readline");

const solution = (input) => {
  input.shift();
  let answer = 0;
  let boxSum = input[0]
    .split(" ")
    .map((box) => Number(box))
    .reduce((prev, cur) => prev + cur);
  let bookSum = input[1]
    .split(" ")
    .map((book) => Number(book))
    .reduce((prev, cur) => prev + cur);

  answer = boxSum - bookSum;
  return answer;
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);

  if (input.length === 3) {
    console.log(solution(input));
  }
});
