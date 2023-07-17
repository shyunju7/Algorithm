/* 
[BOJ] 1388_바닥장식_실버4
https://www.acmicpc.net/problem/1388
*/
const solution = (input) => {
  const [N, M] = input[0].split(" ").map((num) => parseInt(num));
  const room = input.splice(1).map((line) => line.split(""));
  const isVisited = Array.from({ length: N }, () => Array(M).fill(false));
  const dfs = (x, y) => {
    isVisited[x][y] = true;

    if (x === N || y === M) {
      return;
    }

    if (room[x][y] === "-") {
      if (y + 1 < M && room[x][y + 1] === "-") {
        dfs(x, y + 1);
      }
    }

    if (room[x][y] === "|") {
      if (x + 1 < N && room[x + 1][y] === "|") {
        dfs(x + 1, y);
      }
    }
  };
  let answer = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (isVisited[x][y]) continue;
      dfs(x, y, 0);
      answer++;
    }
  }
  return answer;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
  if (parseInt(input[0].split(" ")[0]) + 1 === input.length) {
    console.log(solution(input));
    rl.close();
  }
});
