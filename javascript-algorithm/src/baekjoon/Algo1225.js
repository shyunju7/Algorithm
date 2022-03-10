/* 이상한 곱셈 */
const readline = require("readline");

const solution = (input) => {
  let answer = 0;
  let arr1 = input[0].split("");
  let arr2 = input[1].split("");

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      answer += parseInt(arr1[i]) * parseInt(arr2[j]);
    }
  }

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line.split(" ")));
});
