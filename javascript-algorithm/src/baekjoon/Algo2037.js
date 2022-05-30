/**
 * 백준 2037 문자메세지
 * 브론즈 2
 * 구현 문자열
 */
const readline = require("readline");
const solution = (input) => {
  const phone = {
    1: [" "],
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"],
  };
  let answer = 0;
  let time = input[0].split(" ").map((time) => Number(time));
  let setOfStr = input[1].split("");
  let prev = 0;
  for (let k = 0; k < setOfStr.length; k++) {
    for (let i = 1; i <= 9; i++) {
      if (phone[i].find((element) => element === setOfStr[k]) !== undefined) {
        answer += time[0] * (phone[i].indexOf(setOfStr[k]) + 1);
        if (prev === i && setOfStr[k] !== " ") {
          answer += time[1];
        }
        prev = i;
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
  if (input.length == 2) {
    console.log(solution(input));
  }
});
