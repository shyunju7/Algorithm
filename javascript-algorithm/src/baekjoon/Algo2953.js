/**
 * 백준 알고리즘 2953 나는 요리사다
 * 브론즈 3
 * 수학 사칙연산
 * **/
const readline = require("readline");
const solution = (input) => {
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    answer.push(
      input[i]
        .split(" ")
        .map((num) => Number(num))
        .reduce((prev, cur) => prev + cur)
    );
  }
  let max = Math.max(...answer);

  return answer.indexOf(max) + 1 + " " + max;
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 5) {
    console.log(solution(input));
  }
});
