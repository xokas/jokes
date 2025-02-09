const http = require("http");
const lq = require("./loadQuotes");
const PORT = 3000;

const server = http.createServer(async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET" && req.url === "/joke") {
    const quotes = lq.getQuotes();

    if (quotes.length > 0) {
      return serveRandomQuote(res, quotes);
    } else {
      try {
        await lq.loadQuotes(); 
        return serveRandomQuote(res, lq.getQuotes());
      } catch (error) {
        console.log("Error loading quotes: " + error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Error loading quotes." }));
      }
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

function serveRandomQuote(res, quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const chosenQuote = quotes.splice(randomIndex, 1)[0];
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ quote: chosenQuote }));
}

server.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
