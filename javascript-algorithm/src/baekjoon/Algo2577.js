/* 3개의 수의 곱에 결과에 0-9가 몇번 나타났는지 구하는 프로그램 */
const readline = require("readline");

const solution = (input) => {
  const result = input.reduce((a, b) => a * b, 1);
  const numArr = result.toString().split("");
  const answer = Array.from({ length: 10 }, () => 0);

  numArr.map((num) => {
    return (answer[num] = answer[num] + 1);
  });

  answer.map((count) => console.log(count));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length === 3) {
    solution(input);
  }
});
