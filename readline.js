const { stdin, stdout } = require("node:process");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

//  ask a question

const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;

const ans = num1 + num2;

rl.question(`what is the sum of ${num1} + ${num2}` + "\n", (userInput) => {
  if (parseInt(userInput) === ans) {
    console.log(`The answer ${userInput} is correct!`);
    rl.close();
    return;
  } else {
    console.log(`The answer ${userInput} is wrong!, try again!`);
    rl.setPrompt(`what is the sum of ${num1} + ${num2}` + "\n");
    rl.prompt();
    rl.on("line", (input) => {
      if (parseInt(input) === ans) {
        console.log(`The answer ${input} is correct!`);
        rl.close();
        return;
      }
      rl.setPrompt(`The answer ${input} is wrong!, try again!` + "\n");
      rl.prompt();
    });
  }

  //   console.log(`The answer ${userInput} is wrong!`);
  //   rl.close();
});

rl.on("close", () => {
  console.log("Exiting the application...");
  console.log("application closed");
});
