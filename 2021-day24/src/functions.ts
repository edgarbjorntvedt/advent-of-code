let vars
let chars = /[w-z]/
function num(b: string):number {
    return chars.test(b) ? vars[b] : parseInt(b)
}
export function init(){
    vars = {w:0,x:0,y:0,z:0}
}
export function inp(a:string, b:string){
    vars[a] = num(b)
}
export function add(a:string, b:string){
    vars[a] += num(b)
}
export function mul(a:string, b:string){
    vars[a] *= num(b)
}
export function div(a:string, b:string){
    vars[a] = parseInt((num(a)/num(b)).toString() )
}
export function mod(a:string, b:string){
    vars[a] = num(a)%num(b)
}
export function eql(a:string, b:string){
    vars[a] = num(a) === num(b) ? 1 : 0
}
export function get(a:string):number{
    // console.log(vars[a])
    return vars[a]
}
export function log(a:string){
    console.log(vars[a])
}