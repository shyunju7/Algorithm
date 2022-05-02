/**
 * 백준 알고리즘 1592 영식이와 친구들
 * 브론즈 2
 * 구현 시뮬레이션
 * N : 참여 인원, M : 최대로 공을 받은 횟수, L : 몇번째 친구에게 패스
 * **/
const readline = require("readline");
const solution = (line) => {
  let answer = 0; // 공이 교환된 횟수
  let input = line.split(" ").map((item) => Number(item));
  const n = input[0];
  const m = input[1];
  const l = input[2];

  let friends = Array.from({ length: n }, () => 0);
  let curIndex = 0;
  let isDone = false;
  friends[0] = 1;

  while (!isDone) {
    if (friends[curIndex] === m) {
      isDone = true;
    }

    // 홀수
    if (friends[curIndex] % 2 === 1) {
      if (curIndex + l >= friends.length) {
        curIndex = curIndex + l - n;
      } else {
        curIndex += l;
      }
      friends[curIndex] += 1;
    }
    // 짝수
    else {
      if (curIndex - l < 0) {
        curIndex = curIndex === 0 ? n - curIndex - l : n - curIndex;
      } else {
        curIndex -= l;
      }
      friends[curIndex] += 1;
    }
    answer++;
  }

  return answer - 1;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
