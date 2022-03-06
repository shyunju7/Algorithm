/* 중복 문자 제거하기 */

const solution = (s) => {
  let answer = "";

  const strArr = s.split("");

  strArr.map((str) => {
    if (!answer.includes(str)) {
      return (answer += str);
    } else {
      return -1;
    }
  });

  return answer;
};
console.log(solution("ksekkset"));
