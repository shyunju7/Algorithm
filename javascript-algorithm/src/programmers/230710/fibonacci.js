/* 
(7.10) 11:41 - 11:45
[PGS] 12945_피보나치 수_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/12945
*/
function solution(n) {
  const fibo = Array(n).fill(0);
  fibo[1] = 1;
  fibo[2] = 1;

  for (let i = 3; i <= n; i++) {
    fibo[i] = (fibo[i - 2] + fibo[i - 1]) % 1234567;
  }
  return fibo[n];
}
