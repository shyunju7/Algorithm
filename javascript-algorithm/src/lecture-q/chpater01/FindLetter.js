/* 주어진 문자열에 특정 문자가 몇개 포함되어 있는지 찾는 프로그램 */
const solution = (s, t) => {
  let answer = 0;

  const charArr = s.split("");

  charArr.filter((char) => {
    if (char === t) answer++;
  });
  return answer;
};

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
