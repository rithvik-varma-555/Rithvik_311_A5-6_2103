class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
      }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
        console.log(`Price: $${this.price}`);
    }

    race(turns) {
        for (let i = 1; i <= turns; i++) {
          console.log(`Race Turn ${i}`);
          this.consumeGas();
        }
      }
    
      consumeGas() {
        const gasLoss = this.isNew() ? 5 : 5 + (new Date().getFullYear() - this.year);
        this.gas -= gasLoss;
        console.log(`Gas remaining: ${this.gas} litres`);
        console.log("------------------------");
      }
    
      isNew() {
        return this.year === new Date().getFullYear();
      }
}

const honda = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const bmw = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const kia = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();

const raceTurns = 7;
honda.race(raceTurns);
ford.race(raceTurns);
bmw.race(raceTurns);
mazda.race(raceTurns);
audi.race(raceTurns);
kia.race(raceTurns);