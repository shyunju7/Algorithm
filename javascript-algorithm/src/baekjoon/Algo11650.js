/**
 * 백준 알고리즘 11650 좌표 정렬하기
 * 실버 5
 * 정렬
 * **/
const readline = require("readline");
const solution = (input) => {
  let xy = [];
  for (let i = 1; i <= input[0]; i++) {
    xy.push(input[i].split(" "));
  }
  xy.sort((a, b) => a[1] - b[1]);
  xy.sort((a, b) => a[0] - b[0]);

  return xy.map((item) => item.join(" ")).join("\n");
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length - 1 === Number(input[0])) {
    console.log(solution(input));
  }
});
