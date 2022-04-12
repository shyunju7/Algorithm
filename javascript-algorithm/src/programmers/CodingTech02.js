/**
 * 음성 인식 기술을 사용하면 사람이 말하는 음성 데이터를 문자 데이터로 변환할 수 있습니다. 당신은 오늘의집에 전화로 들어온 주문을 자동으로 처리하기 위해, 음성 데이터를 문자 데이터로 변환하려 합니다. 당신은 이 문자 데이터를 쓰기 전에 먼저 반복적으로 사용된 말버릇 패턴을 삭제해야 합니다. 말버릇 패턴이란 문자 데이터에서 가장 많이 등장하는 길이 1 이상의 패턴이며, 문자 데이터에 등장하는 해당 패턴을 모두 삭제하면 됩니다. 단, 이러한 패턴은 대소문자를 구분하지 않으며, 가장 많이 등장한 패턴이 여러 개일 경우 그러한 패턴을 모두 삭제합니다.**/

const solution = (call) => {
  let answer = call;
  let pattern = "";
  let map = new Map();
  let maxCount = -1;

  call.split("").map((c) => {
    c = c.toUpperCase();
    return map.get(c) !== undefined
      ? map.set(c, map.get(c) + 1)
      : map.set(c, 1);
  });

  map.forEach((v, k) => {
    if (v > maxCount) {
      maxCount = v;
      pattern = k;
    } else if (v === maxCount) {
      pattern += "|" + k;
    }
  });

  const regex = new RegExp(pattern, `gi`);
  console.log(regex);
  answer = answer.replace(regex, "");

  return answer;
};

console.log(solution("ABCabcA"));
