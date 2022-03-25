/**
 * 선택 알고리즘 구현하기
 * → 가장 작은 최소값을 찾고 배열의 맨 앞의 원소와 위치를 변경해주는 방식
 */

const numArr = [12, 44, 5, 26, 71, 18, 9, 15];

const solution = (arr) => {
  let minIndex = -1;
  let temp = -1;
  let minNum = Number.MAX_SAFE_INTEGER;

  // 하나씩 비교후 최소값 찾기
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (minNum > numArr[j]) {
        minNum = numArr[j];
        minIndex = j;
      }
    }

    // swap
    temp = arr[i];
    arr[i] = minNum;
    arr[minIndex] = temp;
    minNum = Number.MAX_SAFE_INTEGER;
  }

  return arr;
};

console.log(solution(numArr));
