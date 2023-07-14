// create a user
const { EventEmitter } = require("node:events");

class User extends EventEmitter {
  constructor(name, acctNo, bal) {
    super();
    this._name = name;
    this._acctNo = acctNo;
    this._bal = bal;
  }

  //   deposit, withdraw, transfer

  deposit(amt) {
    this._bal += amt;
    return `You sucessfully deposited ${amt}, current bal is: ${this._bal}`;
  }

  withdraw(amt) {
    this._bal -= amt;
    return `You've successfully withdrawn ${amt}, current bal is: ${this._bal}`;
  }

  transfer(acct, amt) {
    acct._bal += amt;
    this._bal -= amt;
    return `You've sent ${amt}, to ${acct._name}`;
  }

  getBal() {
    return this._bal;
  }
}

const user1 = new User("Mayo", 1, 10000);
const user2 = new User("Denis", 2, 0);

user1.on("withdraw", (_amt) => {
  console.log(user1.withdraw(_amt));
});

user1.on("deposit", (_amt) => {
  console.log(user1.deposit(_amt));
});

user1.on("transfer", (_acct, _amt) => {
  console.log(user1.transfer(_acct, _amt));
});

// emitting
user1.emit("withdraw", 2000);
user1.emit("transfer", user2, 1000);
