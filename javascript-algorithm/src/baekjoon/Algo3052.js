/* 10개의 수를 42로 나누었을 때 서로 다른 나머지 수를 구하는 프로그램 */
const readline = require("readline");

const solution = (input) => {
  const calcResult = input.map((num) => num % 42);
  const answer = new Set(calcResult);
  console.log(answer.size);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length === 10) {
    solution(input);
  }
});
