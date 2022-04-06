/* 바보 도비를 위한 영어 단어 찾기 프로그램 */
const readline = require("readline");

const solution = (input) => {
  input.pop();
  input.map((item) => {
    let word = item.substr(0, 1);
    let text = item.substring(2).toLowerCase();
    console.log(`${word} ${handleCountChar(word, text)}`);
  });
};

const handleCountChar = (word, text) => {
  let count = 0;

  let textArr = text.split("");
  textArr.map((char) => {
    if (char === word) {
      count++;
    }
  });

  return count;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (line === "#") {
    solution(input);
  }
});
