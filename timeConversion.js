function timeConversion(s) { 
    let [hour, minute, second] = s.split(":")
    var period = second[2]+"M"
    var newSecond = second[0]+second[1]
    var militaryHour = parseInt(hour)

    if(period == "AM" && militaryHour == 12) { 
       militaryHour = "00" 
    } else if(period == "PM" && militaryHour != 12  ) { 
       militaryHour += 12
    }

    return `${militaryHour}:${minute}:${newSecond}`
}

console.log(timeConversion("05:40:20PM"))

