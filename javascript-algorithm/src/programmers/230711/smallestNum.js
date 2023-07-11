/* 
(7.11) 23:55 - 24:00
[PGS] 12935_제일 작은 수 제거하기_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/12935
*/

function solution(arr) {
  let minNum = Math.min(...arr);
  arr.splice(arr.indexOf(minNum), 1);
  return !arr.length ? [-1] : arr;
}
