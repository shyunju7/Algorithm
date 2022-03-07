/* n과 f를 입력받아 n/f로 나누었을 때 나누어 떨어지는 n의 마지막 두자리 수를 찾아라
n의 마지막 두자리 수는 변경할 수 있다.
*/
const readline = require("readline");

const solution = (n, f) => {
  let answer;

  n = n.slice(0, -2);
  n = n + "00";

  if (parseInt(n) % parseInt(f) !== 0) {
    let share = Math.floor(parseInt(n) / parseInt(f));
    n = String((share + 1) * parseInt(f));
  }
  answer = n.substr(-2, 2);
  console.log(answer);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input[0], input[1]);
  process.exit();
});
