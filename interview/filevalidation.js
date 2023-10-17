const filename = " " ;
const requiredext = "png"
function fileName(value,ext){
   let extenction = value;
   const dta = extenction.split(".");
       if(dta.pop() == ext){
         console.log(`it's ${ext}`);
       }
       else
       {
         console.log(`it's not ${ext}`)
       }
    return 
}
console.log(fileName(filename,requiredext)) 

