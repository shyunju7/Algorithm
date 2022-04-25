/**
 * 백준 알고리즘 1440 타임머신
 * 브론즈 2
 * 브루트포스 알고리즘
 * **/

const readline = require("readline");

const solution = (time) => {
  let answer = 0;
  let splittedTime = time.split(":").map((num) => Number(num));

  for (let num of splittedTime) {
    if (num > 0 && num <= 12) {
      answer++;
    } else if (num > 59) {
      return 0;
    }
  }
  return answer * 2;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
