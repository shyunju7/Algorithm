/* 주어진 문자열을 대문자는 소문자로, 소문자는 대문자로 변환하기 */
function solution(s) {
  let answer = "";

  const strArr = s.split("");

  strArr.map((char) => {
    if (char === char.toUpperCase()) {
      answer += char.toLowerCase();
    } else {
      answer += char.toUpperCase();
    }
  });

  return answer;
}

console.log(solution("StuDY"));
