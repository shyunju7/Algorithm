/*
(07.08) 00:05 - 00:12
12909_올바른 괄호_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/12909
*/

function solution(s) {
  let answer = 0;
  const brackets = s.split("");

  if (brackets[0] === ")" || brackets[brackets.length - 1] === "(")
    return false;

  for (let bracket of brackets) {
    answer += bracket === "(" ? 1 : -1;
    if (answer < 0) return false;
  }

  return !answer ? true : false;
}
