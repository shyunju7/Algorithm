/* 
(7.6) 17:20 - 17: 41
[PGS] 42578_의상_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/42578
*/

function solution(clothes) {
  let answer = 1;
  const map = new Map();

  for (let item of clothes) {
    const [name, type] = item;

    if (map.get(type) === undefined) {
      map.set(type, [name]);
    } else {
      let tmp = map.get(type);
      map.set(type, [...tmp, name]);
    }
  }

  map.forEach((v, k) => (answer *= v.length + 1));
  return answer - 1;
}
