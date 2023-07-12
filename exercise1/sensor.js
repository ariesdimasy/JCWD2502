var sensor = "A"
var word = "dimas panjul"
var result = ""

for ( var i = 0; i < word.length; i++) { 
    if(word[i].toLowerCase() == sensor.toLowerCase()) { 
        result = result + "*"
    } else { 
        result = result + word[i]
    }
}

console.log(result)

