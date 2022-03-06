/* 9개의 서로 다른 자연수 중 최댓값과 index를 출력하는 프로그램 */
const readline = require("readline");

const solution = (input) => {
  let maxNum = -1;

  for (let num of input) {
    if (num > maxNum) {
      maxNum = num;
    }
  }

  console.log(maxNum);
  console.log(input.indexOf(maxNum) + 1);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length === 9) {
    solution(input);
  }
});
