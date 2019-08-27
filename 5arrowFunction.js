//es5
var myFunc1 = function sum(a, b) {
    return 'a+b = ' + a + b
}

console.log(myFunc1(1, 2))

const myFunc2 = (a, b) => a + b
console.log(myFunc2(5, 7))

const myFunc3 = ({ name, nickname }) => {
    return console.log(`Name = ${name}
Nickname = ${nickname}`)
}

let o = {
    name: 'jidapa',
    nickname: 'eye'
}
myFunc3(o);