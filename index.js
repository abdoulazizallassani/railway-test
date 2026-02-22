const http = require("http");

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "Railway CI/CD works 🚀 ++ " }));
}).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
