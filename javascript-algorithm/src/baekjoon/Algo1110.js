const readline = require("readline");

const solution = (num) => {
  let answer = 0;

  /***
   * ex) 26
   * 2 + 6 = 08 => 68
   * 6 + 8 = 14 => 84
   * 8 + 4 = 12 => 42
   * 4 + 2 = 06 => 26
   * firstNum + secondNum = calcNum => result
   */

  let firstNum = Math.floor(num / 10); // 2
  let secondNum = num % 10; // 6
  let result = -1;
  let calcNum = 0;
  while (result != num) {
    calcNum = firstNum + secondNum; // 8 -> 14 -> 12
    result = secondNum + "" + (calcNum % 10); // 68 -> 84 -> 42
    firstNum = secondNum; // 2 -> 6 -> 8
    secondNum = calcNum % 10; // 6 -> 8 -> 4
    answer++;
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(Number(line)));
});
