const readline = require("readline");
const solution = (input) => {
  let answer = "";

  const nums = input.split(" ");

  let num1 = nums[0].split("");
  let num2 = nums[1].split("");

  while (num1.length !== num2.length) {
    if (num1.length > num2.length) num2.unshift("0");
    else if (num2.length > num1.length) num1.unshift("0");
  }

  let tmp = "";
  for (let i = num1.length - 1; i >= 0; i--) {
    if (parseInt(num1[i]) + parseInt(num2[i]) === 2) {
      if (tmp === "1") {
        answer += "1";
        tmp = "1";
      } else {
        answer += "0";
        tmp = "1";
      }
    } else if (parseInt(num1[i]) + parseInt(num2[i]) === 1) {
      if (tmp === "1") {
        answer += "0";
        tmp = "1";
      } else {
        answer += "1";
        tmp = "0";
      }
    } else {
      if (tmp === "1") {
        answer += "1";
      } else {
        answer += "0";
      }
      tmp = "0";
    }

    if (i === 0 && tmp === "1") {
      answer += "1";
    }

    console.log(`${num1[i]} + ${num2[i]} = ${answer} tmp = ${tmp}`);
  }

  answer = answer.split("").reverse().join("");

  while (answer.charAt(0) === "0" && answer.length !== 1) {
    answer = answer.replaceAll(/^["0"]/gi, "");
  }

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
