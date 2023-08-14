/*
[BOJ] 10282_해킹_골드4
https://www.acmicpc.net/problem/10282 
*/

function PriorityQueue(comparator) {
  this.defaultComparator = function (a, b) {
    if (typeof a === "number" && b === "number") {
      return a - b;
    } else {
      a = a.toString();
      b = b.toString();
      if (a === b) return 0;
      return a <= b ? -1 : 1;
    }
  };

  const _comparator = comparator || this.defaultComparator;
  const _elements = [];

  const _compare = function (a, b) {
    return _comparator(_elements[a], _elements[b]);
  };

  const _swap = function (a, b) {
    const tmp = _elements[a];
    _elements[a] = _elements[b];
    _elements[b] = tmp;
  };

  this.isEmpty = function () {
    return _elements.length === 0;
  };

  this.size = function () {
    return _elements.length;
  };
  this.enqueue = function (el) {
    let size = _elements.push(el);
    let child = size - 1; // 추가된 자식 노드

    while (child) {
      const parent = Math.floor((child - 1) / 2);
      if (_compare(child, parent) < 0) break;
      _swap(parent, child);
      child = parent;
    }
  };

  this.peek = function () {
    if (_elements.length === 0) throw new Error("Queue is Empty!");
    return _elements[0];
  };

  this.dequeue = function () {
    if (_elements.length === 0) throw new Error("Queue is Empty!");

    let firstEl = this.peek();
    let lastEl = _elements.pop();
    let size = _elements.length;

    if (size === 0) return lastEl;

    _elements[0] = lastEl;
    let current = 0;

    while (current < size) {
      let parent = current;
      let left = current * 2 + 1; // 왼쪽
      let right = current * 2 + 2; // 오른쪽

      if (left < size && _compare(left, parent) >= 0) parent = left;
      if (right < size && _compare(right, parent) >= 0) parent = right;
      if (parent === current) break;

      _swap(parent, current);
      current = parent;
    }

    return firstEl;
  };
}

// class Computer {
//   constructor(num, time) {
//     this.num = num;
//     this.time = time;
//   }
// }
const INF = 1e9; // 10억

const solution = (N, graph, S) => {
  const distance = Array(N + 1).fill(INF);
  let pq = new PriorityQueue((a, b) => a[1] - b[1]);

  // 해킹이 시작된 컴퓨터 정보
  pq.enqueue([S, 0]);
  distance[S] = 0;

  while (pq.size() !== 0) {
    const [num, time] = pq.dequeue(); // 우선순위 큐에 저장되어 있는 정보 하나 제거

    // 이미 거리가 갱신되었다면 더 이상 갱신 x
    if (distance[num] < time) continue;

    for (let next of graph[num]) {
      const nextTime = time + next[1]; // 현재까지 걸린 시간 + 다음 컴퓨터 해킹까지 걸리는 시간
      if (nextTime < distance[next[0]]) {
        distance[next[0]] = nextTime;
        pq.enqueue([next[0], nextTime]);
      }
    }
  }

  let answer = 0;
  let maxDistance = 0;
  for (let i = 0; i <= N; i++) {
    if (distance[i] !== INF) {
      answer++;
      if (maxDistance < distance[i]) {
        maxDistance = distance[i];
      }
    }
  }
  console.log(answer, maxDistance);
};

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 1;
const T = +input[0];
for (let testCase = 0; testCase < T; testCase++) {
  const [N, D, S] = input[idx].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []); // graph[b][a] = s

  for (let i = 1; i <= D; i++) {
    const [a, b, s] = input[idx + i].split(" ").map(Number);
    graph[b].push([a, s]);
  }
  idx += D + 1;

  solution(N, graph, S);
}
