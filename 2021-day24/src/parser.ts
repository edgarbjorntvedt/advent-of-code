import * as functions from './functions'

export function parse(s:string){
    let lines = ['init', ...s.split('\n')]
    return lines.map(line => {
        const [name, ...args] = line.split(' ')
        const instruction = functions[name]
        return [name, instruction, ...args]
    })
}

export function run(instructions, params:string){
    let numbers = Array.from(params).reverse()
    let current
    instructions.forEach(([name, instruction, ...args]) => {
        if(name === 'inp') args.push(numbers.pop())
        current = instruction(...args)
    })
    return current
}

export function parseAndRun(program:string, param:string){
    return run(parse(program), param)
}

export function find(program:string, param:string):string{
    let instructions = parse(program)
    let high = parseInt(param)
    for (let i = high; i>0; i--){
        let input = i.toString()
        if (!input.includes('0')){
            let answer = run(instructions, input)
            if (answer === 1){
                return i.toString()
            }
        }
        if (i%30000===0){
            console.log(i)
        }
    }
}