class Elevator {
  constructor(){
    this.floor       = 0
    this.MAXFLOOR    = 10
    this.requests    = []
    this.waitingList = []
    this.passengers  = []
    this.direction   = 'up'
    this.intervalId
  }

  start() {
    this.intervalId = setInterval(() => this.update(), 1000)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  update() {
    this.log()
    if (this.requests.length == 0) this.stop()
    else {
      if(this.requests[0] == this.floor){
        this.requests.shift()
        this._passengersLeave()
        this._passengersEnter()
      }
      else
        this.requests[0] > this.floor ? this.floorUp() : this.floorDown()
    }
  }

  _passengersEnter() {
    this.waitingList.forEach(e => {
      if(e.originFloor == this.floor){
         this.passengers.push(e)
         this.requests.push(e.destinationFloor)
         console.log(`${e.name} has enter the elevator`)
       }
    })
    this.waitingList = this.waitingList.filter(e => e.originFloor != this.floor)
  }

  _passengersLeave() {
    this.passengers.forEach(e => {
      if(e.destinationFloor == this.floor)
         console.log(`${e.name} has left the elevator`)
    })
    this.passengers = this.passengers.filter(e => e.destinationFloor != this.floor)
  }

  floorUp() {
    this.direction = 'up'
    if(this.floor < this.MAXFLOOR) this.floor++
  }

  floorDown() {
    this.direction = 'down'
    if(this.floor > 0) this.floor--
  }

  call(person) {
    this.requests.push(person.originFloor)
    this.waitingList.push(person)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator
