function numTower(height) { 
   
    var counter = 1
    for(var i = 1; i <= height; i++) {
        var result = ""
        for(var j = 1; j <= i; j++) { 
            if(counter < 10) { 
                result = result + "0"+counter + " "
            } else { 
                result = result + counter + " "
            }
            
            counter++
        }
        console.log(result)
    }  
}

numTower(2)
numTower(3)
numTower(4)
numTower(5)