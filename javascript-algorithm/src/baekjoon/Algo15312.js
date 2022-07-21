/**
 * 백준 알고리즘 15312 이름 궁합
 * 실버 5
 * 구현 다이나믹 프로그래밍 문자열
 * **/

const readline = require("readline");
const solution = (input) => {
  let nameSet = [];
  let tmp = [];
  const wordSet = {
    A: 3,
    B: 2,
    C: 1,
    D: 2,
    E: 3,
    F: 3,
    G: 2,
    H: 3,
    I: 3,
    J: 2,
    K: 2,
    L: 1,
    M: 2,
    N: 2,
    O: 1,
    P: 2,
    Q: 2,
    R: 2,
    S: 1,
    T: 2,
    U: 1,
    V: 1,
    W: 1,
    X: 2,
    Y: 2,
    Z: 1,
  };

  for (let i = 0; i < input[0].length; i++) {
    nameSet.push(wordSet[input[0][i]]);
    nameSet.push(wordSet[input[1][i]]);
  }

  let answer = nameSet;
  while (true) {
    if (answer.length === 2) {
      return answer.join("");
    }

    let length = answer.length;
    let sum = 0;
    for (let i = 1; i < length; i++) {
      sum = answer[i] + answer[i - 1];
      if (sum / 10 !== 0) {
        sum = sum % 10;
      }
      tmp.push(sum);
    }
    answer = tmp;
    tmp = [];
  }
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input));
  }
});
