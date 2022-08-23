/*
 * N : 총 N 개의 수
 * R : 뽑을 수의 개수
 * isSelected : 선택 여부 저장
 * answer : 뽑은 수를 저장
 * permutation : 순열 함수
 */

let N = 4;
let R = 2;
let isSelected = Array(N + 1).fill(false);
let answer = [];

// 순열
const permutation = (cnt) => {
  // cnt가 R개일 때
  if (cnt == R) {
    console.log(answer);
    return;
  }

  for (let i = 1; i <= N; i++) {
    // 이미 선택됐다면, 다음으로
    if (isSelected[i]) continue;

    // 선택이 안된 수라면 다시 선택
    isSelected[i] = true;

    // 선택된 수 저장
    answer[cnt] = i;

    // 다음 수 뽑으러 가기
    permutation(cnt + 1);

    // 선택된 수 다시 돌리기
    isSelected[i] = false;
  }
};

// 수열 함수 실행
permutation(0);
