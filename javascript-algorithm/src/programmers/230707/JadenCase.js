/* 
(7.7) 17:30 - 17:40 
[PGS] 12951_JadenCase 문자열 만들기_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/12951
*/
function solution(s) {
  let words = s.split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");
}
