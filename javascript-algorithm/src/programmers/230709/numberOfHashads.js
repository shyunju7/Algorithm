/*
(7.9) 17:10 - 17:17
[PGS] 12947_하샤드 수_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/12947
*/
function solution(x) {
  let nums = x
    .toString()
    .split("")
    .map((num) => parseInt(num));
  const sum = nums.reduce((prev, cur) => prev + cur);
  return x % sum === 0;
}
