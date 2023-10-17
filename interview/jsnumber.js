class CheckNumber {
    constructor(x){
        this.input = x
    }

    checktype(){
        if(typeof this.input == 'number' && !isNaN(this.inut)){
            // check if it is integer
            if(Number.isInteger(this.input)) {
                console.log(`${this.input} is an integer.`);
                return `${this.input} is an integer.`
            } else {
                console.log(`${this.input} is a float value.`)
                return `${this.input} is a float value.`
            }
        } else {
            console.log(`${this.input} is not a number`)
            return `${this.input} is not a number.`
        }
    }
}

const objs = new CheckNumber(NaN)
console.log(objs.checktype())
console.log(typeof(""))


