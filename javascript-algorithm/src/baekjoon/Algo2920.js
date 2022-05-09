/**
 * 백준 알고리즘 2920 음계
 * 브론즈 2
 * 구현
 * **/
const readline = require("readline");

const solution = (line) => {
  let scale = line.split(" ").map((num) => Number(num));
  const firstItem = scale[0];

  for (let i = 0; i < scale.length - 1; i++) {
    if (Math.abs(scale[i] - scale[i + 1]) !== 1) {
      return "mixed";
    }
  }

  return firstItem === 1 ? "ascending" : "descending";
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
