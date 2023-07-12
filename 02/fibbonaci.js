var firstNumber = 0
var secondNumber = 1 
var resultTemp = 0
var result = "0,1"
// var result = [0,1]


for(var i = 2; i < 10; i++) { 
    resultTemp = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = resultTemp 

    result += ","+resultTemp
}

console.log(result)

// var name = "dimas"
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
