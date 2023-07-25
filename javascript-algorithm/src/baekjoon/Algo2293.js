// 동전
const solution = (input) => {
  const [[N, K], ...coins] = input.map((line) => line.split(" ").map(Number));
  const dp = new Array(K + 1).fill(0); // dp[i]는 i원을 만들 수 있는 경우의 수 저장

  dp[0] = 1;

  for (let coin of coins) {
    for (let money = coin; money <= K; money++) {
      // 코인보다 목표금액이 크면
      if (coin <= money) {
        dp[money] += dp[money - coin];
      }
    }
  }

  return dp[K];
};

const input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === parseInt(input[0].split(" ")[0]) + 1) {
    console.log(solution(input));
    rl.close();
  }
});
