/**
 * 백준 1769. 3의 배수
 * 실버 5
 * 수학 문자열 구현
 * **/

const readline = require("readline");
const solution = (x) => {
  let _x = x;
  let answer = 0;
  while (_x.length !== 1) {
    const nums = _x.split("").reduce((prev, cur) => Number(prev) + Number(cur));
    _x = nums.toString();
    answer++;
  }
  if (_x % 3 === 0) return answer + "\n" + "YES";
  else return answer + "\n" + "NO";
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
  rl.close();
});
