/* O/X문제 점수 구하기 - 연속해서 정답일 시, 가산점 */
const solution = (arr) => {
  let answer = 0;
  let count = 0;

  for (let score of arr) {
    if (score === 0) {
      count = 0;
    } else if (score === 1) {
      count++;
      answer += count;
    }
  }
  return answer;
};

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

/** 다른 풀이
 * 
 * let strScore = "";
  arr.map((isCorrect) => (strScore += isCorrect));

  const splittedScore = strScore.split("0");

  for (let score of splittedScore) {
    if (score !== "") {
      for (let i = 1; i <= score.length; i++) {
        answer += i;
      }
    }
  }
 * 
 * **/
