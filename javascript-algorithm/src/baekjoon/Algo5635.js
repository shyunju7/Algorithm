/**
 * 백준 알고리즘 5635 생일
 * 실버 5
 * 구현 문자열 정렬
 * **/

const readline = require("readline");
const solution = (input) => {
  const length = input.shift();
  const userInfoList = input.map((line) => {
    const info = line.split(" ");
    return {
      name: info[0],
      date: Number(info[1]),
      month: Number(info[2]),
      year: Number(info[3]),
    };
  });

  const sortedOfBirth = userInfoList
    .sort((a, b) => a.date - b.date)
    .sort((a, b) => a.month - b.month)
    .sort((a, b) => a.year - b.year);

  return sortedOfBirth[length - 1].name + "\n" + sortedOfBirth[0].name;
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) === input.length - 1) {
    console.log(solution(input));
  }
});
