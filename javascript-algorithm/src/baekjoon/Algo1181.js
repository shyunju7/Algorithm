/**
 * 백준 알고리즘 1181 단어 정렬
 * 실버 5
 * 문자열 정렬
 * **/

const readline = require("readline");

const merge = (left, right) => {
  let result = [];

  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }
  return [...result, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, center)), mergeSort(arr.slice(center)));
};

const solution = (input) => {
  answer = mergeSort(input);
  answer = answer.sort((a, b) => a.length - b.length);
  answer = new Set(answer);
  return [...answer].join("\n");
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) === input.length - 1) {
    input.shift();
    console.log(solution(input));
  }
});
