const array1 = [
    {name:"student 1", email:"student1@mail.com"},
    {name:"student 2", email:"student2@mail.com"},
]

const array2 = [
    {name:"student 1", email:"student1@mail.com"},
    {name:"student 3", email:"student3@mail.com"},
]

function mergeArray(arr1, arr2) {
    var result = [] 
   for(var item of arr1 ) { 
     var find = false
     for(var res of result ) { 
        if(res?.name == item.name) { 
            find = true
        }
     } 
     if(!find) { 
        result.push(item)
     }
   }

   for(var item2 of arr2 ) { 
    var find = false
    for(var res of result ) { 
       if(res?.name == item2.name) { 
           find = true
       }
    } 
    if(!find) { 
       result.push(item2)
    }
  }

   return result 
}


console.log(mergeArray(array1,array2))