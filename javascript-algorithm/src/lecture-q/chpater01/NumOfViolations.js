/* 10부제를 위반한 차량의 대수를 구하는 프로그램 */

const solution = (day, arr) => {
  let answer = 0;

  arr.map((num) => {
    if (num % 10 === day) {
      answer++;
    }
  });
  return answer;
};

const arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
