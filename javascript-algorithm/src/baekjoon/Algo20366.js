/*
[BOJ] 20366_같이 눈사람 만들래?_골드3
https://www.acmicpc.net/problem/20366
*/

const solution = (input) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const [[N], values] = input.map((line) => line.split(" ").map(Number));

  // 눈덩이 크기 오름차순 정렬
  values.sort((a, b) => a - b);

  // 안나
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      let left = 0;
      let right = N - 1;
      while (left < right) {
        if (i === left || j === left) {
          left++;
          continue;
        }

        if (i === right || j === right) {
          right--;
          continue;
        }

        let anna = values[i] + values[j];
        let elsa = values[left] + values[right];
        answer = Math.min(Math.abs(anna - elsa), answer);

        if (answer === 0) return answer;
        anna < elsa ? right-- : left++;
      }
    }
  }

  return answer;
};

const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length == 2) {
    console.log(solution(input));
    rl.close();
  }
});
