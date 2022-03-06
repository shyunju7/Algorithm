/* 중복 문자 제거하기 */

const solution = (s) => {
  let answer = "";

  const strArr = s.split("");

  strArr.map((str) => {
    if (!answer.includes(str)) {
      answer += str;
    }
  });

  return answer;
};
console.log(solution("ksekkset"));
