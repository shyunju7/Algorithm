/* 
(7.6) 17:42 - 18:07
[PGS] 64065_튜플_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/64065
*/

function solution(s) {
  const answer = [];
  const numSet = [];
  const items = s.split(/\{|\}/g);

  for (let i = 0; i < items.length; i += 2) {
    if (items[i] === "" || items[i] === ",") continue;
    const nums = items[i].split(",").map((item) => parseInt(item));
    numSet.push(nums);
  }

  numSet.sort((a, b) => a.length - b.length);

  for (let nums of numSet) {
    for (let num of nums) {
      if (answer.includes(num)) continue;
      answer.push(num);
    }
  }

  return answer;
}
