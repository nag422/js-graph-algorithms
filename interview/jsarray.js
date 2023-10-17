// console.log(eval('2+2+2'))

// const val = parseFloat(4.567)
// console.log(Math.round(val))

// var symb1 = Symbol("foo");

// console.log(symb1.iterator)

// const buffer = new ArrayBuffer(8);

// for(let i of [buffer]){
//     console.log(i)
// }

// const foofor =  function* () {
//     yield "a";
//     yield "b";
//     yield "c";
// };
// const obj = new Object();

// const gen = foofor();
// console.log(gen.next().value)

// // console.log("Date")
// const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// console.log(date)
// console.log(new Intl.DateTimeFormat('en-US').format(date))
// console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date))
// console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle:'long', timeZone:'IST'}).format(date))

/*const arr1 = [0,1,2,3,4,5,2,1,4] //iterator
const arr3 = [10,49,50,20,30,90];

let somenum = 0 //netflix
const arr2 = [{id:1,items:30.00, subscription:true},{id:2,items:50.00,subscription:true},{id:3,items:2,subscription:false}]
// for(let element of arr2){
//     if(element.subscription){ //boolean
//       somenum += element //add and assign
//       console.log("loop"+(element+1)+"----> ",i)  
//     }
    
// }

// const acc = {};
// const ouputreduce = arr2.reduce((acc,value,index)=>{
//     const money = value.items
//     if(acc.subscription == undefined) acc.subscription = 0 //object
//     if(value.subscription) acc.subscription += 1
//     return acc;
    
// },{})
// console.log("sum total:", ouputreduce)
/*const ouputreduce = arr1.reduce((acc,value,index)=>{
    acc += value;
    return acc;
    
},0)
console.log("sum total:", ouputreduce)*/