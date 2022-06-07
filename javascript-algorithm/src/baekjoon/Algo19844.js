/**
 * 백준 알고리즘 19844 단어 갯수 세기
 * 실버 4
 * 구현 문자열
 * **/

const readline = require("readline");
const solution = (line) => {
  let answer = line.split(/\s|-/);
  let count = answer.length;
  let regExp = /^[c|j|n|m|t|s|l|d]{1}\'[aeiouh]|^qu\'[aeiouh]/;
  for (let item of answer) {
    if (regExp.test(item)) {
      count++;
    }
  }
  return count;
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
