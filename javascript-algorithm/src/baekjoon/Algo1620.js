/**
 * 백준 알고리즘 1620 나는야 포켓몬 마스터 이다솜
 * 실버 4
 * 자료 구조 해시를 사용한 집합
 * **/

const readline = require("readline");
const solution = (input) => {
  let answer = [];
  let [n] = input[0].split(" ").map((num) => Number(num));
  let pokemonList = input.slice(1, n + 1);
  let quizList = input.slice(n + 1);
  let pokemonBook = new Map();
  for (let i = 0; i < n; i++) {
    pokemonBook.set(pokemonList[i], i + 1);
  }

  for (let quiz of quizList) {
    /\d/.test(quiz)
      ? answer.push(pokemonList[Number(quiz) - 1])
      : answer.push(pokemonBook.get(quiz));
  }

  return answer.join("\n");
};
let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (
    Number(input[0].split(" ")[0]) + Number(input[0].split(" ")[1]) ===
    input.length - 1
  ) {
    console.log(solution(input));
  }
});
