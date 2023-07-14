/**
 * require
 * module
 * exports
 * __filename
 * __dirname
 */

// module wrapper function
// iife = Immediately Invoked Function Execution
function times(a, b) {
  return a * b;
}

function greet(_name) {
  console.log("Hello " + _name);
}

//  complete path to the file
//  complete path to the folder/directory where the file is located

const { log } = console;

log("File Path " + __filename);
log("Directory Path " + __dirname);

module.exports = { times, greet };
// console.log(arguments);
