import * as words from 'badwords-list'
import { printTree, wordsToTree } from './Tree'
import Node from './Node'

const root = new Node('ROOT')
console.log(words?.array?.slice(0, 4))
wordsToTree(root, words?.array?.slice(0, 4) || [])

printTree(root, 0)
