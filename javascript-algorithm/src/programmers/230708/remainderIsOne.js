/*
(07.08) 00:01 - 00:04
87389_나머지가 1이 되는 수 찾기_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/87389
*/

function solution(n) {
  for (let num = 2; num < n; num++) {
    if (n % num === 1) return num;
  }
}
