const readline = require("readline");

const solution = (input) => {
  let answer = [];
  let center = -1;

  input.pop();
  for (let k = 0; k < input.length; k++) {
    if (input[k].charAt(0) === "0") {
      input[k] = input[k].replace(/^[0]/gi, "");
    }

    // 홀수인 경우
    center = Math.floor(input[k].length / 2);

    if (center === 0 && input[k] !== "0") {
      answer[k] = "yes";
    }

    if (input[k].length % 2 === 1) {
      for (let i = 1; i <= center; i++) {
        if (input[k].charAt(center - i) !== input[k].charAt(center + i)) {
          answer[k] = "no";
          break;
        } else {
          answer[k] = "yes";
          continue;
        }
      }
      // 짝수인 경우
    } else {
      for (let i = 0; i < center; i++) {
        if (input[k].charAt(center - i - 1) !== input[k].charAt(center + i)) {
          answer[k] = "no";
          break;
        } else {
          answer[k] = "yes";
          continue;
        }
      }
    }
  }

  answer.map((value) => console.log(value));
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);

  if (line === "0") {
    solution(input);
  }
});
