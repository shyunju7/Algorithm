/* 
(7.11) 23:48 - 23:51
[PGS] 131705_삼총사_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/131705
*/

function solution(number) {
  let answer = 0;
  const dfs = (sum, index, cnt) => {
    if (number.length < index) return;
    if (cnt === 3) {
      sum === 0 && answer++;
      return;
    }
    dfs(sum + number[index], index + 1, cnt + 1);
    dfs(sum, index + 1, cnt);
  };

  dfs(0, 0, 0);
  return answer;
}
