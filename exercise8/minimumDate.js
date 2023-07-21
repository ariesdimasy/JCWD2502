function minimumDate(arrDate) { 
    var selectedDate = new Date(arrDate[0])
    var min = selectedDate
    for(var i = 1; i < arrDate.length; i++) {
        let idate = new Date(arrDate[i]) 
        if(idate < min) { 
            min = idate
        }
    }

    return min
}

console.log(minimumDate(['2022-10-05','2001-06-04','2010-09-10', '1998-10-12']))