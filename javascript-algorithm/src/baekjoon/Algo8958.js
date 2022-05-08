/**
 * 백준 알고리즘 8958 OX퀴즈
 * 브론즈 2
 * 구현 문자열
 * **/
const readline = require("readline");
const solution = (input) => {
  input.shift();
  let answer = "";
  let curStr;
  let tmp = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    curStr = input[i].split("");
    for (let j = 0; j < curStr.length; j++) {
      if (curStr[j] === "X") {
        count = 0;
      } else {
        count++;
        tmp += count;
      }
    }
    answer += tmp + "\n";
    tmp = 0;
    count = 0;
  }

  return answer.trim();
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === Number(input[0]) + 1) {
    console.log(solution(input));
  }
});
