/*
 * N : 총 N 개의 수
 * R : 뽑을 수의 개수
 * answer : 뽑은 수를 저장
 * combination : 조합 함수
 */

let N = 4;
let R = 2;
let answer = [];

// 조합
const combination = (start, cnt) => {
  // 총 R개의 수를 뽑았을 때,
  if (cnt == R) {
    console.log(answer);
    return;
  }

  // 시작 위치부터 N까지 추출
  for (let i = start; i <= N; i++) {
    // 뽑은 수 저장
    answer[cnt] = i;

    // 다음 수 뽑으로 가기
    combination(i + 1, cnt + 1);
  }
};

// 조합
combination(1, 0);
