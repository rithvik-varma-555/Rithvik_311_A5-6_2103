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