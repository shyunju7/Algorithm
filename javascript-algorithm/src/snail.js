// # 달팽이

// N은 달팽이 크기(가로/세로)
// 달팽이 크기는 탐색할수록 작아지기 때문에 이를 저장할 다른 변수가 필요함!
// let size = N;를 설정해서 size --;를 통해 탐색할 범위를 줄여나갈 것!

// 달팽이 이동 경로
// 달팽이는 1. (0,0)에서 시작해서 오른쪽으로 이동 (반복)
// 이후, 2. 오른쪽 위(0, N - 1)에서 아래쪽으로 이동 (반복)
// 3. (N - 1, N -1)에 도착했다면 왼쪽으로 이동 (반복)
// 4. (N - 1, 0)에 도착했다면 위로 이동 (반복)
// 1 ~ 4과정을 (반복)  -> 언제까지? N^2 수를 모두 저장할 때까지

const solution = (N) => {
  const answer = Array.from({ length: N }, () => Array(N).fill(0));

  // 점점 줄어들 달팽이가 움직일 거리
  let size = N - 1;
  let start = 0;

  // 달팽이 시작 위치
  let x = 0;
  let y = 0;
  let num = 2;

  // 달팽이 시작점은 1
  answer[0][0] = 1;

  // N^2수를 모두 저장할 때까지 반복한다.
  while (num < N * N + 1) {
    // 첫 번쨰 방향 (왼쪽 -> 오른쪽으로 이동)
    while (y + 1 <= size) {
      y++;
      answer[x][y] = num++;
    }

    // 두 번째 방향(오른쪽 -> 아래로 이동)
    while (x + 1 <= size) {
      x++;
      answer[x][y] = num++;
    }

    // 세 번째 방향(아래 -> 왼쪽으로 이동)
    while (y > start) {
      y--;
      answer[x][y] = num++;
    }

    // size 줄이고, 시작 위치 증가시키기
    start++;
    size--;

    // 네 번째 방향(왼쪽 -> 위로 이동)
    while (x > start) {
      x--;
      answer[x][y] = num++;
    }
  }

  // 출력
  for (let line of answer) {
    console.log(line.join("\t"));
  }
};

// solution(1);
// solution(2);
// solution(3);
// solution(4);
// solution(5);
// solution(6);
// solution(7);
// solution(8);
// solution(9);
// solution(10);
