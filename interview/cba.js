const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// let years = Math.round(Date.now() / year);
// console.log(years)

var dayteObject = {
    minute,
    hour,
    day,
    year,
    getDayFormat: function() {
        var displaydate = Math.round(Date.now() / this.year)
        return displaydate
    }
}
var get_Days =  async function (){
    // const apiData = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json()).then((val => val))
    // return apiData
    return (this.getDayFormat() + " I choose you");
}

var get_year = function(arg1, arg2){
    return `${this.year}, ${arg1}--- ${arg2}`
}

var get_month = function(arg1, arg2) {
    return `${this.hour}, ${arg1} ---- ${arg2}`
}

var print_days_object = get_Days.bind(dayteObject);
console.log(print_days_object())

var extract_year = get_year.call(dayteObject,"nagendra", "kumar")
console.log(extract_year)

var extract_month = get_month.apply(dayteObject, ["infinite computer","infosys"])
console.log(extract_month)
const date = Date.now();
const timestampledDate = new Date(date)
console.log(timestampledDate.getFullYear())
console.log(timestampledDate.getDay())