/*

Hello World

ell
*/
var word = "Hello World"
var needle = "ell"
var result = ""
for(var i = 0; i <= word.length; i++) { 
    var same = false
    for(var j = 0; j <= needle.length; j++) { 
       if(word[i] == needle[j]) { 
        same = true
       }
    }
    if(!same) { 
        result += word[i]
    }
}

console.log(result)