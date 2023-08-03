/*
[SOF] 전광판_lv2
https://softeer.ai/practice/info.do?idx=1&eid=624
*/
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];

// 숫자별 필요한 전구 집합
const set = {
  0: "1110111",
  1: "0010010",
  2: "1011101",
  3: "1011011",
  4: "0111010",
  5: "1101011",
  6: "1101111",
  7: "1110010",
  8: "1111111",
  9: "1111011",
  " ": "0000000",
};

const answer = [];
for (let testcase = 1; testcase <= T; testcase++) {
  let [from, to] = input[testcase].split(" ");

  from = " ".repeat(5 - from.length) + from;
  to = " ".repeat(5 - to.length) + to;

  let cnt = 0;

  // 최대 5자리의 숫자를 만들 수 있음
  for (let idx = 0; idx < 5; idx++) {
    // set 요소 하나의 길이만큼 반복 (총 7개의 전구를 켜고 끌 수 있음)
    for (let k = 0; k < 7; k++) {
      if (set[from[idx]][k] !== set[to[idx]][k]) cnt++;
    }
  }
  answer.push(cnt);
}

console.log(answer.join("\n"));
