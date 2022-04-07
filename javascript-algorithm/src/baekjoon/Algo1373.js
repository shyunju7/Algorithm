/** 2진수를 8진수로 출력하는 프로그램
 * 메모리 초과 - 2진수 -> 10진수 -> 8진수
 * 시간 초과 - 해결하기..
 * **/
const readline = require("readline");

const solution = (num) => {
  let answer = "";
  let arr = [];

  while (num.length % 3 !== 0) {
    num = "0" + num;
  }

  let length = num.length;

  for (let i = 0; i < length; ) {
    arr.push(num.substr(i, 3));
    i += 3;
  }

  let tmp;
  while (arr.length !== 0) {
    tmp = arr.shift().split("");
    let value = 0;
    let size = 2;

    for (let i = 0; i < 3; i++) {
      if (tmp[i] === "1") {
        size === 0 ? (value += 1) : (value += size * 2);
      }
      size--;
    }
    answer += value;
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
