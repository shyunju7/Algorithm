const readline = require("readline");
const solution = (n, l, d) => {
  let answer = "";

  let a = l;
  let b = l + 5;
  let time = d;
  // n개의 곡이 앨범에 수록되어 있음
  for (let i = 0; i < n; ) {
    if (a > time) {
      time += d;
    } else {
      if (a <= time && time < b) {
        return time;
      } else {
        a = b + l;
        b = a + 5;
      }
      i++;
    }
  }

  answer = time;
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = line.split(" ");
  console.log(solution(Number(input[0]), Number(input[1]), Number(input[2])));
});
