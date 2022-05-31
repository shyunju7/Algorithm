/**
 * 백준 알고리즘 1181 단어 정렬
 * 실버 5
 * 문자열 정렬
 * **/

const readline = require("readline");
const solution = (input) => {
  answer = input.sort();
  answer = answer.sort((a, b) => a.length - b.length);
  answer = new Set(answer);
  return [...answer].join("\n");
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) === input.length - 1) {
    input.shift();
    console.log(solution(input));
  }
});
