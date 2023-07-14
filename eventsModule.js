const { EventEmitter } = require("node:events");

const Emitter = new EventEmitter();

Emitter.addListener("subscribe", (username) => {
  console.log(username + " just subscibed");
});

// alias = on

Emitter.on("unsubscribe", (username) => {
  console.log(username + " just unsubscribed");
});

// emit an event

// Emitter.emit("subscribe", "Green");
// Emitter.emit("unsubscribe", "Reece");

class Car extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  move() {
    console.log(this.name + " is moving...");
  }
}

const car1 = new Car("Lexus");
const car2 = new Car("Benz");

car1.addListener("move", () => {
  car1.move();
});

car2.addListener("move", () => {
  car2.move();
});

car1.emit("move");
car2.emit("move");

// Bank app

// name, acct_no, bal

// withdraw(), transfer(), deposit() - events
