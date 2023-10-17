const somestring = "Hi ra lavada ela unnava";

// remove duplicates

// const data = [...new Set([...(somestring).replace(" ","")])]
// console.log(data.filter(val => val !== ' '))

let finalvalue = []
const s = [...((somestring).replace(" ",""))].reduce((acc, val) => {
    const count = val;
    if(val !== " "){
        if(acc[count] == null) acc[count] = 0;
        acc[count]++;
    }    
    return acc
},{})

console.log(s)

for ( const [key, value] of Object.entries(s)){
    console.log(key,value)
}

let strings = ""
loop1:for (let i in s){
    if(s[i] > 1){
       continue loop1;
    }
    strings += i
}

console.log(strings)

// array sorting

const someArray = [30,50,80,100,209];
const objectArray = [{name:"nagendra", category:"hot"},{name:"kumar",category:"hot"},{name:"ethakota",category:"house name"},{name:"developer", category:"it"}]
const thatarry = objectArray.sort((a,b)=> a.name.length - b.name.length)
console.log(thatarry)
console.log(objectArray) // if sort can change original also

// console.log(objectArray.findIndex(val=>val.name==="nagendra"));

console.log(Number(30+"sdf"))
const variablearray = [30,50,80,100,209];
// push changes it orignial like map
// contact gives new array of changes.
const some = variablearray.concat(variablearray)
console.log(some)

