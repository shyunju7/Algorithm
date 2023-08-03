/*
[BOJ] 1966_프린터 큐_실버3
https://www.acmicpc.net/problem/1966
*/
class Docs {
  constructor(index, order) {
    this.index = index;
    this.order = order;
  }
}

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
const answer = [];

for (let testCase = 0; testCase < T; testCase++) {
  const [N, target] = input[2 * testCase].split(" ");
  const printerList = input[2 * testCase + 1].split(" ").map((v) => +v);

  const queue = [];
  for (let i = 0; i < N; i++) {
    queue.push(new Docs(i, printerList[i]));
  }

  // target의 순서를 찾을 때까지 반복
  let work = 0;
  while (true) {
    const current = queue.shift();

    // 현재 문서보다 우선순위 높은 작업이 존재한다면
    if (queue.some((docs) => current.order < docs.order)) {
      queue.push(current);
      continue;
    }

    // 현재 문서의 우선순위가 가장 높다면 작업
    work++;

    // 현재 문서가 찾던 문서라면 종료
    if (current.index === +target) {
      answer.push(work);
      break;
    }
  }
}

console.log(answer.join("\n"));
