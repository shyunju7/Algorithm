/* 
[BOJ] 1092_배_골드5
https://www.acmicpc.net/problem/1092
*/
const solution = (N, cranes, M, boxes) => {
  // 내림차순 정렬
  cranes.sort((a, b) => b - a);
  boxes.sort((a, b) => b - a);

  // 가장 큰 무게를 옮기는 크레인 < 옮길 박스라면 모든 박스를 옮길 수 없으므로 -1 리턴
  if (cranes[0] < boxes[0]) return -1;

  const workedCnt = new Array(N).fill(ㄴ0);

  let workingTime = 0;
  // 옮길 박스가 없을 때까지 반복
  while (boxes.length > 0) {
    for (let crane of cranes) {
      for (let idx = 0; idx < boxes.length; idx++) {
        if (crane < boxes[idx]) continue;
        boxes.splice(idx, 1);
        break;
      }
    }
    workingTime++;
  }
  return workedCnt[0];
};

const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 4) {
    const [[N], cranes, [M], boxes] = input.map((line) =>
      line.split(" ").map(Number)
    );
    console.log(solution(N, cranes, M, boxes));
    rl.close();
  }
});

// let craneIdx = 0;
// for (let idx = 0; idx < M; idx++) {
//   // 현재 크레인이 옮길 수 없는 무게라면 다시 가장 큰 무게를 옮길 수 있는 크레인으로 옮긴다.
//   if (cranes[craneIdx] < boxes[idx]) {
//     craneIdx = 0;
//   } else {
//     // 현재 크레인이 해당 무게를 옮길 수 있다면
//     if (N <= craneIdx) craneIdx = 0;
//     workedCnt[craneIdx]++; // 현재 크레인의 작업량 추가
//     craneIdx++; // 다음 크레인으로 이동
//     idx++; // 다음 박스 옮기기
//   }
// }
