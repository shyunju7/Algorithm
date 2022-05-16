/**
 * 백준 10173 니모를 찾아서
 * 브론즈 2
 * 문자열
 */

const readline = require("readline");

const solution = (input) => {
  const regExp = /nemo/gi;
  let answer = [];
  input.pop();

  for (line of input) {
    line.match(regExp) !== null ? answer.push("Found") : answer.push("Missing");
  }
  return answer.join("\n");
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (line === "EOI") {
    console.log(solution(input));
  }
});
