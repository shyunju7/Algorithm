/**
 * 백준 3447 버그왕
 * 브론즈 1
 * 문자열 파싱
 * 미해결
 */

// ../../src/testFiles/baekjoon1371.txt
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const solution = (input) => {
  const regExp = new RegExp("BUG", "gi");
  let answer = "";

  for (let line of input) {
    while (line.includes("BUG") != false) {
      line = line.replace(regExp, "");
    }
    answer += line + "\n";
  }

  return answer;
};
console.log(solution(input));
