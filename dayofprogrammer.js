function dayofProgrammer(y) { 
    if(y < 1918) { 
        if(y % 4 === 0) { 
            return "12.09."+y
        } else { 
            return "13.09."+y
        }
    } else if(y > 1918) { 
        if(y % 400 === 0 || (y % 4 === 0 && y % 100 != 0)) { 
            return "12.09."+y
        } else { 
            return "13.09."+y
        }
    } else if(y === 1918) { 
        return "26.09.1918"
    }
}

console.log(dayofProgrammer(1918))

// hari programmer adalah hari ke 256 dari 1 januari setiap tahun 
// 1700 - 1917 => rusia menggunakan Julian calendar 
// tahun 1918 , setelah 31 januari langsung 14 februari 

// Julian calendar 
/* 
     tahun kabisat bisa dibagi 4 
*/
// Gregorian calendar , 
/*
    tahun kabisatnya bisa dibagi 400
    atau bisa dibagi 4 tapi tidak bisa dibagi 100

*/

/*
    input adalah tahun (y) 1800
    find day to ( hari ke ) 256 di tahun yg input 
*/