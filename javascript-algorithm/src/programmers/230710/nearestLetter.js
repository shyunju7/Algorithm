/* 
(7.10) 11:35 - 11:40
[PGS] 142086_가장 가까운 글자_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/142086
*/

function solution(s) {
  const answer = [];
  const alphabet = {};
  const words = s.split("");

  for (let i = 0; i < words.length; i++) {
    answer.push(alphabet[words[i]] === undefined ? -1 : i - alphabet[words[i]]);
    alphabet[words[i]] = i;
  }

  return answer;
}
