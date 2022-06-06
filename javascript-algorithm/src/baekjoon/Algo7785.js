/**
 * 백준 알고리즘 7785 회사에 있는 사람
 * 실버 5
 * 자료구조 해시를 사용한 집합과 맵
 * **/

const readline = require("readline");
const solution = (record) => {
  let answer = new Map();

  for (let i = 1; i <= record[0]; i++) {
    if (record[i].includes("enter")) {
      answer.set(record[i].split(" ")[0], 1);
    } else {
      answer.delete(record[i].split(" ")[0]);
    }
  }

  return [...answer.keys()].sort().reverse().join("\n");
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) === input.length - 1) {
    console.log(solution(input));
  }
});
