import * as chai from 'chai'
import {find, parseAndRun} from "../src/parser"
import {init} from "../src/functions"
import {readFileSync} from "fs"
chai.should()

describe('parser', () => {
    beforeEach(init)
    describe('parse and execute', () => {
        xit('should return the highest possible valid serial number by the MONAD', () => {
            const input = readFileSync('./data/monad.txt')
            let programString = 'init\n'+input.toString()+'get z'

            //let a = 999-
              //       11
            let param = 99999999999999 -
                        22876792454961 +
                        11111111111111 +100
            let a = find(programString, param.toString())
            console.log(a)
        })

        it('should execute MONAD and log a zero value', () => {
            const input = readFileSync('./data/monad.txt')
            let programString = 'init\n'+input.toString()+'log z\nget z'

//            let a = parseAndRun(programString, '13579246899999')
            // let a = parseAndRun(programString, '91398299697996')
//            let a = parseAndRun(programString, '41171183141291')
//            console.log('return value:', a)
        })

        it('should log a binary value of the input', () => {
            const input = readFileSync('./data/binary.txt')
            let programString = 'init\n'+input.toString()

            let a = parseAndRun(programString, '7')
            console.log(a)
        })
    })
})
