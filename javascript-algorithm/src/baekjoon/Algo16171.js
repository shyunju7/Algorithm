/**
 * 백준 알고리즘 16171 나는 친구가 적다(small)
 * 실버 5
 * 문자열
 * **/

const readline = require("readline");
const solution = (input) => {
  const strWithNumberRemoved = input[0].replace(/[0-9]/g, "");
  return strWithNumberRemoved.includes(input[1]) ? 1 : 0;
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input));
  }
});
