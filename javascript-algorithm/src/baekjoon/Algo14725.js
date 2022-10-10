/*
 * 14725. 개미굴
 * https://www.acmicpc.net/problem/14725
 */

// Node 클래스
class Node {
  constructor(value = "") {
    this.value = value;
    this.children = [];
  }
}

// Trie 클래스
class Trie {
  constructor() {
    this.root = new Node();
    this.output = "";
  }

  // Trie에 새로운 단어를 추가하는 메서드
  insert(line) {
    // 최상위 노드는 항상 root노드
    let currentNode = this.root;

    // 공백으로 단어를 구분하여 저장
    const words = line.split(" ");
    words.shift(); // 첫번쨰 요소(크기) 제거

    // 단어들을 하나씩 가져와 자식 노드로 연결
    for (const word of words) {
      // 현재 노드의 자식에 존재하지 않다면 추가
      if (!currentNode.children[word]) {
        currentNode.children[word] = new Node(currentNode.value + word);
      }

      // 현재 노드를 현재 word의 부모로 변경
      currentNode = currentNode.children[word];
    }
  }

  // Trie에 저장된 노드들을 출력하는 메서드
  makeOutputForm(length, curNode) {
    // 현재 노드가 없다면, root노드로 설정
    if (length === 0) {
      curNode = this.root;
    }

    // 현재 노드의 자식들을 가져옴
    for (const child of Object.keys(curNode.children).sort()) {
      // console.log("--".repeat(length) + child);
      this.output += "--".repeat(length) + child + "\n";
      this.makeOutputForm(length + 1, curNode.children[child]);
    }
  }

  // 출력형식을 만드는 메서드
  print() {
    this.makeOutputForm(0);
    console.log(this.output.trim());
  }
}

// 해결
const solution = (input) => {
  // Trie 객체 생성
  const trie = new Trie();

  // 입력값의 첫번쨰 요소만큼 루프 반복
  const loop = Number(input.shift());
  for (let i = 0; i < loop; i++) {
    // 모든 요소를 Trie 객체에 저장
    trie.insert(input[i]);
  }

  // 출력
  trie.print();
};

const readline = require("readline");
let input = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  input.push(line);
  if (input.length === Number(input[0]) + 1) {
    solution(input);
  }
});
