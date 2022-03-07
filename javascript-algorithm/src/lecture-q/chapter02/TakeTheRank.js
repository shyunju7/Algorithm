/* 학생들의 국어 점수 순위 구하기  - 같을 경우, 동일 등수 출력 */
const solution = (arr) => {
  let answer = Array.from(arr.length);

  const copyArr = arr.slice(); //원본
  arr.sort((a, b) => b - a);

  copyArr.map((score, index) => {
    return (answer[index] = arr.indexOf(score) + 1);
  });

  return answer;
};

let arr = [87, 83, 12, 100, 17];
console.log(solution(arr));
