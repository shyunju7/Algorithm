/* 별찍기 2439 */
const readline = require("readline");
const solution = (num) => {
  let answer = "";

  for (let i = 1; i <= num; i++) {
    answer += " ".repeat(num - i).concat("*".repeat(i)) + "\n";
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(Number(line)));
});
