/**
 * N찍기
 * **/
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 1; i <= input; i++) {
    answer += i + "\n";
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
