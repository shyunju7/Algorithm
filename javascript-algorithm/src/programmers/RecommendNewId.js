/** 신규 아이디 추천  */
function solution(newId) {
  let answer = newId.toLowerCase();

  answer = answer.replace(/[^a-z0-9-_.]/gi, "");
  answer = answer.replace(/[.]{2,}/g, ".");

  answer = answer.replace(/^[.]|[.]$/g, "");

  if (answer.length > 15) {
    answer = answer.substr(0, 15);
    answer = answer.replace(/[.]$/g, "");
  } else if (answer.length < 3) {
    answer += answer.substr(-1, 3 - answer.length);
  }

  if (answer === "") {
    answer += "aaa";
  }

  return answer;
}

console.log(solution("abcdefghijklmn.p"));
