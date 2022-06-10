/**
 * 백준 알고리즘 11719 그대로 출력하기2
 * 브론즈 2
 * 구현 문자열
 * **/
//  const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs")
  .readFileSync("../testFiles/baekjoon11719.txt")
  .toString()
  .split("\n");
console.log(input.join("\n"));
