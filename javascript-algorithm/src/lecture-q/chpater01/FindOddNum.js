/* 홀수들의 합과 가장 작은 홀수의 값을 출력하는 프로그램 */
/* answer[0] = 홀수들의 합
   answer[1] = 가장 작은 홀수
*/
const solution = (arr) => {
  let answer = [];

  let oddNumbers = arr.filter((num) => num % 2 === 1);

  let sum = 0;
  let minNum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < oddNumbers.length; i++) {
    if (oddNumbers[i] < minNum) {
      minNum = oddNumbers[i];
    }
    sum += oddNumbers[i];
  }
  answer[0] = sum;
  answer[1] = minNum;
  return answer;
};

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
