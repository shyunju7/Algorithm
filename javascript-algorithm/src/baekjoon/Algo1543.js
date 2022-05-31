/**
 * 백준 알고리즘 1543 문서검색
 * 실버 4
 * 문자열 그리디 알고리즘 브루트포스 알고리즘
 * **/

const readline = require("readline");
const solution = (input) => {
  answer = 0;
  let str = input[0];
  let reg = input[1];
  while (true) {
    if (str.search(reg) === -1) {
      break;
    }
    str = str.replace(reg, "_");
    answer += 1;
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);

  if (input.length == 2) console.log(solution(input));
});
