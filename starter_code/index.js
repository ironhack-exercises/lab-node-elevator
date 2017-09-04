const Elevator = require('./elevator.js')
const Person = require('./person.js')

let elevator = new Elevator()
elevator.start()

let julia = new Person ('Julia', 2, 6)
let maria = new Person ('Maria', 1, 5)
let ana = new Person ('Ana', 5, 2)
let pedro = new Person ('Pedro', 6, 1)


elevator.call(julia)
elevator.call(pedro)
setTimeout(()=> elevator.call(maria), 2000)
setTimeout(()=> elevator.call(ana), 3000)
