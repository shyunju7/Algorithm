/* 
[BOJ] 3184_양_실버1
https://www.acmicpc.net/problem/3184
*/
const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const isVisited = Array.from({ length: N }, () => Array(M).fill(false));
  const isIn = (nx, ny) => 0 <= nx && 0 <= ny && nx < N && ny < M;
  const dxdy = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const garden = [];
  let sheep = 0;
  let wolf = 0;

  for (let line of [...input].splice(1)) {
    sheep += [...line].filter((item) => item === "o").length || 0;
    wolf += [...line].filter((item) => item === "v").length || 0;
    garden.push([...line]);
  }

  if (sheep === 0 || wolf === 0) return sheep + " " + wolf;

  const bfs = (targetX, targetY) => {
    const queue = [];
    queue.push([targetX, targetY]);
    isVisited[targetX][targetY] = true;
    const count = garden[targetX][targetY] === "o" ? [1, 0] : [0, 1];

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let dir of dxdy) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        if (!isIn(nx, ny) || isVisited[nx][ny]) continue;
        if (garden[nx][ny] === "#") continue;

        isVisited[nx][ny] = true;
        queue.push([nx, ny]);

        if (garden[nx][ny] === "v") count[1]++;
        else if (garden[nx][ny] === "o") count[0]++;
      }
    }

    // 0 : 양 1 : 늑대
    if (count[0] !== 0 && count[1] !== 0) {
      if (count[0] <= count[1]) sheep -= count[0];
      else wolf -= count[1];
    }
  };

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (garden[x][y] === "." || garden[x][y] === "#" || isVisited[x][y])
        continue;
      bfs(x, y);
    }
  }

  return sheep + " " + wolf;
};

const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === parseInt(input[0].split(" ")[0]) + 1) {
    console.log(solution(input));
  }
});
