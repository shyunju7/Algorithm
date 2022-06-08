/**
 * 백준 알고리즘 14425 문자열 집합
 * 실버 3
 * 자료 구조 문자열 해시를 사용한 집합과 맵 트리를 사용한 집합과 맵
 * **/

const readline = require("readline");
const solution = (input) => {
  let answer = 0;
  let [n] = input[0].split(" ").map((num) => Number(num));
  let strList = new Set(input.slice(1, n + 1));
  let findList = input.slice(n + 1);

  for (let item of findList) {
    if (strList.has(item)) {
      answer++;
    }
  }
  return answer;
};
let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (
    Number(input[0].split(" ")[0]) + Number(input[0].split(" ")[1]) ===
    input.length - 1
  ) {
    console.log(solution(input));
  }
});
