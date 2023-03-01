/*
 *  프로그래머스
 *  올바른 괄호
 *  LV2
 */

function solution(s) {
  var cnt = 0;

  for (let char of s) {
    cnt = char === "(" ? cnt + 1 : cnt - 1;

    if (cnt < 0) {
      break;
    }
  }
  return cnt === 0 ? true : false;
}

console.log(solution("(())))"));
