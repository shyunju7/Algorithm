/*
[BOJ] 1516_게임 개발_골드3
https://www.acmicpc.net/problem/1516
*/

const solution = (N, input) => {
  const buildings = input.map((line) => line.split(" ").map(Number));
  const times = Array.from({ length: N + 1 }).fill(0);
  const indegree = Array.from({ length: N + 1 }).fill(0);
  const dp = Array.from({ length: N + 1 }).fill(0);
  const graph = Array.from({ length: N + 1 }, () => []);
  const queue = [];

  // 연결된 건물관계 저장
  for (let i = 1; i <= N; i++) {
    times[i] = buildings[i - 1].shift();
    indegree[i] = buildings[i - 1].length - 1;

    if (indegree[i] === 0) {
      queue.push(i);
      dp[i] = times[i];
    }

    for (let building of buildings[i - 1]) {
      if (building === -1) continue;
      graph[building].push(i);
    }
  }

  while (queue.length > 0) {
    let current = queue.shift();

    for (let next of graph[current]) {
      indegree[next]--;
      dp[next] = Math.max(dp[next], times[next] + dp[current]);
      if (indegree[next] === 0) queue.push(next);
    }
  }
  return dp.splice(1).join("\n").trim();
};

// input
const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === parseInt(input[0]) + 1) {
    const N = parseInt(input[0]);
    console.log(solution(N, input.splice(1)));
    rl.close();
  }
});
