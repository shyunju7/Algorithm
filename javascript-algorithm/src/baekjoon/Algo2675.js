/**
 * 백준 알고리즘 2675 문자열 반복
 * 브론즈 2
 * **/

const readline = require("readline");

const solution = (input) => {
  let answer = "";
  let tmp = [];
  input.shift();
  let repeatCount = 0;
  let strLength = 0;
  for (let str of input) {
    tmp = str.split(" ");
    repeatCount = Number(tmp[0]);
    strLength = tmp[1].length;
    for (let i = 0; i < strLength; i++) {
      answer += tmp[1].charAt(i).repeat(repeatCount);
    }
    answer += "\n";
  }
  return answer;
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === Number(input[0]) + 1) {
    console.log(solution(input));
  }
});
