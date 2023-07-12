let myDate = new Date()

console.log(myDate)

let myDate2 = new Date(0)

console.log(myDate2)

let myDate3 = new Date("2010-09-10")

console.log(myDate3)

console.log(myDate.getFullYear())
console.log(myDate.getMonth())
console.log(myDate.getUTCMonth())
console.log(myDate.getMilliseconds())

myDate.setDate(30)
console.log(myDate)
