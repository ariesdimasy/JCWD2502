let input = 5
let str = ""
for(let i = 1; i <= input*input; i++) { 
    if(i % input === 0) { 
        str += "*\n"
    } else { 
        str += "*"
    }
}

console.log(str)