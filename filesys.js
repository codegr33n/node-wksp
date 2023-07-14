// file system module

const fs = require("fs");

// browser
// node

// update
// writing to files
// deleting files
// read files

// directories/folders

// CRUD

// synchronous codes
// asynchronous codes

// fs.writeFileSync("./files/new.txt", "Hello, just wrote this");

// async
// const data = "This is some data";
// fs.writeFile("./files/async.txt", data, (err) => {
//   if (err) throw err.message;

//   console.log("File was written successfully");
// });

// encode

// const content = fs.readFileSync("./files/new.txt", "utf-8");

// fs.readFile("./files/myFile.txt", "utf-8", (err, data) => {
//   if (err) throw err.message;
//   console.log(data);
// });
// console.log(content);

// try {
//   fs.readFile("./files/new.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     fs.writeFile("./files/new.txt", data + " this today!", (err) => {
//       if (err) throw err;
//       console.log("File has been updated");
//     });
//   });
// } catch ({ message }) {
//   console.log(message);
// }

// append

// fs.appendFile("./files/new.txt", "adding this to the end", (err) => {
//   if (err) throw err;
//   console.log("data appended to file");
// });

// fs.unlink("./files/new.txt", (err) => {
//   if (err) throw err;
//   console.log("File has been deleted");
// });

//  directories

// fs.readdir("./files", (err, files) => {
//   if (err) throw err;

//   console.log(files[0]);
// });

// fs.mkdir("./fold", (err) => {
//   if (err) throw err;
//   console.log("directory has been created");
// });

// fs.rename("./fold", "./fold2", (err) => {
//   if (err) throw err;
//   console.log("Folder renamed");
// });

// fs.readdir("./files", (err, files) => {
//   if (err) throw err;
//   for (let file of files) {
//     fs.unlink(`./files/${file}`, (err) => {
//       if (err) throw err;
//     });
//   }
//   console.log("operation completed!");
// });
