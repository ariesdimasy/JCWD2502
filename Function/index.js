let foo = ""

function exponential(num) { 
    var result = 0
    result = num * num
    foo = "bar"
    return result
}

function hello() { 
    console.log("Hello World")
    // return true
}
// console.log(foo)
// var result = exponential(4)
// console.log(foo)
// console.log(exponential(6)) // 36
// console.log(exponential(20)) // 400
// console.log(exponential(11)) // 121

// console.log(result) // 121
//hello() // hello world
//console.log(hello()) // hello world 

// var exponential2 = function(num) {
//     //var result = num * num
//     return num * num
// }

var rectangleArea = function(p=4,l=5) { 
    return p * l
}

// console.log(exponential2(23))
console.log(rectangleArea(undefined,10))
console.log(rectangleArea(56))

function console2(name, ...anything) { 
    console.log("name => ", name)
    console.log("anything => ",...anything)
}

function getMessage2(firstName) { 
    return function () { 
        return firstName
    }

}

function getMessage(firstName) { 
    function sayHello() { 
        return "hello "+firstName
    }
    function welcomeMessage() { 
        return "Welcome to Purwadhika"
    }

    const handleShowMessage = function() { 
        console.log("show this message")
    }

    handleShowMessage()
    return sayHello()+" "+welcomeMessage()
}

console.log(getMessage2("Dimas")())

// console2("hello","aries","dimas")

console.log(getMessage("Dimas"))

function multiplier(factor) { 
    return function(number) { 
        return function() { return  factor * number } 
    }
}

const mul3 = multiplier(3) // function 

console.log(mul3(10)())
console.log(multiplier(3)(10)())
