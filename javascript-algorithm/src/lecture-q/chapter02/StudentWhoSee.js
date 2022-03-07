/* 보이는 학생  - 자신의 앞에 있는 학생이 키가 더 작다면 조건 성립*/
const solution = (arr) => {
  let answer = 0;

  let maxHeight = Number.MIN_SAFE_INTEGER;

  for (let height of arr) {
    if (height > maxHeight) {
      maxHeight = height;
      answer++;
    }
  }

  return answer;
};

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
