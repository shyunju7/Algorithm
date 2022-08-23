/*
 * N : 총 N 개의 수
 * numSet : 집합
 * isSelected : 선택 여부 저장
 * subset : 부분 집합 생성 함수
 * print : 출력 함수
 */

let N = 4;
let numSet = [1, 2, 3, 4];
let isSelected = Array(N).fill(false);

// 출력 함수
const print = (selected) => {
  let answer = selected.map((state, index) => (state ? numSet[index] : "X"));
  console.log(answer.join(" "));
};

// 부분집합 생성
const subset = (idx) => {
  // 기저조건
  if (idx == N) {
    print(isSelected);
    return;
  }

  // 선택한 경우
  isSelected[idx] = true;
  subset(idx + 1);

  // 선택하지 않은 경우
  isSelected[idx] = false;
  subset(idx + 1);
};

subset(0);
