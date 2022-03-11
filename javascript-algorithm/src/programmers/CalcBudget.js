/** 많은 부서에게 줄 수 있는 예산 구하기 */
function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);

  let sumOfArr = d.reduce((a, b) => a + b, 0);

  for (let i = d.length; i > 0; i--) {
    if (sumOfArr - i >= budget) {
      sumOfArr -= i;
    } else {
      answer++;
    }
  }

  return answer;
}

console.log(solution([2, 2, 3, 3], 10));
