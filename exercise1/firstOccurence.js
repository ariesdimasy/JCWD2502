var stack = "Hello World World"
var needle = "ell" // => Hel , ell, llo, lo , o W, 
// orld => Hell , ello, llo , lo W, 
var result = ""
var flag = true
var index = 0
for(var i = 0; i < stack.length; i++) { 
   if(stack[i] === needle[0] && stack[i+1] === needle[1] && stack[i+2] === needle[2] && flag == true) { 
    for(var j = i; j < i+needle.length; j++) { 
        index = j
    }
    i = index
    flag = false 
   }else {

    result = result + stack[i]
   }
}

console.log(result)