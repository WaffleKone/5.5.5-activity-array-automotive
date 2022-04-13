//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle;

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  'Mecury',
  'Sedan',
  '1965',
  'color',
  'mileage'
);
console.log(v.make);

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassenger = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  loadPassenger(num) {
    if (this.passenger < this.maxPassenger) {
      if (num + this.passenger <= this.maxPassenger) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          `${this.model} ${this.make} doesn't have enough space to take all passengers!`
        );
      }
    } else {
      console.log(`${this.model} ${this.make} is full!`);
    }
  }
  start() {
    if (fuel > 0) {
      console.log('starting!')
      return this.started = true;
    } else {
      console.log("can't start!")
      return this.started = false;
    }
  }
  scheduleService(mileage) {
    if (mileage > 30000) {
      this.scheduleService = true
      return this.scheduleService;
    }
  }
}

let mercurySedan = new Car('mercury', 'sedan', '2004', 'red', '85000')