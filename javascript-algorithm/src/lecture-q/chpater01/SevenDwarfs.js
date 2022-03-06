/* 진짜 일곱 난쟁이 찾기 - 7명의 난쟁이의 키의 합은 100이다. */
const readline = require("readline");

const solution = (arr) => {
  let answer;

  let sumOfDwarfs = 0;
  arr.map((height) => (sumOfDwarfs += height));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (sumOfDwarfs - (arr[i] + arr[j]) === 100) {
        answer = arr.filter((height) => height !== arr[i] && height !== arr[j]);
      }
    }
  }
  answer.sort((a, b) => a - b);
  answer.map((height) => console.log(height));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length === 9) {
    solution(input);
  }
});

// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));
