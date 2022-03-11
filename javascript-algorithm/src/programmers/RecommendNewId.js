/** 신규 아이디 추천  */
function solution(newId) {
  let answer = newId.toLowerCase();

  // 정규식 - 괄호 안에 문자가 아니면 제거
  answer = answer.replace(/[^a-z0-9-_.]/gi, "");

  // 정규식 - 마침표가 두개이상 이라면
  answer = answer.replace(/[.]{2,}/g, ".");

  // 정규식 - 마침표로 시작하거나 끝난다면
  answer = answer.replace(/^[.]|[.]$/g, "");

  // 길이 검증
  answer = answer === "" ? "a" : answer;

  if (answer.length > 15) {
    answer = answer.substr(0, 15);
    answer = answer.replace(/[.]$/, "");
  } else if (answer.length < 3) {
    let minus = 3 - answer.length;
    answer += answer.charAt(answer.length - 1).repeat(minus);
    // for (let i = 0; i < minus; i++) {
    //   answer += answer.charAt(answer.length - 1);
    // }
  }
  return answer;
}

console.log(solution("z-+.^."));
