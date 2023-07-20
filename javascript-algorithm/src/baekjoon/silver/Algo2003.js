/* 
[BOJ] 2003_수들의 합
https://www.acmicpc.net/problem/1789
*/

const solution = (S) => {
  let sum = 0;
  let num = 0;
  while (sum <= S) {
    num++;
    sum += num;
  }
  return num - 1;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(parseInt(line)));
  rl.close();
});
