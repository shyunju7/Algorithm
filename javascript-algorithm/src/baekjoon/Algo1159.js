/*
 */
const readline = require("readline");

const solution = (count, playerList) => {
  let answer = "";
  let map = new Map();
  playerList.shift();
  playerList.sort();

  playerList.map((player) => {
    return map.get(player.substr(0, 1)) !== undefined
      ? map.set(player.substr(0, 1), map.get(player.substr(0, 1)) + 1)
      : map.set(player.substr(0, 1), 1);
  });

  map.forEach((v, k) => {
    if (v >= 5) {
      answer += k;
    }
  });

  return answer === "" ? "PREDAJA" : answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(solution(Number(input[0]), input));
  process.exit();
});
