/* 
looping angka dari 1 sampai n 
    jika angka kelipatan 3 ganti jadi fizz
    jika angka kelipatan 5 ganti jadi buzz
    jika angka kelipatan 3 dan kelipatan 5 jadi fizzbuzz
    jika bukan semuanya , cetak angkanya itu sendiri


*/

function fizzBuzz(n) { 
    for(var i = 1; i <=n; i++) { 
        if (i % 15 === 0) { 
            console.log(i, "FizzBuzz")
        } else if(i % 3 === 0) { 
            console.log(i, "Fizz")
        } else if(i % 5 === 0) { 
            console.log(i, "Buzz")
        } else { 
            console.log(i)
        }
    }
}

fizzBuzz(100)