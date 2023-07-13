/* 
[PGS] 68644_두개 뽑아서 더하기_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/68644
*/

function solution(numbers) {
  const answer = [];
  let combedNums = Array(2).fill(0);
  const isPicked = Array(numbers.length).fill(false);
  const comb = (index, cnt) => {
    if (cnt === 2) {
      const sum = combedNums[0] + combedNums[1];
      answer.push(sum);
      return;
    }

    for (let i = index; i < numbers.length; i++) {
      if (isPicked[i]) continue;
      isPicked[i] = true;
      combedNums[cnt] = numbers[i];
      comb(i + 1, cnt + 1);
      isPicked[i] = false;
    }
  };

  comb(0, 0);
  const setToArr = [...new Set(answer)].sort((a, b) => a - b);
  return setToArr;
}
