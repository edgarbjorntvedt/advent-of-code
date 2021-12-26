import {readFileSync} from 'fs'
import {find} from "./src/parser"

const input = readFileSync('./data/monad.txt')
let programString = 'init\n'+input.toString()+'get z'

let a = find(programString, '99999999999999')
console.log(a)