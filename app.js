// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   // Parse URL
//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;
//   const query = parsedUrl.query;

//   res.writeHead(200, { "Content-Type": "text/plain" });

//   if (path === "/cal") {
//     const func = query.func || "div"; // default to division
//     const a = parseFloat(query.a);
//     const b = parseFloat(query.b);

//     if (isNaN(a) || isNaN(b)) {
//       res.end("Invalid numbers provided.");
//       return;
//     }

//     let result;
//     let message;

//     switch (func) {
//       case "add":
//         result = a + b;
//         message = `Addition is: ${result}`;
//         break;
//       case "subtract":
//         result = a - b;
//         message = `Subtraction is: ${result}`;
//         break;
//       case "multiple":
//         result = a * b;
//         message = `Multiplication is: ${result}`;
//         break;
//       case "div":
//         if (b === 0) {
//           message = "Error: Division by zero";
//         } else {
//           result = a / b;
//           message = `Division is: ${result}`;
//         }
//         break;
//       default:
//         message = "Invalid function. Use add, sub, mul, div.";
//     }

//     res.end(message);
//   } else {
//     res.end(
//       "Welcome! Use /cal?func=add&a=10&b=5 or /cal?a=50&b=20 (for division)"
//     );
//   }
// });

// // Start server
// server.listen(8000, () => {
//   console.log("Server running at http://localhost:8000/");
// });

// const { readAndWrite } = require("./fileModule");

// // Call the function
// readAndWrite();
// Import fs module
const fs = require("fs");

// Define function
function readAndWrite() {
  fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    fs.writeFile("duplicate.txt", data, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log("Content copied to duplicate.txt");
    });
  });
}

// Call the function
readAndWrite();
