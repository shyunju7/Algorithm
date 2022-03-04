// 1-1. 정렬 없이 최소값 구하기

const solution = (a, b, c) => {
  let answer = a;

  if (a > b) answer = b;
  if (c < answer) answer = c;

  return answer;
};

console.log(solution(9, 2, 0));

/**  풀이 1 
 * 
 *   if (a > b) {
      if (b > c) {
        answer = c;
      } else {
        answer = b;
      }
    } else if (a < b) {
      if (a > c) {
        answer = c;
      }
    }
 * 
 * **/

/** 풀이 2
 *
 * a > b
    ? b > c
      ? (answer = c)
      : (answer = b)
    : a > c
    ? (answer = c)
    : (answer = a);
 *  **/
