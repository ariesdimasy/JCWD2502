function isWeekend(date) { 
    //const days = ["sunday","monday","tuesday","wednesday","thursday","friday",'saturday'] 
    return new Date(date).getDay() === 0 || new Date(date).getDay() === 6 ? "weekend" : "weekdays"
}

console.log(isWeekend("2023-07-16"))
console.log(isWeekend("2023-07-17"))
console.log(isWeekend("2023-07-18"))