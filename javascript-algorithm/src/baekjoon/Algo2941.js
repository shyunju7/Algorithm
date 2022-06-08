/**
 * 백준 알고리즘 2941 크로아티아 알파벳
 * 실버 5
 * 구현 문자열
 *
 * **/
const readline = require("readline");
const solution = (line) => {
  let answer = line.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, "0");
  return answer.length;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
