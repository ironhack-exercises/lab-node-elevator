const Elevator = require('./elevator.js')
const Person = require('./elevator.js')

let elevator = new Elevator()
// elevator.start()
// elevator.stop()

for(let i=0; i<=11; i++){
  elevator.floorUp()
  elevator.log()
}

console.log('-------------');

for(let i=0; i<=11; i++){
  elevator.floorDown()
  elevator.log()
}
