/* 
(7.6) 16:00 - 16: 49
[PGS] 87390_n^2 배열 자르기_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/87390
*/

function solution(n, left, right) {
  const answer = [];
  const [startX, startY] = [Math.floor(left / n), left % n];
  const [endX, endY] = [Math.floor(right / n), right % n];
  const isInValidRange = (i, j) =>
    (i === startX && j < startY) || (i === endX && j > endY);

  for (let i = startX; i <= endX; i++) {
    for (let j = 0; j < n; j++) {
      if (isInValidRange(i, j)) continue;
      answer.push(Math.max(i, j) + 1);
    }
  }
  return answer;
}
