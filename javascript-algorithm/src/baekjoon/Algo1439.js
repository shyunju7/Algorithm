/**
 * 백준 알고리즘 1439 뒤집기
 * 실버 5
 * 구현
 * **/

const readline = require("readline");
const solution = (line) => {
  const zeroCount = line.split("0").filter((el) => el !== "").length;
  const oneCount = line.split("1").filter((el) => el !== "").length;

  return zeroCount > oneCount ? oneCount : zeroCount;
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
