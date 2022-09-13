/* 양과 늑대 */

function solution(info, edges) {
  let matrix = Array.from(Array(info.length), () => []);
  let maxCount = 0;

  for (let [from, to] of edges) {
    matrix[from].push(to);
  }

  function dfs(current, nextNodes, sheep, wolf) {
    info[current] === 0 ? sheep++ : wolf++;
    // console.log(
    //   `dfs()... cur: ${current} nextNodes: ${nextNodes} sheep: ${sheep} wolf: ${wolf}`
    // );

    if (wolf >= sheep) return;
    if (maxCount < sheep) maxCount = sheep;

    let possibleNodes = [...nextNodes, ...matrix[current]];
    possibleNodes.splice(nextNodes.indexOf(current), 1);
    for (let next of possibleNodes) {
      dfs(next, possibleNodes, sheep, wolf);
    }
  }

  dfs(0, [0], 0, 0);
  return maxCount;
}

console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
