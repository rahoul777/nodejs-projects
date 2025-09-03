const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { "Content-Type": "text/plain" });

  if (path === "/cal") {
    const func = query.func;
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);

    if (isNaN(a) || isNaN(b)) {
      res.end("Invalid numbers provided.");
      return;
    }

    let result;
    switch (func) {
      case "add":
        result = a + b;
        break;
      case "sub":
        result = a - b;
        break;
      case "mul":
        result = a * b;
        break;
      case "div":
        result = b !== 0 ? a / b : "Error: Division by zero";
        break;
      default:
        result = "Invalid function. Use add, sub, mul, div.";
    }

    res.end(`Result: ${result}`);
  } else {
    res.end("Welcome! Use /cal?func=add&a=10&b=5");
  }
});

// Start server
server.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
