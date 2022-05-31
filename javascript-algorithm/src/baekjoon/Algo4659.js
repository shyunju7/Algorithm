/**
 * 백준 4659 비밀번호 발음하기
 * 실버 5
 * 문자열 파싱
 * 
 * 규칙
    1. 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
    2. 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
    3. 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
 */
const readline = require("readline");

const isContinuous = (line) => {
  for (let i = 0; i < line.length - 1; i++) {
    if (line[i] === line[i + 1] && line[i] !== "e" && line[i] !== "o") {
      return true;
    }
  }
  return false;
};

const solution = (input) => {
  input.pop();
  while (input.length !== 0) {
    line = input.shift();
    if (line.match(/[aeiou]/) !== null) {
      if (line.match(/[aeiou]{3}|[^aeiou]{3}/) !== null) {
        console.log(`<${line}> is not acceptable.`);
      } else {
        line.length === 1
          ? console.log(`<${line}> is acceptable.`)
          : isContinuous(line)
          ? console.log(`<${line}> is not acceptable.`)
          : console.log(`<${line}> is acceptable.`);
      }
    } else {
      console.log(`<${line}> is not acceptable.`);
    }
  }
};
let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (line === "end") {
    solution(input);
  }
});
