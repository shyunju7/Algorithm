/**
 * 백준 알고리즘 9342 염색체
 * 실버 4
 * 문자열 정렬 파싱
 * **/

const readline = require("readline");
const solution = (input) => {
  const regExp = /^[ABCDEF]{0,1}A{1,}F{1,}C{1,}[ABCDEF]{0,1}$/;
  let answer = [];
  answer = input.map((line) => (regExp.test(line) ? "Infected!" : "Good"));
  return answer.join("\n");
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length - 1 === Number(input[0])) {
    input.shift();
    console.log(solution(input));
  }
});
