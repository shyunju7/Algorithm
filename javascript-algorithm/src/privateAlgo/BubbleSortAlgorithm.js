/**
 * 버블 알고리즘 구현하기
 * → 배열에 인접한 두 수를 비교하여 자리를 교환하는 방식
 */

const numArr = [12, 44, 5, 26, 71, 18, 9, 15];

const solution = (arr) => {
  let temp = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(solution(numArr));
