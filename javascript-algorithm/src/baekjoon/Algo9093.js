/**
 * 백준 알고리즘 9093 단어 뒤집기
 * 브론즈 1
 * 구현 문자열
 * **/

const readline = require("readline");
const solution = (input) => {
  input.shift();
  let answer = [];
  let tmp = "";
  let splittedStr;
  for (let str of input) {
    splittedStr = str.split(" ");
    for (let i = 0; i < splittedStr.length; i++) {
      tmp += splittedStr[i].split("").reverse().join("") + " ";
    }
    answer.push(tmp.trimEnd());
    tmp = "";
  }

  return answer.join("\n");
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
