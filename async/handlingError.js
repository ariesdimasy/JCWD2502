function tryThrow() { 
    try {
        let isFalse = true
        console.log("task1")
        if(isFalse) { 
            throw "This is error"
        }
        console.log("success")
    } catch(err) { 
        console.log("block catch => ", err)
    }
}

function tryThrow2() { 
    
    let isFalse = true
    console.log("task1")
    if(isFalse) { 
        throw new Error("This is error")
    }
    console.log("success")
   
}

tryThrow2()
