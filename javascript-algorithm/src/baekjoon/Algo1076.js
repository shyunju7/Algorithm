/* 전자제품 저항 문제 해결 */
const readline = require("readline");

const solution = (colors) => {
  let answer = "";

  const colorArr = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  // 다른 풀이
  // answer = colorArr.indexOf(colors[0]) + "" + colorArr.indexOf(colors[1]);
  // answer = parseInt(answer) * Math.pow(10, colorArr.indexOf(colors[2]));

  for (let i = 0; i < colors.length; i++) {
    if (i === colors.length - 1) {
      answer = parseInt(answer) * Math.pow(10, colorArr.indexOf(colors[i]));
    } else {
      answer += colorArr.indexOf(colors[i]) + "";
    }
  }

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);

  if (input.length === 3) {
    console.log(solution(input));
  }
});
