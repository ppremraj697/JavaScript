// A CLOSURE is the combination of a function bundled together with reference to it's surrounding state[Lexical Environment]

function makeAdder(x){
    return function (y){
        return x + y;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2))
console.log(add5(4))