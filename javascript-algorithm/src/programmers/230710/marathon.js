/* 
(7.10) 14:00 - 14:18
[PGS] 42576_완주하지 못한 선수_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/42576
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let idx = 0; idx < participant.length; idx++) {
    if (participant[idx] !== completion[idx]) return participant[idx];
  }
}
