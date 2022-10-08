/**
 * 6550. 부분 문자열
 * https://www.acmicpc.net/problem/6550
 */

const isValidate = (words, str) => {
  let tmp = str;
  for (let word of words) {
    if (tmp.indexOf(word) == -1) {
      return false;
    } else {
      tmp = tmp.substr(tmp.indexOf(word) + 1);
    }
  }
  return true;
};

const solution = (line) => {
  let answer = "";
  const [target, str] = line.split(" ");

  // 부분 문자열이라면
  if (str.includes(target)) {
    return "Yes \n";
  } else {
    // 하나씩 검사
    const words = target.split("");
    return isValidate(words, str) ? "Yes \n" : "No \n";
  }
};

const stdin = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let idx = 0;
  return () => stdin[idx++];
})();

let answer = "";
while ((line = input())) {
  answer += solution(line);
}
console.log(answer.trim());
