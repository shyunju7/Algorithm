/**
 * 백준 알고리즘 11654 아스키코드
 * 브론즈 5
 * 구현
 * **/

const readline = require("readline");
const solution = (line) => {
  return line.charCodeAt(0);
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
