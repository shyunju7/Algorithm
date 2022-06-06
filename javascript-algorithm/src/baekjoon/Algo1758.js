/**
 * 백준 알고리즘 1758 알바생 강호
 * 실버 4
 * 그리디 알고리즘 정렬
 * **/

const readline = require("readline");
const solution = (nums) => {
  let sortedNums = nums.sort((a, b) => b - a);
  let answer = sortedNums.map((tip, index) => {
    return tip - (index + 1 - 1) > 0 ? tip - (index + 1 - 1) : 0;
  });

  return answer.reduce((prev, cur) => prev + cur);
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(Number(line));
  if (input[0] === input.length - 1) {
    input.shift();
    console.log(solution(input));
  }
});
