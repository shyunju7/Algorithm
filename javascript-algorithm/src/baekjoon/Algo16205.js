/**
 * 백준 알고리즘 16205 변수명
 * 브론즈 2
 * 구현 문자열
 *
 * 1 카멜 표기법, 2 스네이크 표기법, 3 파스칼 표기법
 * **/

const readline = require("readline");
const solution = (line) => {
  let words = [];
  i = 0;
  while (i !== 3) {
    if (line.match(/[A-Z]/) !== null) {
      words.push(0, line.match(/[A-Z]/).index);
      line = line.substring(line.match(/[A-Z]/).index);
    } else {
      words.push(line);
      break;
    }
    console.log(words, line);
    i++;
  }
};

const splitStr = (n, line) => {
  let words = [];
  if (n === "1") {
    while (true) {
      if (line.match(/[A-Z]/) !== null) {
        words.push(0, line.match(/[A-Z]/).index);
        str.substring(line.match(/[A-Z]/).index);
      } else {
        words.push(str);
        break;
      }
    }
  } else if (n === "2") {
    words.split("-");
  }
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
