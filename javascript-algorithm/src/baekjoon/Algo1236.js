const readline = require("readline");
const solution = (size, input) => {
  let answer;
  input.shift();

  const row = parseInt(size.charAt(0));
  const column = parseInt(size.charAt(size.length - 1));
  let rows = [];
  let columns = [];

  for (let i = 0; i < row; i++) {
    if (!input[i].includes("X")) {
      rows.push(i);
    }
    input[i] = input[i].split("");
  }

  let count = 0;
  for (let i = 0; i < column; i++) {
    count = 0;
    for (let j = 0; j < row; j++) {
      if (input[j][i] === ".") {
        count++;
      } else {
        break;
      }
    }

    if (count === row) {
      columns.push(i);
    }
  }

  if (rows.length > columns.length) {
    answer = columns.length + rows.length - columns.length;
  } else {
    answer = columns.length + rows.length - rows.length;
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(solution(input[0], input));
  process.exit();
});
