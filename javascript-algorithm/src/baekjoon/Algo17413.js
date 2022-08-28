/**
 * 백준 알고리즘 17413 단어 뒤집기 2
 * 실버 3
 * 문자열 정렬 파싱
 * **/
const readline = require("readline");

const solution = (line) => {
  let answer = line;
  const regExp = /<[a-z\s]{1,}>|[a-z0-9]{1,}/g;

  answer = answer.replace(regExp, (word) => {
    return word.startsWith("<") ? word : word.split("").reverse().join("");
  });

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
