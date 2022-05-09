/**
 * 백준 알고리즘 2711 오타맨 고창영
 * 브론즈 2
 * 구현 문자열
 * **/
const readline = require("readline");
const solution = (input) => {
  let answer = "";
  let line;
  input.shift();
  for (let i = 0; i < input.length; i++) {
    line = input[i].split(" ");
    answer +=
      line[1].substring(0, Number(line[0]) - 1) +
      line[1].substring(Number(line[0])) +
      "\n";
  }
  return answer.trimEnd();
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
