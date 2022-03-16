const readline = require("readline");
const solution = (bracket) => {
  let answer = 0;

  let brackets = bracket.split("");
  const stack = [];

  // ))()((
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(brackets[i]);
    }
  }

  answer = stack.length;
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
