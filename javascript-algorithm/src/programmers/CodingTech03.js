function solution(path) {
  const pathArr = path.split("");
  let answer = [];
  let tempArr = [];
  let tmp = pathArr[0];

  let directions = ["W", "N", "E", "S"];

  // 같은 문자열만큼 나누어 배열에 저장
  for (let i = 1; i <= pathArr.length; i++) {
    if (pathArr[i] === pathArr[i - 1]) {
      tmp += pathArr[i];
    } else {
      tempArr.push(tmp);
      tmp = pathArr[i];
    }
  }

  let direction;
  for (let i = 1; i <= tempArr.length; i++) {
    if (
      directions.indexOf(tempArr[i - 1].substr(0, 1)) <
      directions.indexOf(tempArr[i])
    ) {
      direction = "right";
    } else {
      direction = "left";
    }

    if (tempArr[i - 1].length <= 5) {
      answer.push(
        `Time ${i - 1}: Go straight ${
          tempArr[i - 1].length * 100
        }m and turn ${direction}`
      );
    }
  }

  return answer;
}

console.log(solution("EEESEEEEEENNNN"));
const result = [
  "Time 0: Go straight 300m and turn right",
  "Time 3: Go straight 100m and turn left",
  "Time 5: Go straight 500m and turn left",
];
