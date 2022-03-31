/* 정렬 알고리즘 - 콘테스트  */
const readline = require("readline");

const solution = (students) => {
  let wStudents = [];
  let answer = "";
  for (let i = 0; i < 10; i++) {
    wStudents.push(students.shift());
  }
  wStudents.sort((a, b) => b - a);
  students.sort((a, b) => b - a);

  let wScores = 0;
  let kScores = 0;

  for (let i = 0; i < 3; i++) {
    wScores += wStudents[i];
    kScores += students[i];
  }

  answer = wScores + " " + kScores;
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line));

  if (input.length === 20) {
    console.log(solution(input));
  }
});
