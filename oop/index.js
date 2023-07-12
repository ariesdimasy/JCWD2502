'strict mode'
console.log(this)

function test() { 
    // this.a = 10
    console.log(this)
}

test()