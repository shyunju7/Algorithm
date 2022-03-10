/** 세 주사위 합 중 가장 많이 나오는 수 찾기 */
const readline = require("readline");

const solution = (input) => {
  let answer = 0;
  let sum = [];
  let sumMap = new Map();
  for (let i = Number(input[0]); i > 0; i--) {
    for (let j = Number(input[1]); j > 0; j--) {
      sum.push(i + j);
    }
  }

  for (let i = Number(input[2]); i > 0; i--) {
    for (let j = 0; j < sum.length; j++) {
      sumMap.set(
        i + sum[j],
        sumMap.get(i + sum[j]) === undefined ? 1 : sumMap.get(i + sum[j]) + 1
      );
    }
  }

  answer = [...sumMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line.split(" ")));
});
