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

// Export function
module.exports = { readAndWrite };
