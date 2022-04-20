/* 24 */
const readline = require("readline");

const solution = (current, start) => {
  let answer;
  let curDate = new Date("2008-03-03");

  curDate.setSeconds(handleTimeToNum(start) - handleTimeToNum(current));
  answer = curDate.toISOString().substr(11, 8);

  return answer;
};

const handleTimeToNum = (time) => {
  let splittedTime = time.split(":");

  return (
    Number(splittedTime[0]) * 60 * 60 +
    Number(splittedTime[1]) * 60 +
    Number(splittedTime[2])
  );
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input[0], input[1]));
  }
});
