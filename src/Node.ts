// LCRS
class Node {
  #value: string
  #child: NodeType // LEFT
  #next: NodeType // RIGHT

  constructor(value: string) {
    this.#value = value
    this.#child = null
    this.#next = null
  }

  // Child
  addChild(child: NodeType) {
    this.#child = child
    return this.#child
  }

  getChild() {
    return this.#child
  }

  // Next
  addNext(sibling: NodeType) {
    this.#next = sibling
    return this.#next
  }

  getNext() {
    return this.#next
  }

  // Value
  getValue() {
    return this.#value
  }
}

export default Node
