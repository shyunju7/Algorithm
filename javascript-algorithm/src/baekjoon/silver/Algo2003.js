/* 
[BOJ] 2003_수들의 합 2
https://www.acmicpc.net/problem/2003
*/

const solution = (input) => {
  const [[N, M], numbers] = input.map((line) => line.split(" ").map(Number));

  let answer = 0;
  let left = 0;
  let right = 1;

  if (numbers[left] === M) answer++;

  while (right < N) {
    let sum = numbers.slice(left, right + 1).reduce((prev, cur) => prev + cur);

    if (sum === M) {
      right++;
      answer++;
      continue;
    }

    if (sum < M) {
      right++;
    } else {
      if (left === right) {
        right++;
        continue;
      }
      left++;
    }
  }
  return answer;
};

const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input));
    rl.close();
  }
});
