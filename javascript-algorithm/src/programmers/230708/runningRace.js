/*
(07.08) 1차 - 배열 풀이(시간 초과)
(07.09) 2차 시도 - 14:54 - 15:07
178871_달리기경주_lv1
https://school.programmers.co.kr/learn/courses/30/lessons/178871
*/

function solution(players, callings) {
  const ranks = {};

  for (let i = 0; i < players.length; i++) {
    ranks[players[i]] = i;
  }

  for (let calling of callings) {
    let overtakenPlayer = players[ranks[calling] - 1];
    // 선수 위치 변경
    players[ranks[calling]] = overtakenPlayer;
    players[ranks[calling] - 1] = calling;

    // 순위 변경
    ranks[calling] -= 1;
    ranks[overtakenPlayer] += 1;
  }

  return players;
}
