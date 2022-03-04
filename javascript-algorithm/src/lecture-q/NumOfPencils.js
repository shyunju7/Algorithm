/* N명에 학생에게 연필 1자루씩 나누어 줄 때, 필요한 연필의 다스 수를 계산하는 프로그램 */

const solution = (n) => {
  let answer = Math.ceil(n / 12);
  return answer;
};

console.log(solution(24));

/**
 * Math.ceil : 올림
 * Math.floor : 내림
 * Math.round : 반올림
 *  **/
