/*
(7.9) 22:50 - 23:21
[PGS] 150370_개인정보 수집 유효기간_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/150370
*/

function solution(today, terms, privacies) {
  const MONTH = 28;
  const answer = [];
  const types = {};
  const [year, month, day] = today.split(".").map((item) => parseInt(item));
  const totalDay = year * 12 * 28 + month * 28 + day;

  const checkExpiration = (joinDate, period) => {
    const [joinYear, joinMonth, joinDay] = joinDate
      .split(".")
      .map((item) => parseInt(item));
    const joinTotal =
      joinYear * 12 * MONTH + joinMonth * MONTH + joinDay + period * MONTH;
    return joinTotal <= totalDay;
  };

  for (let term of terms) {
    const [name, value] = term.split(" ");
    types[name] = parseInt(value);
  }

  for (let idx = 0; idx < privacies.length; idx++) {
    const [joinDate, type] = privacies[idx].split(" ");
    let isExpired = checkExpiration(joinDate, types[type]);
    isExpired && answer.push(idx + 1);
  }
  return answer;
}
