/*
(7.7) 22:00 - 22:04
[PGS] 12928_약수의 합_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/12928
*/

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i !== 0) continue;
    answer += i;
  }
  return answer;
}
