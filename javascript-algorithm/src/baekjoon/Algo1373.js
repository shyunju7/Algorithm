/** 2진수를 8진수로 출력하는 프로그램
 * 메모리 초과 - 2진수 -> 10진수 -> 8진수
 * 시간 초과 - 해결하기 -> 해결!!
 * **/
const readline = require("readline");

const solution = (num) => {
  let answer = "";

  while (num.length % 3 !== 0) {
    num = "0" + num;
  }

  let length = num.length;

  for (let i = 0; i < length; ) {
    answer += parseInt(num.substr(i, 3), 2).toString(8);
    i += 3;
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
