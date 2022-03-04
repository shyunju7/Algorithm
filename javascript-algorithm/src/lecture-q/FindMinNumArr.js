const solution = (arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  answer = arr[0];

  return answer;
};

let arr = [5, 0, 1, 3, 2, 9, 11];
console.log(solution(arr));

/** 풀이 2
 * 
 *  let min = Number.MAX_SAFE_INTEGER;
  arr.map((num) => {
    if (num < min) min = num;
  });
  answer = min;
 * **/
