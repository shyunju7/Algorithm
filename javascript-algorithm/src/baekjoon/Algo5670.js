/**
 * 백준 5670 휴대폰 자판
 * 플래티넘 4
 * 자료 구조 문자열 트리 트라이
 */

// Node
class Node {
  constructor(value = "") {
    this.value = value;
    this.isEnd = false;
    this.children = {};
  }
}

// Trie
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;

    for (const alphabet of word) {
      if (!currentNode.children[alphabet]) {
        currentNode.children[alphabet] = new Node(currentNode.value + alphabet);
      }
      currentNode = currentNode.children[alphabet];
    }
    currentNode.isEnd = true;
  }

  contains(word) {
    let currentNode = this.root;

    let cnt = 0;
    for (const alphabet of word) {
      if (currentNode.children[alphabet]) {
        currentNode = currentNode.children[alphabet];
        if (Object.keys(currentNode.children).length > 1) {
          cnt++;
        } else if (currentNode.isEnd) cnt++;
      } else {
        return cnt;
      }
    }
    return cnt;
  }
}

const solution = (input) => {
  let idx = 0;
  while (idx < input.length) {
    let phone = new Trie();
    let cnt = 0;
    let loop = Number(input[idx]);

    for (let i = idx + 1; i < idx + loop + 1; i++) {
      phone.insert(input[i]);
    }

    for (let i = idx + 1; i < idx + loop + 1; i++) {
      cnt += phone.contains(input[i]);
    }
    idx += loop + 1;
    console.log(
      (Math.round((cnt / loop + Number.EPSILON) * 100) / 100).toFixed(2)
    );
  }
};

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

solution(input);
