/**
 * 백준 알고리즘 2789 유학금지
 * 브론즈 2
 * 구현 문자열
 * **/

const readline = require("readline");
const solution = (line) => {
  return line.replace(/[CAMBRIDGE]/g, "");
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
