/**
 * 이진 탐색 알고리즘 구현해보기
 * → 정렬된 리스트를 반으로 나누어 탐색하는 방식
 * → 시간 복잡도 : O(logN)
 */

const numArr = [2, 4, 5, 6, 7, 8, 9, 1];

const solution = (arr, n) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  arr.sort((a, b) => a - b);

  while (start <= end) {
    if (arr[mid] === n) return mid;
    arr[mid] > n ? (end = mid - 1) : (start = mid + 1);
    mid = Math.floor((start + end) / 2);
  }
  return -1;
};

console.log(solution(numArr, 2));
