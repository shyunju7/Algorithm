/* 세탁소 사장 동혁 */
const readline = require("readline");

const solution = (input) => {
  input.shift();
  let moneyList = [25, 10, 5, 1];
  let curMoney;
  let answer = "";
  let count = 0;
  while (input.length !== 0) {
    curMoney = input.shift();

    for (let i = 0; i < moneyList.length; ) {
      if (curMoney >= moneyList[i]) {
        curMoney -= moneyList[i];
        count++;
      } else {
        answer += count + " ";
        i++;
        count = 0;
      }
    }
    answer += "\n";
  }
  return answer;
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(Number(line));

  if (input[0] === input.length - 1) {
    console.log(solution(input));
  }
});
