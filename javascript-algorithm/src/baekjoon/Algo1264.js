const readline = require("readline");
const solution = (input) => {
  let answer = [];

  input.pop(); // 마지막 요소 제거

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].replace(/[aeiou]/gi, "0");
    answer[i] = input[i].split("0").length - 1;
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

  if (line === "#") {
    solution(input);
  }
});
