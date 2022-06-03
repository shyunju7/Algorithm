/**
 * 백준 알고리즘 1755 숫자놀이
 * 실버 4
 * 수학 문자열 정렬
 * **/

const readline = require("readline");
const solution = (start, end) => {
  let answer = [];
  let numSet = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  for (let i = start; i <= end; i++) {
    if (i >= 10) {
      answer.push(numSet[Math.floor(i / 10)] + " " + numSet[i % 10]);
    } else {
      answer.push(numSet[i]);
    }
  }
  answer = answer.sort();

  let result = [];
  let values = Object.values(numSet);
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].includes(" ")) {
      let numStr = answer[i].split(" ");
      result.push(
        values.indexOf(numStr[0]).toString() +
          values.indexOf(numStr[1]).toString()
      );
    } else {
      result.push(values.indexOf(answer[i]).toString());
    }
  }

  for (let i = 0; i <= result.length; i += 10) {
    console.log(result.slice(i, i + 10).join(" "));
  }
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let nums = line.split(" ");
  solution(Number(nums[0]), Number(nums[1]));
});
