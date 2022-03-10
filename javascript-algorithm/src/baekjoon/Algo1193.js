/** 주어진 문자열에서 가장 많이 사용된 알파벳을 대문자로 출력하는 프로그램 - 단 여러개일 경우 ? 출력*/
const readline = require("readline");

const solution = (num) => {
  let answer = "";

  let a = 1; // 분자
  let b = 1; // 분모

  let count = 1;
  let tmp = 0;
  // 찾는 위치와 count가 같을 때까지 실행

  let isFind = false;
  while (isFind === false) {
    if ((a + b) % 2 === 1) {
      a = 1;
      b = a + b - 1;
      tmp = b;
      for (let i = b; i > 0; i--) {
        if (count === num) {
          answer = a + "/" + b;
          isFind = true;
          break;
        }
        count++;
        a += 1;
        b -= 1;
      }
      a = tmp + 1;
      b = b === 0 ? 1 : b;
    } else {
      a = a + b - 1;
      b = 1;
      tmp = a;
      for (let i = a; i > 0; i--) {
        if (count === num) {
          answer = a + "/" + b;
          isFind = true;
          break;
        }
        count++;
        a -= 1;
        b += 1;
      }
      b = tmp + 1;
      a = a === 0 ? 1 : a;
    }
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(Number(line)));
});
