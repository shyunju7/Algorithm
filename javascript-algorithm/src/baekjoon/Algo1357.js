/** 뒤집힌 덧셈 **/
const readline = require("readline");

const solution = (input) => {
  const nums = input.split(" ");
  let x = nums[0];
  let y = nums[1];

  let sum = reverseNum(x) + reverseNum(y);

  return reverseNum(sum.toString());
};

const reverseNum = (num) => {
  return parseInt(num.split("").reverse().join(""));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
