/**
 * 백준 알고리즘 2444
 * 브론즈 3
 * 구현
 * **/

const readline = require("readline");
const solution = (num) => {
  let answer = "";
  for (let i = 1; i <= num; i++) {
    answer += " ".repeat(num - i) + "*".repeat(i) + "*".repeat(i - 1) + "\n";
  }
  for (let i = num - 1; i > 0; i--) {
    answer += " ".repeat(num - i) + "*".repeat(i) + "*".repeat(i - 1) + "\n";
  }
  return answer.substring(0, answer.length - 1);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(Number(line)));
});
