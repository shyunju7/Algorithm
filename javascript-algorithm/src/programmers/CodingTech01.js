function solution(tString, variables) {
  let answer = tString;
  let isChanged = false;

  while (!isChanged) {
    for (let i = 0; i < variables.length; i++) {
      if (answer.includes(variables[i][0])) {
        // answer = answer.replaceAll(`{${variables[i][0]}}`, variables[i][1]);
        // answer = answer.replace(/{${variables[i][0]}}/g, variables[i][1]);
        const regex = new RegExp(`{${variables[i][0]}}`, `g`);
        answer = answer.replace(regex, variables[i][1]);
      }
      if (!answer.includes("{") || answer.includes(variables[i][0])) {
        isChanged = true;
      }
    }
  }

  return answer;
}

console.log(
  solution("this is {template} {template} is {state}", [
    ["template", "{state}"],
    ["state", "{templates}"],
  ])
);

// console.log(
//   solution("{a} {b} {c} {d} {i}", [
//     ["b", "{c}"],
//     ["a", "{b}"],
//     ["e", "{f}"],
//     ["h", "i"],
//     ["d", "{e}"],
//     ["f", "{d}"],
//     ["c", "d"],
//   ])
// );
