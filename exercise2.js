/*

Hello World

ell
*/
var word = "Hello Wonderful World"
var needle = "Wo"
var startNeedle;
var endNeedle;
var result = ""

for(var i = 0; i < word.length; i++ ) {
    // console.log(word[i])
   startNeedle = i
   endNeedle = i + needle.length-1
   var subStr = ""
   for(var j = i; j < i+needle.length; j++) {
    subStr += word[j]
   }

   if(subStr === needle) {
     break;
   }
   
}

for(var k = 0; k < word.length; k++ ) {
   if(k >= startNeedle && k <= endNeedle) { 
    continue
   }
   result += word[k]
}



console.log(result)