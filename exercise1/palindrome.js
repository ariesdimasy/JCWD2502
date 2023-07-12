/*
    ANA => AAN => 3
    012

    KASUR => 5
    01234

    KASUR INI RUSAK => 15 

    210

    dari kecil ke besar step +1
    dari besar ke kecil step -1 

    length of string - 1  ke 0 step -1
*/

var word = "kasur ini rusak" // asal katanya 
var result = ""// hasil modifikasi 
 //                          3 >= 0   
for(var i = word.length - 1; i >= 0;i--) { 
    result = result + word[i] // result = "s" + "a"
    // console.log(result) // sa 
    //console.log(word[i])
}

if(word === result) { 
    console.log(word ," adalah palindrome")
} else { 
    console.log(word ," bukan palindrome")
}