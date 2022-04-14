// 내 풀이
function solution1(s) {
  let answer = "";
  const numArr = [
    { text: "zero", num: 0 },
    { text: "one", num: 1 },
    { text: "two", num: 2 },
    { text: "three", num: 3 },
    { text: "four", num: 4 },
    { text: "five", num: 5 },
    { text: "six", num: 6 },
    { text: "seven", num: 7 },
    { text: "eight", num: 8 },
    { text: "nine", num: 9 },
  ];

  while (s.length !== 0) {
    // if. s 길이가 0이 될 때까지
    if (s.length === 0) return answer;

    for (let i = 0; i < numArr.length; i++) {
      if (s.substr(0, numArr[i].text.length).includes(numArr[i].text)) {
        answer += numArr[i].num;
        s = s.substr(numArr[i].text.length);
      } else if (s.substr(0, 1).includes(numArr[i].num)) {
        answer += numArr[i].num;
        s = s.substr(1);
      }
    }
  }

  return Number(answer);
}

// 다른 해결책 1) split과 join을 적절히 활용하자
function solution2(s) {
  let answer = "";
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let nums;
  for (let i = 0; i < numArr.length; i++) {
    nums = s.split(numArr[i]);
    s = nums.join(i);
  }

  return answer;
}

// 다른 해결책 2) replace와 정규식을 활용한 예시
function solution3(s) {
  let answer = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);

  return Number(answer);
}
console.log(solution3("four5three25six7"));
