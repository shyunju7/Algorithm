const readline = require("readline");

const solution = (input, nums) => {
  let standard = input.split(" ")[1];
  let numArr = nums.split(" ");
  let answer = "";
  for (let num of numArr) {
    if (Number(num) < standard) answer += num + " ";
  }

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input[0], input[1]));
  }
}).on("close", function () {
  process.exit();
});
