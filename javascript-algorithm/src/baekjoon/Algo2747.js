/**
 * 백준 알고리즘 2747 피보나치수
 * 브론즈 3
 * 수학 사칙연산
 * **/

const readline = require("readline");

const solution = (num) => {
  let fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;

  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[num];
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(Number(line)));
});
