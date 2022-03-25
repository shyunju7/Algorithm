/**
 * 삽입 알고리즘 구현하기
 * → 정렬되어 있지 않은 부분의 데이터를 뽑아서 정렬된 부분이 적절한 위치에 삽입하는 방법
 */

const numArr = [12, 44, 5, 26, 71, 18, 9, 15];

const solution = (arr) => {
  let index = -1;
  let temp = -1;
  for (let i = 1; i < arr.length; i++) {
    index = i;
    while (arr[index - 1] > arr[index]) {
      temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }

    console.log(arr);
  }
};

console.log(solution(numArr));
