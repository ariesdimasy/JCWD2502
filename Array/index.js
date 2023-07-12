var arr = [1,2,3] // 0,1,2
// object dari class Array 

console.log(arr)
console.log(arr.toString())
console.log(arr.join())
console.log(arr.push(5)) // ini memasukkan 5 ke arr
console.log(arr) // [1,2,3,5] // 0,1,2,3
// console.log(arr.push("bebek"))
// console.log(arr)

// var arr Array[3)= []int 
//     0 ,1,2,3 // 4 
// arr [1,2,3,5]
// for(var i = 0; i < arr.length; i++) { 
//     console.log(arr[i])
// }

// for(let num of arr) { 
//     console.log(num)
// }

// var result = ""
// var i = 0
// for(let num of arr ) { 
//     if(i == arr.length-1) { 
//         result = result + num
//     } else { 
//         result = result + num + ","
//     }
    
//     i++
// }

// console.log(result)
// // 1,2,3
arr.pop()// bisa mnghilangkan data terakhir 
console.log(arr)
arr.unshift(6) // kegunaan sama seperti push tapi dari awal, lawan dari push 
console.log(arr)
arr.shift() // kegunaan sama seperti pop, tapi posisinya berlawanan dari pop 
console.log(arr)

arr[0] = 5

console.log(arr)

arr[0] += 3

console.log(arr)

arr[0] = 4

console.log(arr)

arr[arr.length ] = 6

console.log(arr)

console.log(arr.concat([4,6,7,8],[2,0],0,[1,2]))

console.log(arr)

arr.find(function(item){ return item % 2 === 0} )

