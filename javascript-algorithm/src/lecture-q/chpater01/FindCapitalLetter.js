/* 문자열에 포함된 대문자 갯수 찾기 */
const solution = (s) => {
  let answer = 0;

  const regex = /[A-Z]/g;

  const upperChars = s.match(regex);

  answer = upperChars.length;
  return answer;
};

let str = "KoreaTimeGood";
console.log(solution(str));
