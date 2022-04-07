/** PC방 알바 **/
const readline = require("readline");

const solution = (input) => {
  const length = input[0];
  let guestList = input[1].split(" ");
  guestList = new Set(guestList);
  return parseInt(length) - guestList.size;
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input));
  }
});
