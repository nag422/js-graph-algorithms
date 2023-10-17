function outer(b){
    
    function inner(a){
        
        console.log(a,b);
        var a = 10;
    }
    
    return inner;
}
var a = 50;
const z = outer(90);
z(105)