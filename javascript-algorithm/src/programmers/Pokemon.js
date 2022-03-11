function solution(nums) {
  var answer = 0;

  let tmp = new Set(nums);
  answer = tmp.size;
  if (answer > nums.length / 2) {
    return nums.length / 2;
  }
  return answer;
}

console.log(solution([3, 1, 2, 3]));
