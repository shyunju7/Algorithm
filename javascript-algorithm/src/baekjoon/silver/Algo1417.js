/*
[BOJ] 1417_국회의원 선거_실버5
https://www.acmicpc.net/problem/1417
*/

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
let target = +input[1];
const members = [];
for (let n = 2; n <= N; n++) {
  members.push(+input[n]);
}

members.sort((a, b) => a - b);
let cnt = 0;
while (members[members.length - 1] >= target) {
  let member = members.pop();

  if (target <= member) {
    member -= 1;
    target += 1;
    cnt += 1;
    members.push(member);
    members.sort((a, b) => a - b);
  }
}

console.log(cnt);
