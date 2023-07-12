class ShootingGame {
    constructor(player1, player2) { 
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() { 
        var items = ['health', 'power']
        var rand = Math.floor(Math.random() * 2)
        var item = items[rand]

        var items2 = [0,10]
        var rand2 = Math.floor(Math.random() * 2)
        var item2 = items2[rand2]

        return { [item]: item2}
    }

    start(){
        var isDead = false
        while(!isDead) { 
            console.log(this.player1.showStatus())
            console.log(this.player2.showStatus())
            console.log("=============================")
            
            this.player1.useItem( this.getRandomItem() )
            this.player2.useItem( this.getRandomItem() )

            this.player1.hit( this.player2.power )
            this.player2.hit( this.player1.power )

            if(this.player1.health <= 0 || this.player2.health <= 0) { 
                isDead = true
            }

        }
        console.log("============= END ===============")
        if(this.player1.health > 0) { 
            console.log( this.player1.name , " is the winner ")
        } else {
            console.log( this.player2.name , " is the winner ")
        }
        console.log(this.player1.showStatus())
        console.log(this.player2.showStatus())

    }
}

class Player { 
    constructor(name) { 
        this.name = name
        this.health = 100
        this.power = 10
    }

    hit(power) {
        this.health -= power
        console.log(this.name+" getting hit for "+power)
    }

    useItem(item) { 
        for( let i in item) { 
            if(i === 'health') { 
                this.health += item[i]
            } else { 
                this.power += item[i]
            }
        }
        console.log(this.name+' use '+JSON.stringify(item))
    }

    showStatus() { 
        return this
    }
}

var player1 = new Player("Aries")

var player2 = new Player("Sagitarius")


var arena = new ShootingGame(player1, player2)

arena.start()

// console.log(arena.getRandomItem())
