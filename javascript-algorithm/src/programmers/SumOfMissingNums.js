/** 0-9 숫자가 들어있는 배열중 없는 숫자의 합을 찾아라 */
function solution(numbers) {
  let answer = 0;

  let sumOfArr = numbers.reduce((a, b) => a + b, 0);

  answer = 45 - sumOfArr;
  return answer;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
