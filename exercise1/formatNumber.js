/*

 1. convert number to string 

  1000
  0123

  1000
  4321

  dibalik dulu 

  diberi diberi digit format 

  dibalik lagi 

  */ 
var result = ""
var number = 1234567
number = number.toString()

for(var i = number.length -1; i >= 0; i--) { 
    //result = result + number[i] 
   
    result = result + number[i]
    
}

console.log(result)
var result2 = ""

for(var j = 0; j < result.length; j++) { 
   
    if((j+1) % 3 == 0 && j != result.length-1) { 
        result2 = result2 + result[j]+"."
        console.log("kesini")
    } else {
        result2 = result2 + result[j]
    }
    //console.log(j+1, result2)
}

console.log(result2)

var result3 = ""

for(var k = result2.length - 1; k >= 0 ; k--) { 
    result3 = result3 + result2[k]
}

console.log("Rp. ",result3,",00")

