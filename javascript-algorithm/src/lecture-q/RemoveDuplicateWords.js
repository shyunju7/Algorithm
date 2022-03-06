function solution(s, length) {
  let answer = new Set(s);

  return Array.from(answer);
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str, str.length));
