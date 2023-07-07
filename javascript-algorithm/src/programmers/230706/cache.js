/* 
(7.6) 16:50 - 17: 19
[PGS] 17680_캐시_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/17680
*/

function solution(cacheSize, cities) {
  const HIT = 1,
    MISS = 5;
  let answer = 0;
  const program = Array(cacheSize);

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (let i = 0; i < cities.length; i++) {
    let currentCity = cities[i].toLowerCase();
    let cityIndex = program.findIndex((item) => item === currentCity);

    if (cityIndex !== -1) {
      answer += HIT;
      program.splice(cityIndex, 1);
    } else {
      answer += MISS;
    }

    program.length === cacheSize && program.pop();
    program.unshift(currentCity);
  }
  return answer;
}
