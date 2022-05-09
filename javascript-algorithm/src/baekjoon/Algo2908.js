/**
 * 백준 알고리즘 2908 상수
 * 브론즈 2
 * 수학 구현
 * **/
const readline = require("readline");

const solution = (line) => {
  let nums = line.split(" ");
  let reversedNums = [];
  for (let i = 0; i < nums.length; i++) {
    reversedNums.push(Number(nums[i].split("").reverse().join("")));
  }

  return Math.max(...reversedNums);
};

// 풀이 2
// const solution = (num1, num2) => {
//   let firstNum = num1.split("").reverse().join("");
//   let secondNum = num2.split("").reverse().join("");
//   if (firstNum > secondNum) return firstNum;
//   else return secondNum;
// };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line.split(" ")[0], line.split(" ")[1]));
});
