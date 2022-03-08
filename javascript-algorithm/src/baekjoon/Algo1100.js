/* 하얀칸 위에 남은 말이 몇 개인지 구하는 프로그램 */
const readline = require("readline");

const solution = (input) => {
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 1) {
      for (let j = 1; j < 8; ) {
        if (input[i].charAt(j) === "F") {
          answer++;
        }
        j += 2;
      }
    } else {
      for (let j = 0; j < 8; ) {
        if (input[i].charAt(j) === "F") {
          answer++;
        }
        j += 2;
      }
    }
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);

  if (input.length === 8) {
    console.log(solution(input));
  }
});
