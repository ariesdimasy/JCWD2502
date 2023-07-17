const Queue = require("./Queue")

let obj1 = new Queue()

obj1.addQueue("Fried Chicken")
obj1.addQueue("rice")
obj1.addQueue("apple")

console.log(obj1.print())

obj1.run()