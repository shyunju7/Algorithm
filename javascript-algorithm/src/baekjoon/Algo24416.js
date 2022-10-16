/**
 * 24416. 알고리즘 수업 - 피보나치 수 1
 * 송현주
 */

const readline = require("readline");

// 40까지 저장
let nums = Array(41).fill(0);

let cnt = 0;
let cntFibonacci = 0;
const fib = (num) => {
  // num이 1이거나 2인 경우
  if (num === 1 || num === 2) {
    cnt++;
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
};

const fibonacci = (num) => {
  nums[1] = 1;
  nums[2] = 1;

  for (let i = 3; i <= num; i++) {
    cntFibonacci++;
    nums[i] = nums[i - 1] + nums[i - 2];
  }
};

// 입력
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (num) => {
  fib(num);
  fibonacci(num);
  console.log(cnt + " " + cntFibonacci);
  rl.close();
});
