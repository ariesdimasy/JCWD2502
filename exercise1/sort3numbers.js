var a = 10
var b = 5
var c = 7
var d = 15
// apakah lebih kecil 
// bandingkan a dengan b = a  , a dengan c = a , bandingkan b dengan c = b
// a b c
// bandingkan a dengan b = a  , a dengan c = a , bandingkan b dengan c = c
// a c b 
// bandingkan a dengan b = b  , b dengan c = b , bandingkan a dengan c = a
// b a c 

if(a < b && a < c && b < c ) { 
    console.log(a, b , c)
} else if (a < b && a < c && c < b) { 
    console.log(a, c , b)
} else if( b < a && b < c && a < c) { 
    console.log(b, a, c)
}

// if(a < b && a < c) { 
//     if(b < c) { 
//         console.log(a, b , c)
//     } else if( b > c) { 
//         console.log(a, c , b)
//     }
// }else if(b < a && b < c) { 
//     if( a < c) { 
//         console.log(b, a, c)
//     } else if(c < a ) { 
//         console.log("KESINI LOH")
//         console.log(b, c, a)
//     }
// } else { 
//     if(a < b) { 
//         console.log(c,a,b)
//     } else { 
//         console.log(c,b,a)
//     }
// }