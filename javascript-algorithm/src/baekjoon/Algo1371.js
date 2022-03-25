const solution = (textList) => {
  let answer = "";
  let alphabetMap = new Map();

  const length = textList.length;
  let i = 0;
  while (i < length) {
    textList[i]
      .replaceAll(" ", "")
      .split("")
      .sort()
      .map((alphabet) =>
        alphabetMap.get(alphabet) !== undefined
          ? alphabetMap.set(alphabet, alphabetMap.get(alphabet) + 1)
          : alphabetMap.set(alphabet, 1)
      );
    i++;
  }

  let maxValue = -1;
  alphabetMap.forEach((v, k) => {
    if (maxValue < v) {
      maxValue = v;
      answer = k;
    } else if (maxValue === v) {
      answer += k;
    }
  });

  return answer;
};

const input = require("fs")
  .readFileSync("../../src/testFiles/baekjoon1371.txt")
  .toString()
  .split("");

console.log(solution(input));
