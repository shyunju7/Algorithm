/**
 * 백준 알고리즘 11654 아스키코드
 * 브론즈 5
 * 구현
 * **/

const readline = require("readline");
const solution = (line) => {
  let answer = 0;
  const dialog = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
  };

  for (let i = 0; i < line.length; i++) {
    for (let [k, v] of Object.entries(dialog)) {
      if (v.includes(line[i])) {
        answer += Number(k);
      }
    }
    answer += 1;
  }
  return answer;
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
