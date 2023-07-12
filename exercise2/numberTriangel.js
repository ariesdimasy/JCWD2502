function numberTriangel(height) {
    var result = "" // ***
    var counter = 1
    for(var i = 1; i <= height; i++) {
        result = ""
        for(var j = 1; j <= i; j++) { // i = 2
            result = result + counter +"  " // ***
            counter++
        }
        console.log(result) // ***
    }    
}

numberTriangel(5)