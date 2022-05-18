/**
 * 백준 3447 버그왕
 * 브론즈 1
 * 문자열 파싱
 */

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const solution = (input) => {
  let answer = "";

  for (let line of input) {
    while (line.includes("BUG") != false) {
      line = line.replace(/BUG/g, "");
    }
    answer += line + "\n";
  }

  return answer;
};
console.log(solution(input));
