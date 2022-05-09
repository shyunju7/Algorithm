/**
 * 백준 알고리즘 10809 알파벳찾기
 * 브론즈 2
 * 구현 문자열
 * **/
const readline = require("readline");
const solution = (str) => {
  let answer = Array.from({ length: 26 }, () => -1);
  let alphabetSet = "abcdefghijklmnopqrstuvwxyz";

  let splittedStr = str.split("");

  for (let i = 0; i < splittedStr.length; i++) {
    if (alphabetSet.indexOf(splittedStr[i]) !== -1) {
      if (answer[alphabetSet.indexOf(splittedStr[i])] === -1) {
        answer[alphabetSet.indexOf(splittedStr[i])] = i;
      }
    }
  }

  return answer.join(" ");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
