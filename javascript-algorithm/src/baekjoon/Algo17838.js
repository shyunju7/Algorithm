/**
 * 백준 알고리즘 17838 커맨드
 * 실버 2
 * 구현 문자열
 * **/

const readline = require("readline");
const solution = (input) => {
  input.shift();
  let answer = [];
  let regExp;
  let start, end;
  for (let line of input) {
    start = line.charAt(0);
    end = line.charAt(line.length - 1);
    if (line.length === 7 && start !== end) {
      // 정규식
      regExp = new RegExp(
        start + "{2}" + end + "{2}" + start + "{1}" + end + "{2}"
      );

      regExp.test(line) ? answer.push(1) : answer.push(0);
    } else {
      answer.push(0);
    }
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
