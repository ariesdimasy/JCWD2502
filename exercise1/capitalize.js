// console.log("A" == "a")
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var word = "hello World 120 abc"
var result = ""


for(var i = 0; i < word.length; i++) { 
    var find = false
    for(var j = 0; j < lowerCase.length; j++) {
        if(word[i] == lowerCase[j]){ 
            result = result + upperCase[j]
            console.log("condition 1", result)
            find = true 
            break
        } else if(word[i] == upperCase[j]) { 
            result = result + lowerCase[j]
            console.log("condition 2", result)
            find = true 
            break
        }

    }
    console.log("flag " , find)
    if(find === false) {
        console.log(" condition 3 ",result) 
        result = result + word[i]
    }

}

console.log(result)

// /*
//     cari huruf yang harus di jadikan huruf besar yaitu index ke 0 
//     dan sebelah kiri nya spasi 

// */ 

// for(var i = 0; i < word.length; i++) { 
//     var index = 0
//     if(i == 0) {
//         for(var j = 0; j < lowerCase.length; j++) { 
//             if( word[i] == lowerCase[j]) { 
//                 //result = result + upperCase[j]
//                 index = j 
//                 // i = i + 1

//                 break
//             }
//         }
//         result = result + upperCase[index]
//     } else if ( word[i] == " ") { 
//         for(var j = 0; j < lowerCase.length; j++) { 
//             if( word[i+1] == lowerCase[j]) { 
//                 //result = result + upperCase[j]
//                 // i = i + 1
//                 index = j
//                 break
//             }
//         }
//         result = result+" "+ upperCase[index]
//         i++
//     }else {
//         result = result + word[i]
//     }
   
    
// }

// console.log(result)