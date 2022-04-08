/** 새 **/
const readline = require("readline");
const solution = (num) => {
  let answer = 0;

  let index = 1;
  while (num !== 0) {
    if (index <= num) {
      num -= index;
      index++;
      answer++;
    } else {
      index = 1;
    }
  }

  return answer;
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
