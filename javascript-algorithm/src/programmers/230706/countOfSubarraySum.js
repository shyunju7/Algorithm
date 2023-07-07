/* 
(7.6) 15:30 - 15:59
[PGS] 131701_연속 부분 수열 합의 개수_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/131701
*/

function solution(elements) {
  const n = elements.length;
  const answer = [];

  for (let count = 1; count <= n; count++) {
    for (let index = 0; index < n; index++) {
      let sliced = elements.slice(index, index + count);

      if (sliced.length < count) {
        sliced = [...sliced, ...elements.slice(0, count - sliced.length)];
      }
      answer.push(sliced.reduce((prev, acc) => prev + acc));
    }
  }
  return new Set(answer).size;
}
