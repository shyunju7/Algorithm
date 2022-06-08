/**
 * 백준 알고리즘 2751 수 정렬하기2
 * 실버 5
 * 정렬
 * **/
const readline = require("readline");

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(Number(line));
  if (input[0] === input.length - 1) {
    let [_, ...nums] = input;
    nums.sort((a, b) => a - b);
    console.log(nums.join("\n"));
  }
});
