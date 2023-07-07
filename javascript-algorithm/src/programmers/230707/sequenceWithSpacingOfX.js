/*
(7.7) 21:50 - 21:54 
[PGS] 12954_x만큼 간격이 있는 n개의 숫자_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/12954
*/

function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
