class Stack { 
    #maxSize
    #container = []

    constructor(maxSize = 10) { 
        this.#maxSize = maxSize
    }

    #isFull() { 
        return this.#container.length >= this.#maxSize
    }

    #isEmpty() { 
        return this.#container.length == 0
    }

    push(element) { 
        if(!this.#isFull()) { 
            this.#container.push(element)
        } else {
          console.log("Stack Overflow ", element)  
        }
        
    }

    pop() { 
        if(!this.#isEmpty()){
            this.#container.pop()
        } else { 
            console.log("Stack Underflow")  
        }
       
    }

    getElements() { 
        return this.#container
    }
}

let stack1 = new Stack(5)
stack1.push(1)
stack1.push(3)
stack1.push(7)
stack1.pop()
stack1.push(8)
stack1.push(3)
stack1.push(9)
stack1.push(0)

console.log(stack1.getElements())