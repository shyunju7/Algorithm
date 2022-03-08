/* 심박수 구하기 */
const readline = require("readline");

const solution = (input) => {
  input = input.map((num) => Number(num));
  let answer = 0;
  let count = 0;
  let current = input[1];

  if (input[1] + input[3] > input[2]) {
    return -1;
  }
  while (input[0] !== count) {
    // 현재 심박수 + 운동후 늘어나는 심박수 <= 최대 심박수
    if (current + input[3] <= input[2]) {
      current += input[3];
      count++;
    } else if (current - input[4] < input[1]) {
      // 현재 심박수 - 휴식시 떨어지는 심박수 < 초기 심박수
      current = input[1];
    } else {
      current -= input[4];
    }
    answer++;
  }
  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line.split(" ")));
});
