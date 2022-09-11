/* 주차 요금 계산 */

const solution = (fees, records) => {
  let answer = [];
  let carList = {};
  let cumulativeTime = new Map();
  const [defaultTime, defaultRate, unitTime, unitRate] = fees; // 기본시간, 기본가격, 단위시간, 단위가격

  // 입차 및 출차 기록으로 시간 계산
  for (let record of records) {
    const [times, carNum, state] = record.split(" ");
    const [hour, min] = times.split(":");
    let time = Number(hour * 60) + Number(min);

    switch (state) {
      case "IN":
        carList[carNum] = time;
        break;
      case "OUT":
        cumulativeTime.set(
          carNum,
          cumulativeTime.get(carNum) === undefined
            ? time - carList[carNum]
            : cumulativeTime.get(carNum) + (time - carList[carNum])
        );
        delete carList[carNum];
        break;
    }
  }

  // 남은 기록이 있다면 11:59 기준으로 시간 계산
  for (let [key, value] of Object.entries(carList)) {
    cumulativeTime.set(
      key,
      cumulativeTime.get(key) === undefined
        ? 1439 - value
        : cumulativeTime.get(key) + (1439 - value)
    );
    delete carList[key];
  }

  // 정렬
  cumulativeTime = new Map(
    Array.from(cumulativeTime).sort((a, b) => a[0] - b[0])
  );

  // 최종 주차 금액
  for (let time of cumulativeTime.values()) {
    answer.push(
      time <= defaultTime
        ? defaultRate
        : defaultRate + Math.ceil((time - defaultTime) / unitTime) * unitRate
    );
  }
  return answer;
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
