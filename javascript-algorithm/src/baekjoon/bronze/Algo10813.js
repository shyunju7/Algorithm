/*
[BOJ] 10813_공바꾸기_브론즈2(시뮬레이션)
https://www.acmicpc.net/problem/10813
*/
const [[N, _], ...orders] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const basket = [];
const swapBall = (from, to) => {
  let tmp = basket[from];
  basket[from] = basket[to];
  basket[to] = tmp;
};

for (let num = 0; num <= N; num++) basket.push(num);
for (let order of orders) {
  const [from, to] = order;
  if (from === to) continue;
  swapBall(from, to);
}
console.log(basket.splice(1).join(" ").trimEnd());
