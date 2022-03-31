/**
 * 합병 알고리즘 구현하기
 * → 리스트의 크기가 하나일 때까지 분할하고, 합병하여 정렬하는 알고리즘
 */

// 나누어둔 배열을 합치기 위한 함수
const merge = (left, right) => {
  let result = [];

  // 배열을 하나씩 제거해서 크기가 0이 될때까지 반복
  while (left.length !== 0 && right.length !== 0) {
    // 하나씩 제거하니까 첫번째 요소만 비교
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }
  return [...result, ...left, ...right];
};

// 배열의 크기가 1이 될 때까지 계속 분할하는 함수
const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, center);
  const rightArr = arr.slice(center);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const numArr = [12, 44, 5, 2, 26, 71, 18, 9, 15];
console.log(mergeSort(numArr));
