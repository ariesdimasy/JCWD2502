function suit(choice) { 
    var choices = ["rock", 'scissor', "paper"] // 0 1 2

    var computer = choices[Math.floor(Math.random() * 3)]

    // if(choice === computer) { 
    //     return "draw"
    // }

    // if(choice == "rock") { 
    //     if(computer == "rock") {
    //         return "draw"
    //     } else if(computer == "scissor") { 
    //         return "win"
    //     } else {
    //         return "lose"
    //     }
    // }
    console.log("player choose ", choice)
    console.log("computer choose ", computer)
    if(choice == computer) { 
       
        return "draw"
    } else if(choice == "rock") { // player 
        
        return (computer == "paper") ? "lose 1" : "win 1"
    } else if(choice == "paper") { 
      
        return (computer == "scissor") ? "lose 2" : "win 2"
    } else if(choice == 'scissor') { 
        return (computer == 'rock') ? "lose 3" : 'win 3'
    }

    /* 
        if(computer == "paper") { 
            console.log("lose")
        } else {
            console.log("win")
        }
    */

}

/*



*/

console.log( suit("paper"))