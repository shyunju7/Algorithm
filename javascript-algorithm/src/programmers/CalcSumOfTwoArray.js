/** 길이가 같은 두 배열의 내적 구하기 */
function solution(a, b) {
  var answer = 0;

  //answer = a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

console.log(solution([-1, 0, 1], [1, 0, -1]));
