/**
 * 백준 알고리즘 11094 꿍 가라시대
 * 브론즈 2
 * 구현 문자열
 * **/

const readline = require("readline");
const solution = (input) => {
  let answer = input.filter((line) => line.match("Simon says"));
  answer = answer.map((line) => line.replace("Simon says", ""));
  return answer.join("\n");
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length - 1 === Number(input[0])) {
    console.log(solution(input));
  }
});
