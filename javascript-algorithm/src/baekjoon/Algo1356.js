/* 유진수
   미해결 - 22.04.22
*/
const readline = require("readline");

const solution = (nums) => {
  if (nums.startsWith("0")) nums = nums.substr(1);
  let numArr = nums.split("").map((num) => Number(num));
  let calcResult = numArr.reduce((prev, cur) => (prev *= cur), 1);
  let leftNum = 1;
  let curNum;

  // 예외 1
  if (numArr.length === 1) return "NO";

  // 예외 2
  if (calcResult === 0) {
    let tmp = numArr.filter((num) => num === 0);
    return tmp.length % 2 === 1 ? "NO" : "YES";
  }

  while (numArr.length !== 0) {
    curNum = numArr.shift();
    leftNum *= curNum;

    if (leftNum === calcResult / curNum) {
      return "YES";
    } else {
      calcResult /= curNum;
      isNaN(calcResult / curNum) ? (calcResult = 0) : (calcResult /= curNum);
    }
  }

  return "NO";
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
