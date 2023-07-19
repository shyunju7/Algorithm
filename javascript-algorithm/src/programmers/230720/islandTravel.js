/* 
[PGS] 154540_무인도 여행_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/154540
*/
function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;
  const dxdy = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const island = maps.map((line) => line.split(""));
  const isVisited = Array.from({ length: N }, () => Array(M).fill(false));
  const isIn = (nx, ny) => 0 <= nx && 0 <= ny && nx < N && ny < M;
  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    isVisited[startX][startY] = true;
    let totalSum = parseInt(island[startX][startY]);
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let dir of dxdy) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        if (!isIn(nx, ny) || isVisited[nx][ny]) continue;
        if (island[nx][ny] === "X") continue;

        totalSum += parseInt(island[nx][ny]);
        isVisited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
    return totalSum;
  };

  // 탐색 시작
  const answer = [];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (island[x][y] === "X" || isVisited[x][y]) continue;
      answer.push(bfs(x, y));
    }
  }

  // 결과
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
