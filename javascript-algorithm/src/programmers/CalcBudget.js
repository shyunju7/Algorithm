/** 많은 부서에게 줄 수 있는 예산 구하기 */
function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    console.log(`${sum} + ${d[i]} < ${budget}`);
    if (sum + d[i] < budget) {
      sum += d[i];
      answer++;
    } else if (sum + d[i] === budget) {
      answer++;
      break;
    }
  }

  return answer;
}

console.log(solution([3, 2, 2, 3], 10));
