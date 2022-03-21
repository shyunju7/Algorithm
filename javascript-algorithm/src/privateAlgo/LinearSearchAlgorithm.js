/**
 * 선형 탐색 알고리즘 구현해보기
 * → 탐색할 리스트의 맨 앞 요소부터 순서대로 확인해나가는 방식
 * → 시간 복잡도 : O(n)
 */

const bestArr = [2, 4, 5, 6, 7, 8, 9, 1];
const worstArr = [3, 4, 7, 1, 5, 6, 2, 8];

const solution = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }

  return -1;
};

console.log(solution(bestArr, 8));
