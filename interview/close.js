/* function outer(){
    let a = 10;
    function inner(params) {
        console.log(a)
    }
    inner();
};
outer(); */

// external closure
// var a = 20;
// function outerx(){
//     var a =40;
//     return function inner(){
//         a+=10
//         console.log("maggie", a)
//     }
// }
// calling for multiple times like generator
/* const y = outerx()
console.log(y())
console.log(y()) */

/* const z = outerx(function inner(){
    console.log(a);
    return a
}); */

// function outerx(){
//     var a =40;
//     function inner(){

//         console.log("maggie", a)
//     }
//     return inner;
// }

// const y = outerx()
// var a = 11;
// console.log(y);


/* (function a (){
    var x = 20;

    return function b(){
        console.log("b", x)
        x = 30
        return function c() {
            console.log("c", x);
            var x=40; //comes undefined because of declared below
        }
       
    }
   
})()()(); */

/* async function* callScope() {
    var j=1;
  for(let i=1; i <=5; i++){
    
    setTimeout(() => {
        console.log(i, j)
    }, 100*i);
    yield j++;
}  
}

gen = callScope();
for (const iterator of [1,2,3,4,5,6,7,8,9,10]) {
    gen.next().then(res=>console.log(res))
} */


function x() {
    let timeit;
    for (var i = 0; i <= 5; i++) {
        function y(i) {
           
            timeit = setTimeout(() => {
                console.log(i)
            }, 100 * i);
            if(i === 3) clearTimeout(timeit)
        }
        y(i)
    }
}
x()