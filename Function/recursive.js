function test(num) { 
    console.log(this)
    if(num <= 3) {
        console.log("test => ", num)
        num = num + 1 // 0 
        test(num) // 0
    }else { 
        console.log(num)
    }
}

var test2 = () => { 
    console.log(this)
    console.log("test2")
}

test()
test2()

console.log(isNaN(NaN))