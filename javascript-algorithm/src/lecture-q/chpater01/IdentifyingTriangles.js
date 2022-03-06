/* 삼각형 판별하기 
삼각형 조건 - 가장 긴 변의 길이는 나머지 두 변의 길이의 합보다 작다.
*/

const solution = (a, b, c) => {
  let answer;

  let maxSide = a;
  if (a < b) maxSide = b;
  if (c > maxSide) maxSide = c;

  a + b + c - maxSide > maxSide ? (answer = "Yes") : (answer = "No");

  return answer;
};

console.log(solution(5, 6, 9));
