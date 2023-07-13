/* 
[PGS] 132267_콜라문제_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/132267
*/

function solution(a, b, n) {
  let answer = 0;
  let receivedCokes = Math.floor(n / a) * b;
  let remain = Math.floor(n % a);

  while (a < n + 1) {
    answer += receivedCokes;
    n = receivedCokes + remain;
    receivedCokes = Math.floor(n / a) * b;
    remain = Math.floor(n % a);
  }

  return answer;
}
