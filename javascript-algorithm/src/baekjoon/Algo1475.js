/**
 * 백준 알고리즘 1475 방번호
 * 실버 5
 * 구현
 * **/

const readline = require("readline");
const solution = (line) => {
  let answer = Array.from({ length: 9 }, () => 0);

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "6" || line[i] === "9") {
      answer[6] += 0.5;
    } else {
      answer[parseInt(line[i])] += 1;
    }
  }
  return Math.round(Math.max(...answer));
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
