/* 상근이가 최소로 옮길 수 있는 설탕 봉지 갯수*/
const readline = require("readline");

const solution = (n) => {
  let answer = 0;

  while (n !== 0) {
    if (n % 5 === 0) {
      return (answer += n / 5);
    } else {
      n -= 3;
      answer++;
    }

    if (n < 0) return -1;
  }

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(Number(line)));
});
