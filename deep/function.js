function test(){
    console.log("test function")
    return true
}

const test2 = function() { 
    this.name = "dimas"
    this.age = 32
    //console.log(this)

}

const test3 = () => {
    this.name = "aries"
    // console.log(this.name)
    //console.log(this)
}

// console.log(test2)
var t2 = new test2()
console.log(t2)
// var t3 = new test3()
// console.log(t3)

function cube(n = 1) { 

    // console.log(n)
    var temp = ""
    // baris / row 
    for(var i = 0; i < n; i++) { 
        temp = ""
        // untuk mengisi kolom atau x sebanyak n
       for(var j = 0; j <n; j++) { 
            temp += "x"
            //console.log("i => ",i,"j => ",j,temp)
       }
       console.log(temp)
    }
   
    
    // console.log("xxx")
    // console.log("xxx")
    // console.log("xxx")
}

cube(3)
console.log("=====")
cube(4)