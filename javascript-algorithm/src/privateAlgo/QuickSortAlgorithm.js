/**
 * 퀵 알고리즘 구현하기
 * → pivot을 설정하여 pivot을 기준으로 작은 값은 왼쪽으로 큰 값은 오른쪽으로 나누어 반복
 */

const quickSort = (nums) => {
  // 배열의 크기가 하나이거나 0개일 때까지
  if (nums.length <= 1) {
    return nums;
  }

  // pivot : 첫번째일 경우
  const pivot = nums[0];
  let left = [];
  let right = [];

  // pivot과 비교하여 왼쪽과 오른쪽으로 나눔
  for (let i = 1; i < nums.length; i++) {
    pivot <= nums[i] ? right.push(nums[i]) : left.push(nums[i]);
  }

  left = quickSort(left);
  right = quickSort(right);

  // 합치기
  return [...left, pivot, ...right];
};
const numArr = [29, 44, 5, 12, 26, 71, 18, 9, 15];
console.log(quickSort(numArr));
