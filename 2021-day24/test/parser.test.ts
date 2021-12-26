import * as chai from 'chai'
import {find, parseAndRun} from "../src/parser"
import {init} from "../src/functions"
const should = chai.should()

describe('parser', () => {
    beforeEach(init)
    describe('parse and execute', () => {
        it('import and print a number for w', () => {
            let value = parseAndRun(negateProgram, '3')
            value.should.equal(-3)
        })
        it('add two numbers', () => {
            let value = parseAndRun(addToNumbers, '43')
            value.should.equal(7)
        })
        it('should not find 20 since it contains 0', () => {
            let value = find(find20, '21')
            should.equal(value, undefined)
        })
        it('should return 123 if the input is larger', () => {
            let value = find(find123, '999')
            value.should.equal('123')
        })
        it('should check if the second number is three times larger than the first', () => {
            let value = parseAndRun('inp z\n' +
                'inp x\n' +
                'mul z 3\n' +
                'eql z x\n' +
                'get z', '13')
            value.should.equal(1)
        })
    })
})

const negateProgram =`inp x
mul x -1
get x`
const addToNumbers =`inp x
inp y
add x y
get x`
const find123 =`inp x
inp y
inp w
mul x 100
mul y 10
add z x
add z y
add z w
eql z 123
get z`
const find20 =`inp y
inp w
mul y 10
add z y
add z w
eql z 20
get z`