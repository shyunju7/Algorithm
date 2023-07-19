/* 
[BOJ] 2470_두 용액_골드5
https://www.acmicpc.net/problem/2470
*/

const solution = (input) => {
  let [[N], [...liquid]] = input.map((line) =>
    line.split(" ").map((num) => parseInt(num))
  );

  liquid.sort((a, b) => a - b);

  let left = 0;
  let right = N - 1;
  let answer = [];
  let tmp = Number.MAX_SAFE_INTEGER;

  while (left < right) {
    const sum = liquid[left] + liquid[right];

    if (Math.abs(sum) < tmp) {
      tmp = Math.abs(sum);
      answer = [liquid[left], liquid[right]];
      if (tmp === 0) break;
    }
    sum < 0 ? left++ : right--;
  }
  return answer.join(" ");
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length == 2) {
    console.log(solution(input));
    rl.close();
  }
});
