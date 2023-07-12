/*
    true && true => true 
    true && false => false 
    false && false => false

    true || true => true 
    true || false => true
    false || false => false

    negasi ! 
    !true => false
    2 != "2" => false

*/

// var car = "BMW"
// var test = car == "BMW" || car == "TOYOTA"
// console.log(test)

// if(car == "BMW" || car == "TOYOTA") { 
//     console.log("this car is awesome")
// }

var grade = 70

switch(true) { 
    case 90 <= grade <= 100:
        console.log("A")
    break;
    case grade >= 85 && grade <= 89:
        console.log("B")
    break;
    case grade >= 70 && grade <= 84:
        console.log("C")
    break;
}

// ternary operator
var state = "green"
var result = state == "red" ? "Stop" : "Go"

console.log(result)

/*
DEFINE state EQUALS to "green" as string
DEFINE result as string 

IF state EQUALS to "red"
    PRINT "Stop"
ELSE 
    PRINT "Go"


*/