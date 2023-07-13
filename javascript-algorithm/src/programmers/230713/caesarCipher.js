/* 
[PGS] 12926_시저암호_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/12926
*/

// 풀이 1. 문자 index를 이용한 풀이
function solution(s, n) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return [...s]
    .map((character) => {
      if (character === " ") return " ";
      const isLowerCase = lowerCase.includes(character);
      let index = isLowerCase
        ? lowerCase.indexOf(character)
        : upperCase.indexOf(character);
      index = 25 < index + n ? index + n - 26 : index + n;
      return isLowerCase ? lowerCase.charAt(index) : upperCase.charAt(index);
    })
    .join("");
}

// 풀이 2. 아스키코드를 이용한 풀이
function solution(s, n) {
  return [...s]
    .map((alphabet) => {
      const code = alphabet.charCodeAt(0);
      if (65 <= code && code <= 90) {
        return String.fromCharCode(((code + n - 65) % 26) + 65);
      } else if (97 <= code && code <= 122) {
        return String.fromCharCode(((code + n - 97) % 26) + 97);
      }
      return " ";
    })
    .join("");
}
