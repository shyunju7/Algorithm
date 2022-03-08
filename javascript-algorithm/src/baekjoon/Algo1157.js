/** 주어진 문자열에서 가장 많이 사용된 알파벳을 대문자로 출력하는 프로그램 - 단 여러개일 경우 ? 출력*/
const readline = require("readline");

const solution = (text) => {
  let answer = "";
  let map = new Map();
  let maxCount = -1;

  text.split("").map((c) => {
    c = c.toUpperCase();
    return map.get(c) !== undefined
      ? map.set(c, map.get(c) + 1)
      : map.set(c, 1);
  });

  map.forEach((v, k) => {
    if (v > maxCount) {
      maxCount = v;
      answer = k;
    } else if (v === maxCount) {
      answer = "?";
    }
  });

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
