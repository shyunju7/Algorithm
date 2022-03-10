/* 이상한 곱셈 */
const readline = require("readline");

const solution = (input) => {
  let answer = 0;
  let arr1 = input[0].split("");
  let arr2 = input[1].split("");

  let sum1 = 0;
  let sum2 = 0;

  arr1.map((num) => (sum1 += parseInt(num)));
  arr2.map((num) => (sum2 += parseInt(num)));

  answer = sum1 * sum2;

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line.split(" ")));
});

/** 다른 풀이
 *  for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        answer += parseInt(arr1[i]) * parseInt(arr2[j]);
      }
    }
 * 
 * */
