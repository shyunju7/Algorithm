/*
[BOJ] 18352_특정 거리의 도시 찾기_실버2
https://www.acmicpc.net/problem/18352
*/

const solution = (input) => {
  const [[N, M, K, X], ...map] = input.map((line) =>
    line.split(" ").map(Number)
  );
  const cities = Array.from({ length: N + 1 }, () => []);
  const distance = Array(N + 1).fill(-1);
  const answer = [];

  const bfs = (city) => {
    const queue = [];
    queue.push(city);
    distance[city] = 0;

    while (queue.length) {
      const current = queue.shift();

      if (distance[current] === K) {
        answer.push(current);
        continue;
      }

      for (const next of cities[current]) {
        if (distance[next] !== -1) continue;
        distance[next] = distance[current] + 1;
        queue.push(next);
      }
    }
  };

  map.map(([from, to]) => cities[from].push(to));
  bfs(X);
  return !answer.length ? -1 : answer.sort((a, b) => a - b).join("\n");
};
const input = require("fs")
  .readFileSync("../../testFiles/baekjoon18352.txt")
  .toString()
  .split("\n");
console.log(solution(input));
