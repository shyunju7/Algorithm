/** 주어진 문자열이 몇개의 단어로 이루어져있는지 구하는 프로그램 - 단, 문자열의 처음과 끝은 공백으로 시작할 수 있음 */
const readline = require("readline");

const solution = (text) => {
  let answer = text.split(" ").filter((word) => word !== "");
  return answer.length;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
