class Product { 
    constructor(productName, price) { 
        this.productName = productName;
        this.price = price
    }

    getProductName() { 
        return this.productName
    }

    setProductName(productName) { 
        this.productName = productName
    }
}

class Book extends Product  { 
    constructor(a, b) { 
        super(a, b)
        this.author
    }

    getAuthor() { 
        return this.author
    }

    setAuthor(author) { 
        this.author = author
    }
}

class Animal {
    name = "default";
    speed = 0;
}
class Rabbit extends Animal{
    
}

const book1 = new Book("Pengen cepet kaya", 10000)
console.log(book1)
