/* 
[BOJ] 16562_친구비_골드4
https://www.acmicpc.net/problem/16562
*/
const solution = (input) => {
  const [[N, M, K], moneyTable, ...rest] = input.map((line) =>
    line.split(" ").map(Number)
  );

  const dfs = (currentFriend, need) => {
    let money = need;
    for (let friend of relationship[currentFriend]) {
      if (isAlreadyFriend[friend]) continue;
      isAlreadyFriend[friend] = true;
      money = dfs(friend, Math.min(money, moneyTable[friend - 1]));
    }
    return Math.min(need, money);
  };

  // 친구 여부
  const isAlreadyFriend = Array(N + 1).fill(false);

  // 연결 관계 생성
  const relationship = Array.from({ length: N + 1 }, () => []);
  for (let relation of rest) {
    const [from, to] = relation;
    relationship[from].push(to);
    relationship[to].push(from);
  }

  let result = 0;

  // dfs 탐색
  for (let i = 1; i <= N; i++) {
    if (isAlreadyFriend[i]) continue;
    isAlreadyFriend[i] = true;
    result += dfs(i, moneyTable[i - 1]);
  }
  return result <= K ? result : "Oh no";
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
  if (parseInt(input[0].split(" ")[1]) + 2 == input.length) {
    console.log(solution(input));
    rl.close();
  }
});
