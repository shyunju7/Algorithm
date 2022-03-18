const readline = require("readline");

// o=적정체중, w=실제체중, act=[활동목록]
const solution = (input) => {
  let answer = [];
  let weights = [];
  let act = [];
  let scenCount = 1;
  let isDead = false;

  input.pop();
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "# 0") {
      if (isDead) {
        answer.push(`${scenCount} RIP`);
      } else {
        weights[1] > weights[0] / 2 && weights[1] < weights[0] * 2
          ? answer.push(`${scenCount} :-)`)
          : answer.push(`${scenCount} :-(`);
      }
      scenCount++;
      isDead = false;
    } else if (i === 0 || input[i - 1] === "# 0") {
      weights = input[i].split(" ");
      weights[0] = parseInt(weights[0]);
      weights[1] = parseInt(weights[1]);
    } else {
      act = input[i].split(" ");
      if (act[0] === "F") {
        weights[1] += parseInt(act[1]);
      } else {
        weights[1] -= parseInt(act[1]);
        if (weights[1] <= 0) {
          isDead = true;
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

  if (line === "0 0") {
    solution(input);
  }
});
