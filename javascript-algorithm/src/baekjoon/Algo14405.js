/**
 * 백준 알고리즘 14405 피카츄
 * 실버 5
 * 문자열 정규표현식
 *
 * "pi", "ka", "chu"
 * **/

const readline = require("readline");
const solution = (line) => {
  let regExp = /pi|ka|chu/g;
  line = line.replace(regExp, "");
  return line.length === 0 ? "YES" : "NO";
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
