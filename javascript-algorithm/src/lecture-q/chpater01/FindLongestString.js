/* 가장 긴 문자열 찾기 */
const solution = (s) => {
  let answer = "";

  let maxLength = -1;
  s.map((str) => {
    if (maxLength < str.split("").length) {
      maxLength = str.split("").length;
      answer = str;
    }
  });
  return answer;
};
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
