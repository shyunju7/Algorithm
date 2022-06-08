/**
 * 백준 알고리즘 10815 숫자카드
 * 실버 5
 * 정렬
 * **/
const readline = require("readline");

const binarySearch = (sortedArr, target) => {
  let start = 0;
  let end = sortedArr.length;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] === target) {
      return mid;
    }
    sortedArr[mid] < target ? (start = mid + 1) : (end = mid - 1);
  }
  return -1;
};

const solution = (input) => {
  let answer = [];
  let [_n, myCardList, _m, cardList] = input;
  myCardList = myCardList.split(" ").map((num) => Number(num));
  cardList = cardList.split(" ").map((num) => Number(num));
  myCardList.sort((a, b) => a - b);
  for (let targetCard of cardList) {
    binarySearch(myCardList, targetCard) === -1
      ? answer.push(0)
      : answer.push(1);
  }

  return answer.join(" ");
};
let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 4) {
    console.log(solution(input));
  }
});
