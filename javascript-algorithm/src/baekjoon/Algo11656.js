/**
 * 백준 알고리즘 11656 접미사 배열
 * 실버 4
 * 문자열 정렬
 * **/
const readline = require("readline");
const solution = (line) => {
  let answer = [];
  for (let i = 0; i < line.length; i++) {
    answer.push(line.slice(i));
  }
  return answer.sort().join("\n");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
