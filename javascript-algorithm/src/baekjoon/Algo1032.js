/* dir 패턴 구하기 프로그램 */
const readline = require("readline");

const solution = (numOfFiles, files) => {
  let answer = "";
  files.shift();

  const file = files[0].split("");

  for (let i = 1; i < numOfFiles; i++) {
    for (let j = 0; j < file.length; j++) {
      if (file[j] !== files[i].charAt(j)) {
        file[j] = "?";
      }
    }
  }

  for (let item of file) {
    answer += item;
  }
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
  solution(input[0], input);
  process.exit();
});
