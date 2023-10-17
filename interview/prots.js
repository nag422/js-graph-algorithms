const radius = [1,2,3,4,5];
// debugger;
const area = function (radius) {
    return Math.PI + radius * radius;
};

/* const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius,area));

console.assert(radius.map(area)); */

// function calculate (arr,logic){ //executes immedialtely
//     return [1,2,3]
// }

// calculate([5,6,7],469);

// var aaa=50;

// prototype

Array.prototype.calculate = function(logic){
    const output = [45,34,87,12];
    console.log(this)
    return output;
};

console.log(radius.calculate(area))

// const myfunc = () =>{
//     let a=10;
//     console.log(a)
//     // var a = 30;
// }
// myfunc()
// var a = 50;

// async function* foo(){
//     yield await Promise.resolve('a');
//     // yield await Promise.resolve('b')
//     // yield await Promise.resolve('c')
// }
// const gen = foo();

// gen.next()
// .then((res)=>{console.log(res);
// return gen.next()})
// .then((res) => {
//     console.log("json watr", res);
//     return gen.next()
// }).then((res)=>{
//     console.log("jk", res)
// })

// let str = '';

async function generate(){
    var i = 0
    for await (const val of [1,2,3,4]) {
        // str = str + val
        setTimeout(() => {
            console.log("inside i", i)
        }, 1000*val);
        console.log(i)
        i++;
    }

    // console.log(str)
}

generate();


var x = 50;

function b(){
    console.log("xvalue",x);
    var x = 20;
}

var a = 40;
b();
