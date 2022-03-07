/* 보이는 학생 */
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
