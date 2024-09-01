import Node from './Node'

export const addSibling = (firstChild: NodeType, value: string) => {
  if (firstChild === null) return null

  while (firstChild && firstChild.getNext() !== null) {
    firstChild = firstChild.getNext()
  }

  return firstChild?.addNext(new Node(value)) || null
}

export const addChild = (parentNode: NodeType, value: string) => {
  if (parentNode === null) return null

  if (parentNode.getChild() === null) {
    return parentNode.addChild(new Node(value))
  }

  return null
}

export const traverseSibling = (firstNode: NodeType, value: string) => {
  if (firstNode === null) return null

  let current: NodeType = firstNode

  while (current) {
    if (current.getValue() === value) {
      break
    } else {
      current = current.getNext()
    }
  }

  return current
}

// I am a abcd5hit in the world.
export const traverseWord = (node: Node, word: string, startIdx = 0) => {
  // list
  // 1) list 별로 검색
  // 2) 시작 index
  // 3) 시작 index에서 트리 검색
  // 4) 없으면 시작 인덱스 + 1

  for (let i; i < word.length; i++) {
    if (word[i]) {
      const finded = traverseSibling(node, word[i])
      if (finded) {
        if (node.getChild()) traverseSibling(node.getChild(), word[i])
      }
    }
  }
}

export const wordsToTree = (root: Node, list: string[]) => {
  list.map((profanity, pIdx) => {
    let current: NodeType = root.getChild()
    let start = false

    for (let idx = 0; idx < profanity.length; idx++) {
      if (pIdx === 0) {
        current = addChild(idx === 0 ? root : current, profanity[idx])
      } else {
        const finded = traverseSibling(current, profanity[idx])
        if (finded) {
          if (finded.getChild()) {
            current = finded.getChild()
          } else {
            current = addChild(current, profanity[idx])
          }
        } else if (current && !start) {
          current = addSibling(current, profanity[idx])
          start = true
        } else if (current) {
          current = addChild(current, profanity[idx])
        }
      }
    }
  })
}

export const printTree = (node: NodeType, depth: number) => {
  if (node === null) return

  for (let i = 0; i < depth; i++) {
    process.stdout.write(' ')
  }
  process.stdout.write(`${node.getValue()}\n`)

  if (node.getChild() !== null) printTree(node.getChild(), depth + 1)
  if (node.getNext() !== null) printTree(node.getNext(), depth)
}
