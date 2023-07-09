/*
(7.9) 16:30 - 17:00
[PGS] 131127_할인행사_lv2
https://school.programmers.co.kr/learn/courses/30/lessons/131127
*/
function solution(want, counts, discount) {
  let answer = 0;
  let products = [...discount].slice(0, 10);
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  for (let i = 1; i <= discount.length - 9; i++) {
    const tmp = want.map(
      (item) => products.filter((product) => product === item).length || 0
    );

    let isPossible = equals(counts, tmp);
    isPossible && answer++;

    products.shift();
    products.push(discount[i + 9]);
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
