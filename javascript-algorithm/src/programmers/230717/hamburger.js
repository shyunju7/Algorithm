/* 
[BOJ] 133502_햄버거 만들기_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/133502
*/
// 풀이 0 - replace()/indexOf() => 시간초과
// 풀이 1
function solution(ingredients) {
  let answer = 0;
  const hamburgers = [];
  const recipe = [1, 2, 3, 1];
  const isCorrect = (length) =>
    hamburgers[length - 0] === recipe[3] &&
    hamburgers[length - 1] === recipe[2] &&
    hamburgers[length - 2] === recipe[1] &&
    hamburgers[length - 3] === recipe[0];

  for (let i = 0; i < ingredients.length; i++) {
    hamburgers.push(ingredients[i]);
    if (isCorrect(hamburgers.length - 1)) {
      hamburgers.splice(-4);
      answer++;
    }
  }
  return answer;
}

// 풀이 2
// function solution(ingredients) {
//   let answer = 0;
//   const hamburgers = [];
//   const recipe = [1, 2, 3, 1];
//   let idx = 0;
// const isCorrect = (length) =>
//   hamburgers[length - 0] === recipe[3] &&
//   hamburgers[length - 1] === recipe[2] &&
//   hamburgers[length - 2] === recipe[1] &&
//   hamburgers[length - 3] === recipe[0];

//   while (idx < ingredients.length) {
//     hamburgers.push(ingredients[idx++]);
//     let length = hamburgers.length - 1;
//     if (isCorrect(length)) {
//       for (let i = 0; i < 4; i++) {
//         hamburgers.pop();
//       }
//       answer++;
//     }
//   }
//   return answer;
// }

console.log(solution([2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 1, 3, 1]));
