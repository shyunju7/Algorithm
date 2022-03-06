/* 입력받은 문자열에 A를 #으로 변경하기 */
const solution = (s) => {
  let answer = s.replaceAll("A", "#");
  return answer;
};

let str = "BANANA";
console.log(solution(str));
