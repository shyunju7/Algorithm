/**
 * 백준 알고리즘 9086 문자열
 * 브론즈 2
 * 구현 문자열
 * **/
const readline = require("readline");
const solution = (input) => {
  input.shift();
  let answer = input.map((str) => str.charAt(0) + str.charAt(str.length - 1));
  return answer.join("\n");
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) + 1 === input.length) {
    console.log(solution(input));
  }
});
