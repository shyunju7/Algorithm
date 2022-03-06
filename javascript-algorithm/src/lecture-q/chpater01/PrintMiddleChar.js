/* 가운데 문자 출력하기 - 짝수일 경우 가운데 두자리 출력하기 */
const solution = (s) => {
  let answer;
  if (s.length % 2 === 1) {
    answer = s.charAt(s.length / 2);
  } else {
    answer = s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
  }
  return answer;
};
console.log(solution("good"));
