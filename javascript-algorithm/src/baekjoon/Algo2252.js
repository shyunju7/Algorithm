/*
[BOJ] 2252_줄세우기_골드3
https://www.acmicpc.net/problem/2252
*/

const solution = (input) => {
  const [[N, _], ...orders] = input.map((line) => line.split(" ").map(Number));
  const graph = Array.from({ length: N + 1 }, () => []);
  const indegree = Array(N + 1).fill(0);
  const queue = [];
  const answer = [];

  for (let order of orders) {
    const [A, B] = order;
    graph[A].push(B);
    indegree[B]++;
  }

  for (let i = 1; i <= N; i++) {
    if (!indegree[i]) queue.push(i);
  }

  while (queue.length > 0) {
    const target = queue.pop();
    answer.push(target);
    console.log(answer);
    for (let v of graph[target]) {
      indegree[v]--;
      if (!indegree[v]) queue.push(v);
    }
  }
  return answer.join(" ");
};

const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length == parseInt(input[0].split(" ")[1]) + 1) {
    console.log(solution(input));
    rl.close();
  }
});
