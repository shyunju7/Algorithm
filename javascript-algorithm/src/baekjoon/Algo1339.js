/* 
[BOJ] 1339_단어 수학_골드4
https://www.acmicpc.net/problem/1339
*/
const solution = (input) => {
  let answer = 0;
  const digit = {};
  input.sort((a, b) => b.length - a.length);
  let num = 9;

  // 자릿수별 저장
  for (let word of input) {
    const length = word.length;
    for (let i = 0; i < length; i++) {
      if (!digit[word[i]]) {
        digit[word[i]] = Math.pow(10, length - (i + 1));
      } else {
        digit[word[i]] += Math.pow(10, length - (i + 1));
      }
    }
  }

  // 자릿수 정렬
  const sortedDigit = Object.fromEntries(
    Object.entries(digit).sort(([, a], [, b]) => b - a)
  );

  // 값 설정
  const alphabets = {};
  for (const [k] of Object.keys(sortedDigit)) {
    alphabets[k] = num--;
  }

  // 값 구하기
  for (let word of input) {
    let tmp = "";
    for (let i = 0; i < word.length; i++) {
      tmp += alphabets[word[i]];
    }
    answer += parseInt(tmp);
  }
  return answer;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) === input.length - 1) {
    input.shift();
    console.log(solution(input));
  }
});
