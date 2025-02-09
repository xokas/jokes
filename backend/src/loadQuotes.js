const fs = require("fs");
const readline = require("readline");

const FILE_PATH = "./data/pratchett.txt";
let quotes = [];

async function loadQuotes() {
  quotes = [];

  const fileStream = fs.createReadStream(FILE_PATH);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const quote of rl) {
    quotes.push(quote);
  }

  console.log(`Loaded ${quotes.length} quotes.`);
}

module.exports = {
  loadQuotes,
  getQuotes: () => quotes,
};
