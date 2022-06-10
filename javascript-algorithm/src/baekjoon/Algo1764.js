/**
 * 백준 알고리즘 1765 듣보잡
 * 실버 4
 * 문자열 정렬 파싱
 * 3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton
 * **/

const readline = require("readline");
const solution = (input) => {
  let answer = [];
  const neverSeenAndHearList = new Map();
  input.map((name) => {
    return neverSeenAndHearList.get(name) === undefined
      ? neverSeenAndHearList.set(name, 1)
      : neverSeenAndHearList.set(name, neverSeenAndHearList.get(name) + 1);
  });

  for (let [k, v] of neverSeenAndHearList.entries()) {
    if (v === 2) {
      answer.push(k);
    }
  }
  return answer.length + "\n" + answer.sort().join("\n");
};

let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (
    input.length - 1 ===
    Number(input[0].split(" ")[0]) + Number(input[0].split(" ")[1])
  ) {
    console.log(solution(input));
  }
});
